import {getConnection} from '../db/connection';

export const getBills=async(req,res)=>{
    const pool=await getConnection();
    const result=await pool.request().query(`SELECT * FROM TOTAL_FACTURAS`);
    res.send(result.recordset);
}

export const getBillsDetails=async(req,res)=>{
    const {id}=req.params;
    const pool=await getConnection();
    const result=await pool.request().query(`SELECT * FROM DETALLES_FACTURA WHERE id=${id}`);
    res.send(result.recordset);
}

export const getBillsFilter=async(req,res)=>{
    const {month,year}=req.params;
    const pool=await getConnection();
    const result=await pool.request().query(`SELECT * FROM TOTAL_FACTURAS WHERE DATEPART(MONTH, fecha_facturacion)=${month} AND DATEPART(YEAR, fecha_facturacion)=${year};`);
    res.send(result.recordset);
}
export const createBill=async(req,res)=>{
    const {fecha_facturacion, cliente, compras} =req.body;
    if (fecha_facturacion&&cliente&&compras) {
        const pool=await getConnection();
        pool.request().query(`INSERT INTO FACTURAS(fecha_facturacion, cliente) VALUES ( '${fecha_facturacion}',${cliente})`)
        .then(async(result)=>{
            const r=await pool.request().query(`SELECT * FROM FACTURAS WHERE id=(
                SELECT max(id) FROM FACTURAS)`);
            const {id} =r.recordset[0];
            await compras.map(e=>{
                pool.request().query(`INSERT INTO COMPRAS(factura, producto, unidades) VALUES ( ${id},${e.producto}, ${e.unidades})`)
            })
            res.json({})
        })
        .catch(err=>res.status(400).send('No se ha podido agregar la factura'));
    }else{
        res.status(400).send('Los campos están incompletos')
    }
}

export const editBill=async(req,res)=>{
    const {id,fecha_facturacion, cliente} =req.body;
    if (id&&fecha_facturacion&&cliente) {
        const pool=await getConnection();
        pool.request().query(`UPDATE FACTURAS SET fecha_facturacion='${fecha_facturacion}', cliente=${cliente} WHERE id=${id}`)
        .then(result=>{res.json({})})
        .catch(err=> {res.status(400).send('No se ha podido editar la factura')});
    }else{
        console.log(req.body)
        res.status(400).send('Los campos están incompletos')
    }
}

