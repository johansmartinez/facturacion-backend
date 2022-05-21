import {getConnection} from '../db/connection';

export const getPurchases=async(req,res)=>{
    const pool=await getConnection();
    const result=await pool.request().query(`SELECT * FROM COMPRAS`);
    res.send(result.recordset);
}

export const createPurchase=async(req,res)=>{
    const {factura, producto, unidades} =req.body;
    if (factura&&producto&&unidades) {
        const pool=await getConnection();
        pool.request().query(`INSERT INTO COMPRAS(factura, producto, unidades) VALUES ( ${factura},${producto}, ${unidades})`)
        .then(async(result)=>{res.send({})})
        .catch(err=>res.status(400).send('No se ha podido agregar la compra'));
    }else{
        res.status(400).send('Los campos están incompletos')
    }
}


