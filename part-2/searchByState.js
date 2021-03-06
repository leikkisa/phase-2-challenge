#!/usr/bin/env node
const clients = require('./clients')
let state = process.argv[2]
if (state === undefined) {
  console.log("Please include a state when running this file, for example: node searchByState.js Maryland")
} else {
  console.log('Finding clients in state "' + state + '"...')

  const clientsByState = clients.filter((item) => item.state.toLowerCase() === state.toLowerCase())

  const selectedPropsByState = clientsByState.map(function(item) {
     const result = {}
     result.id = item.id
     result.rep_name = item.rep_name
     result.company = item.company
     result.city = item.city
     result.state = item.state
     return result
  })

  if (selectedPropsByState.length === 0) {
    console.log("No results found. Please double check that you've correctly spelled the entire name of the state.")
  } else {
    console.log(selectedPropsByState)
  }
}
