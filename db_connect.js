const { Pool } = require('pg');

// Create a connection pool using the connection information provided on bit.io.
function connect() {
    return new Pool({
        user: 'rabidrabbit',
        host: 'db.bit.io',
        database: 'rabidrabbit/tea-db', // public database 
        password: 'v2_3x7yt_YRZX48KNswH4Uq8jLADWKee', // key from bit.io database page connect menu
        port: 5432,
        ssl: true,
    });
}

module.exports = { connect }
