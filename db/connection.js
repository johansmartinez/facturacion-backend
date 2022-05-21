import sql from "mssql";
import sqlConfig from '../config/sqlconfig';

export async function getConnection() {
    try {
        const pool= await sql.connect(sqlConfig);
        return pool;
    } catch (error) {
        console.log('No se ha podido conectar a la base de datos');
    }
}

export {sql};