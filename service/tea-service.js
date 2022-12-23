const Queries = require('../model/db_queries')



async function getAllTeas () {
    const teas = await Queries.get_all_tea_nodes()
    return teas
}

async function getAllEdges () {
    const edges = await Queries.get_edges()
    return edges
}



module.exports = {
    getAllTeas,
    getAllEdges
}
