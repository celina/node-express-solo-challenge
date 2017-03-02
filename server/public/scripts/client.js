$(document).ready(function() {
  console.log('jquery loaded');

  var jokesObject = [];

  $('button').on('click', function() {
    var inputAuthor = $('#inputAuthor').val();
    var inputJoke = $('#inputJoke').val();
    var inputAnswer = $('#inputAnswer').val();

  var newJoke = {
    whoseJoke: inputAuthor,
    jokeQuestion: inputJoke,
    punchLine: inputAnswer
  }

  console.log('This is the object we\'re sending: ', newJoke);

    $.ajax({
      type: 'POST',
      url: '/jokes',
      data: newJoke,
      success: function(response) {
        console.log('response from post jokes: ', response);
        buildJokes(response);
        $('#inputAuthor').val('');
        $('#inputJoke').val('');
        $('#inputAnswer').val('');
      }
    });
  });

  $.ajax({
    type: 'GET',
    url: '/jokes',
    success: function(response){
      console.log('response from jokes on server is:', response);
      buildJokes(response);
    }
  })

}); // end document ready

function buildJokes(response) {
  for (var i = 0; i < response.length; i++) {
    var container = $('<div>');
    var author = $('<p>Author: ' + response[i].whoseJoke + '</p>');
    var question = $('<p>Question: ' + response[i].jokeQuestion + '</p>');
    var answer = $('<p>Answer: ' + response[i].punchLine + '</p>');

    container.append(author).append(question).append(answer);
    $('#jokesContainer').append(container);
  }
}
