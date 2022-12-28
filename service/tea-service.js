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

async function deleteTea (teaId) {
    if (teaId == 1) { // If teaId is root tea, throw error
        throw new Error('cannotDeleteRootTea')
    }
    const teaExists = await Queries.check_tea_exists(teaId)
    if (!teaExists) {
        throw new Error('teaNotFound')
    }
    const tea_delete = await Queries.delete_tea(teaId)
    if (!tea_delete) {
        throw new Error('deleteTeaError')
    }
    return tea_delete

    // TODO: figure out logic for deleting edges

}


module.exports = {
    getAllTeas,
    getAllEdges,
    getAllEdges,
    deleteTea
}
