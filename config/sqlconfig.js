import { exports } from "mssql/lib/base";

const sqlConfig = {
    user: 'prueba',
    password: 'prueba',
    database: 'products',
    server: 'localhost',
    type:'mssql',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
      encrypt: true, // for azure
      trustServerCertificate: true // change to true for local dev / self-signed certs
    }
};

export default sqlConfig;