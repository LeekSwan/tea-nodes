const  db = require('./db_connect')

module.exports = {
    get_all_tea_nodes: async function () {
        const getAllTeas = {text: 'SELECT * FROM tea_nodes'}
        const result = await db.query(getAllTeas)
        return result.rows
    },

    //Gets all edges from database
    get_all_edges: async function () {
        const getAllEdges = {text: 'SELECT * FROM edges'}
        const result = await db.query(getAllEdges)
        return result.rows
    }
}