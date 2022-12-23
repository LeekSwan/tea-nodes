const Queries = require('../model/db_queries')



async function getAllTeas () {
    const teas = await Queries.get_all_tea_nodes()
    return teas
}



module.exports = {
    getAllTeas
}
