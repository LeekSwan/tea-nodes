const { appendFile } = require('fs')
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

async function addTea (newtea) {
    //pass values through query
    //throw error should stop
    console.log("before dobethere")
    const doBeThere = await Queries.do_tea_be_there(newtea['tea_name'])
    console.log("after const dobethere")
    console.log(doBeThere)
    if (doBeThere) {
        console.log("inside dobethere")
        throw new Error('TeaAlreadyExists')
    }

    if (newtea['tea_name']== "" || newtea['tea_link'] == "" || newtea['tea_location'] == "" || newtea['tea_description']== "") {
        throw new Error('MissingValue(s)')  
    }
    const new_tea = await Queries.add_tea(newtea['tea_name'],newtea['tea_link'],newtea['tea_location'],newtea['tea_description'])
    return new_tea
    
}

module.exports = {
    getAllTeas,
    getAllEdges,
    addTea
}
