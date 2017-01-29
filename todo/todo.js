// This code runs when the page loads
$(function() {

  $(".btn").on("click", function(event) {
    event.preventDefault()
    var elementThatWasClicked = $(this)
    console.log(elementThatWasClicked)
    // remove the element as well as its parent
    elementThatWasClicked.parent().remove()
  })

})
