// Debugging
var bug = require('debug')
var debug = bug('rockit-express:api:user')

// Database
var db = require('../../lib/db')

// Router
var express = require('express')
var router = express.Router()

// Utility for changing case
var changeCase = require('../../lib/change-case')


// Homeowners
router.get('/homeowners', function(req, res) {
  //debug('GET' + req.path)

  db.selectFile('get-homeowners', function(error, rows, fields) {
    if (error) {
      debug('DB Error', error)
      return res.status(500).send({ error })
    }

    res.json(rows.map(changeCase))
  })
})



module.exports = router