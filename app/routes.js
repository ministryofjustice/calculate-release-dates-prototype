const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/sandbox/offence-days-answer', function (req, res) {

  // Make a variable and give it the value from 'juggling-balls'
  var offenceDays = req.session.data['offence-multiple-days']
console.log(offenceDays)
  // Check whether the variable matches a condition
  if (offenceDays == "yes"){
    // Send user to next page
    res.redirect('/sandbox/offence-date-a-3')
  }

})

module.exports = router
