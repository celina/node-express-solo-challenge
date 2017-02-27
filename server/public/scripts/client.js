$(document).ready(function() {
  console.log('jquery loaded');

  $.ajax({
  type: "POST",
  url: "/jokes",
  success: function(response){
    // yay! we have data!
    // console.log('data from server: ', data.phirephiters);
      console.log('jokes loaded');
      // fadeIn();
    } // end success
  }); // end ajax

});
