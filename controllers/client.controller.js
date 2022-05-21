import {getConnection} from '../db/connection';

export const getClients=async(req,res)=>{
    const pool=await getConnection();
    const result=await pool.request().query(`SELECT * FROM CLIENTES`);
    res.send(result.recordset);
}

export const createClient=async(req,res)=>{
    const {dni, nombre, apellido, direccion,fecha_nacimiento} =req.body;
    if (dni&&nombre&&apellido&&direccion&&fecha_nacimiento) {
        const pool=await getConnection();
        pool.request().query(`INSERT INTO CLIENTES(dni, nombre, apellido, direccion,fecha_nacimiento) VALUES ( '${dni}', '${String(nombre).toUpperCase()}','${String(apellido).toUpperCase()}','${String(direccion).toUpperCase()}','${fecha_nacimiento}')`)
        .then(result=>{res.json({})})
        .catch(err=>res.status(400).send(err));
    }else{
        res.status(400).send('Los campos están incompletos')
    }
}

export const editClient=async(req,res)=>{
    const {dni, nombre, apellido, direccion,fecha_nacimiento} =req.body;
    if (dni&&nombre&&apellido&&direccion&&fecha_nacimiento) {
        const pool=await getConnection();
        pool.request().query(`UPDATE CLIENTES SET nombre='${String(nombre).toUpperCase()}', apellido='${String(apellido).toUpperCase()}', direccion='${String(direccion).toUpperCase()}',fecha_nacimiento='${fecha_nacimiento}' WHERE dni='${dni}'`)
        .then(result=>{res.json({})})
        .catch(err=> {res.status(400).send('No se ha podido editar el cliente')});
    }else{
        res.status(400).send('Los campos están incompletos');
    }
}

