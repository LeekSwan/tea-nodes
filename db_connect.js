const { Pool } = require('pg');

// Create a connection pool using the connection information provided on bit.io.
function connect() {
    return new Pool({
        user: 'rabidrabbit',
        host: 'db.bit.io',
        database: '', // public database 
        password: '',
        port: 5432,
        ssl: true,
    });
}

module.exports = { connect }
