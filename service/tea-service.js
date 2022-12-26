const Queries = require('../model/db_queries')

async function getAllTeas () {
    const teas = await Queries.get_all_tea_nodes()
    return teas
}

//heavy lifting 'get edges' fxn to to be referenced by app.js
async function getAllEdges () {
    const edges = await Queries.get_all_edges()
    return edges
}

module.exports = {
    getAllTeas,
    getAllEdges
}
