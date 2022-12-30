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

        const addTea = {text:  'INSERT INTO tea_nodes (tea_name, tea_link, tea_location, tea_description) VALUES($1, $2, $3, $4)',
                               values :[tea_name, tea_link, tea_location, tea_description]}
            const result = await db.query(addTea)
            return result
    }
}






