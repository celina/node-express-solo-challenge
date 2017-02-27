$(document).ready(function() {
  console.log('jquery loaded');

  var jokesObject = {};

  loadJokes();

  function loadJokes(object){
    $.ajax({
      type: 'GET',
      url: '/jokes',
      data: object,
      success: function(response){
        console.log('response from jokes on server is:', response);
        jokesObject = response;
        for (var i = 0; i < response.length; i++) {
          // $('#jokesContainer').append('<div class="jokeDiv">' + response[i] + '</div>');
          $('#jokesContainer').append('<div class="jokeDiv"> Joke ' + i + '\: ' + response[i] + '</div>');
        }
        console.log('jokesObject:', jokesObject);
        // console.log('response.whoseJoke:', response.whoseJoke[0]);
      }
    })
  }

}); // end document ready
