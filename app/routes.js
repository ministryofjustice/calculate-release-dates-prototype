const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Run this code when a form is submitted 
router.post('/sandbox/offence-days-answer', function (req, res) {

  // Make a variable and give it the value 
  var offenceDays = req.session.data['offence-multiple-days']
console.log(offenceDays)
  // Check whether the variable matches a condition
  if (offenceDays == "yes"){
    // Send user to next page
    res.redirect('/sandbox/offence-date-a-3')
  }

})

// Route for adjustments
router.post('/version-2/adjustments-answer', function (req, res) {

  // Make a variable and give it the value 
  var adjustmentsApply = req.session.data['are-there-any-adjustments']
console.log(adjustmentsApply)
  // Check whether the variable matches a condition
  if (adjustmentsApply == "yes"){
    // Send user to next page
    res.redirect('/version-2/what-adjustments') 
  } else res.redirect('/version-2/check-answers')

})

// Route for adjustments
router.post('/version-2/what-adjustments-apply', function (req, res) {

  var adjustment = req.session.data['adjustment']
  var nextQ = req.session.data['nextQ']

console.log(adjustment)
  if (adjustment == "remand"){
    res.redirect('/version-2/remand-dates') 
  }
  else if (adjustment == "tagged-bail"){
    res.redirect('/version-2/tagged-bail-dates')
  }
  else if (adjustment == 'remand', 'tagged-bail'){
    console.log("remand + tagged bail")
    res.redirect("/version-2/remand-dates-2")
  }
  else res.redirect('/version-2/check-answers')

})


// V6 settings
// Route for start page
router.post('/version-6/start-point-answer', function (req, res) {

  // Make a variable and give it the value 
  var startPoint = req.session.data['start-point']
console.log(startPoint)
  // Check whether the variable matches a condition
  if (startPoint == "dps"){
    // Send user to next page
    res.redirect('/version-6/dps/dps-home') 
  } else res.redirect('/version-6/start')

})

// Route for adjustments
router.post('/version-6/start-point-answer', function (req, res) {

  var sp = req.session.data['start-point']

console.log(sp)
  if (sp == "dps"){
    res.redirect('/version-2/remand-dates') 
  }
  else if (sp == "standalone"){
    res.redirect('/version-2/tagged-bail-dates')
  }
})


module.exports = router
