import mysql from 'mysql2/promise'

export const MySQLProvider = {
    provide: 'MYSQL_POOL',
    useFactory: async () =>{
        return mysql.createPool({
            port: 3306,
            host: "localhost",
            user: 'root',
            password: 'root',
            database: 'spotter',
            waitForConnections: true,
            connectionLimit: 10,
        })
    }
}