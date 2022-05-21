import {getConnection} from '../db/connection';

export const getProviders=async(req,res)=>{
    const pool=await getConnection();
    const result=await pool.request().query(`SELECT * FROM PROVEEDORES`);
    res.send(result.recordset);
}

export const createProvider=async(req,res)=>{
    const {nif, nombre, direccion } =req.body;
    if (nif&&nombre&&direccion) {
        const pool=await getConnection();
        pool.request().query(`INSERT INTO PROVEEDORES(nif, nombre, direccion) VALUES ( '${nif}', '${String(nombre).toUpperCase()}','${String(direccion).toUpperCase()}')`)
        .then(result=>{res.json({})})
        .catch(err=>res.status(400).send('El nit ya se encuentra inscrito'));
    }else{
        res.status(400).send('Los campos están incompletos')
    }
}

export const editProvider=async(req,res)=>{
    const {nif, nombre, direccion } =req.body;
    if (nif&&nombre&&direccion) {
        const pool=await getConnection();
        pool.request().query(`UPDATE PROVEEDORES SET nombre= '${String(nombre).toUpperCase()}',direccion='${String(direccion).toUpperCase()}' WHERE nif='${nif}'`)
        .then(result=>{res.json({})})
        .catch(err=> {res.status(400).send('No se ha podido editar el proveedor')});
    }else{
        res.status(400).send('Los campos están incompletos')
    }
}

export const deleteProvider=async(req,res)=>{
    const {nif} =req.params;
    if (nif) {
        const pool=await getConnection();
        pool.request().query(`DELETE FROM PROVEEDORES WHERE nif='${nif}'`)
        .then(result=>{res.json({})})
        .catch(err=>res.status(400).send('NO se ha podido eliminar el proveedor'));
    }else{
        res.status(400).send('Por favor digite un nif')
    }
}