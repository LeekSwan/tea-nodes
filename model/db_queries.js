const  {connect} = require('./db_connect')

module.exports = {

    get_all_tea_nodes: async function () {
        const getAllTeas = {text: 'SELECT * FROM tea_nodes'}
        const result = await connect().query(getAllTeas)
        return result.rows
    }
}




