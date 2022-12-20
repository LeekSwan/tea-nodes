const { connect } = require('./db_connect')

// module.exports = {

//     get_all_tea_nodes: async function () {
//         console.log('at tea nodes function')
//         connect.query('SELECT * FROM tea_nodes', (err, res) => {
//             console.log(res)
//             return res.rows; 
//         });
//     }
// }


function get_all_tea_nodes() {
    console.log('at tea nodes function')
        connect().query('SELECT * FROM tea_nodes', (err, res) => {
            console.log(res)
            return res.rows; 
        });
    }

module.exports = { get_all_tea_nodes }




