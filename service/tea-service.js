const { check_tea_exists } = require('../model/db_queries')
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
    console.log('dbg 1: ' + teaId)
    const teaExists = await check_tea_exists(teaId)
    console.log('dbg 2: ' + teaExists)
    if (teaExists == true) {
        const tea_delete = await Queries.delete_tea(tea_Id)
        return tea_delete
    } else {
        return false
    }
}



module.exports = {
    getAllTeas,
    getAllEdges,
    deleteTea
}
