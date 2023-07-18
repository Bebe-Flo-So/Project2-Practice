//import express first
const express = require('express')

//create our app
const app = express()

//set up a route for API
app.get('/api', (req, res) => {
    res.json({'users': ['userOne', 'userTwo', 'UserThree'] })
})

//server to listen
app.listen(5000, () => {console.log("server listening on port 5000") })