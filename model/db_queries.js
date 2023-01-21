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
    },



    do_tea_be_there: async function(teaname) {
        const checkExist = {text: 'SELECT EXISTS(SELECT 1 FROM tea_nodes WHERE tea_name = $1)', values: [teaname]}
        const result = await db.query(checkExist)
        return JSON.stringify(result.rows[0]['exists']) === 'true'
    },


    //add tea to database
    add_tea: async function(tea_name, tea_link, tea_location, tea_description) {
        const addTea = {text:  'INSERT INTO tea_nodes (tea_name, tea_link, tea_location, tea_description) VALUES($1, $2, $3, $4) RETURNING id',
                               values :[tea_name, tea_link, tea_location, tea_description]}
        const result = await db.query(addTea)
        return result['rows'][0]['id']
    },

    // query to check if a tea exists by its id. Returns true if exists, false otherwise
    check_tea_exists: async function(teaId) {
        const checkExist = {text: 'SELECT EXISTS(SELECT 1 FROM tea_nodes WHERE id = $1)', values: [teaId]}
        const result = await db.query(checkExist)
        return JSON.stringify(result.rows[0]['exists']) === 'true'
    },

    delete_tea: async function(teaId) {
        const deleteTea = {text: 'DELETE FROM tea_nodes WHERE id = $1', values: [teaId]}
        // const deleteEdges = {text: 'DELETE FROM edges WHERE from_node = $1 or to_node = $1', values: [teaId]}
        // const edges_result = await db.query(deleteEdges)
        try {
            await db.query(deleteTea)
            return true
        } catch (err) {
            console.log('Delete tea failed. Error: ' + err)
            return false
        }
    }

}

