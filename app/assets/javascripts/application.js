/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
  window.MOJFrontend.initAll()
})

// Check all checkboxes
$('#unselect-all').click(function(event) {   
    if(this.checked) {
        // Iterate each checkbox
        $('.count').each(function() {
            this.checked = false;                        
        });
    } 
}); 

