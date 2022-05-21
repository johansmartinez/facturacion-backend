import {getConnection} from '../db/connection';

export const getProducts=async(req,res)=>{
    const pool=await getConnection();
    const result=await pool.request().query(`SELECT * FROM PRODUCTS_VIEW`);
    res.send(result.recordset);
}

export const createProduct=async(req,res)=>{
    const {nombre, precio_unitario, proveedor} =req.body;
    if (nombre&&precio_unitario&&proveedor) {
        const pool=await getConnection();
        pool.request().query(`INSERT INTO PRODUCTOS( nombre, precio_unitario, proveedor) VALUES ( '${String(nombre).toUpperCase()}',${precio_unitario},'${proveedor}')`)
        .then(result=>{res.json({})})
        .catch(err=>res.status(400).send('No se ha podido agregar el Producto'));
    }else{
        res.status(400).send('Los campos están incompletos')
    }
}

export const editProduct=async(req,res)=>{
    const {codigo,nombre, precio_unitario, proveedor} =req.body;
    if (codigo&&nombre&&precio_unitario&&proveedor) {
        const pool=await getConnection();
        pool.request().query(`UPDATE PRODUCTOS SET nombre='${String(nombre).toUpperCase()}', precio_unitario=${precio_unitario}, proveedor='${proveedor}' WHERE codigo=${codigo}`)
        .then(result=>{res.json({})})
        .catch(err=> {res.status(400).send('No se ha podido editar el producto')});
    }else{
        res.status(400).send('Los campos están incompletos')
    }
}

