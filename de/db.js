const mysql = require ("mysql2");
// const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "2109",
    database: "eventdp"
});

db.getConnection((err, connection) => {
    if(err){
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.error('Database connection was closed.');
        }
        if(err.code === 'ER_CON_COUNT_ERROR'){
            console.error('Database has too many connections.');
        }
        if(err.code === 'ECONNREFUSED'){
            console.error('Database connection was refused.');
        }
    }
    if(connection) connection.release();

    return;
})

module.exports = db;