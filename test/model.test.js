const { expect } = require('chai')

const ModelQueries = require('../model/db_queries.js')

describe('sample test', function() {
  // initialize global variables
  let beforeCount = 0 
  let afterCount = 0

  // this runs before each test block
  beforeEach('increment beforeCount', async function () {
    beforeCount ++
  })

  // this runs after each test block
  afterEach('increment afterCount',async function () {
    afterCount ++
  })

  // a test block that checks for something
  it('should pass', function () {
    console.log('before count value: ' + beforeCount)
    console.log('after count value: ' + afterCount)
    expect(true).to.equal(true)
  })

  // a test block that checks for something
  it('should pass', function () {
    console.log('before count value: ' + beforeCount)
    console.log('after count value: ' + afterCount)
    expect(true).to.equal(true)
  })
})

describe('get_all_tea_nodes', function() {
    it('should return a non empty list with tea in first position', async function () {
        const tea_nodes = await ModelQueries.get_all_tea_nodes()
        expect(tea_nodes[0]['tea_name']).to.equal('Tea')
    });    
});


describe('add_tea', function() {
    let tea_name, tea_link, tea_location, tea_description
    let add_id
    beforeEach('setup db', async function () {
      tea_name = 'tea_name'
      tea_link = 'tea_link'
      tea_location = 'tea_location'
      tea_description = 'unit_test'

      add_id = await ModelQueries.add_tea(tea_name, tea_link, tea_location, tea_description)
    })

    afterEach(async function () {
      await ModelQueries.delete_tea(add_id)
    })

    it('we should be able to get the last tea added', async function () {
      const tea_nodes = await ModelQueries.get_all_tea_nodes()
      expect(tea_nodes[tea_nodes.length - 1]['tea_name']).to.equal('tea_name')
    });    
});