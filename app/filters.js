const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter

addFilter('unique', function(arr, field) {
  return [...new Set(arr.map(obj => obj[field]))]
})

addFilter('hasSentence', function(arr) {
  return arr.filter(sentence => sentence['count-number'] !== undefined)
})

addFilter('needsSentence', function(arr) {
  return arr.filter(sentence => sentence['count-number'] === undefined) 
})

addFilter('countNonDraft', function(arr) {
  return arr.filter(appearance => appearance['status'] != 'draft').length 
})

addFilter('countDraft', function(arr) {
  return arr.filter(appearance => appearance['status'] == 'draft').length 
})

addFilter('inactiveCase', function(arr) {
  return arr.filter(courtCase => courtCase['unsupported'] != 'true' & courtCase['status'] == 'inactive')
})

addFilter('activeCase', function(arr) {
  return arr.filter(courtCase => courtCase['unsupported'] != 'true' & courtCase['status'] != 'inactive' )
})

addFilter('unsupportedInactiveCase', function(arr) {
  return arr.filter(courtCase => courtCase['unsupported'] == 'true' & courtCase['status'] == 'inactive' )
})

addFilter('unsupportedActiveCase', function(arr) {
  return arr.filter(courtCase => courtCase['unsupported'] == 'true' & courtCase['status'] != 'inactive' )
})

addFilter('unsupportedSentence', function(arr) {
  return arr.filter(appearances => appearances['unsupported-sentence'] == 'true' & appearances['status'] != 'inactive' )
})
 
addFilter('activeSentence', function(arr) {
  return arr.filter(appearances => appearances['unsupported-sentence'] != 'true' & appearances['status'] != 'inactive' )
})
 

const { DateTime } = require('luxon')

addFilter('govukDate', function(input, format = 'short') {
  let date

  if (input === 'today') {
    date = DateTime.local()
  } else {
    // Try parsing ISO string or JS date
    date = DateTime.fromISO(input)
    if (!date.isValid) {
      date = DateTime.fromJSDate(new Date(input))
    }
  }

  if (!date.isValid) return input

  if (format === 'long') {
    // Long GOV.UK style (e.g. 01 September 2025)
    return date.toFormat('dd MMMM yyyy')
  } else {
    // Short UK style with leading zeros (e.g. 01/09/2025)
    return date.toFormat('dd/LL/yyyy')
  }
})

