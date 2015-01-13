$(function() {
  var total = $('#container').width();
  $('#section1').css({width: Math.round(total / 3) + 'px'});
  $('#section2').css({width: Math.round(total / 3) + 'px'});
});

var array1 = [];
var array2 = [];
var answer1;
var answer2;

$(document).ready(function() {

  $('#f2').hide();
  $('#gabumon2').hide();
  $('#gabumon3').hide();
  $('#firstQ').focus();

  $('#form1').on('submit', function(e) {
    e.preventDefault();
    answer1 = $('#firstQ').val();

    if (answer1.toLowerCase() != 'mary' && array1.length < 3) {
      $('#wrongAnswer').append('<p id=\'wrongList\'>' + answer1 + '</p>');
      array1.push(answer1);
      $('#firstQ').val('');

    } else {
      $('#form1').replaceWith('<button id=\'next\'>NEXT!!</button>');
      $('#showAnswer1').text('The correct answer is Mary!');
      $('#gabumon1').hide();
      $('#gabumon2').show();
      $('#section1Title').hide();
      $('#section2').hide();
      $('#next').click(function() {
        $('#f2').show();
        $('#showAnswer1').hide();
        $('#next').hide();
        $('#wrongAnswer').text(' ');
        $('#section1Title').show().text('Here\'s your next question.');
        $('#section2').show();
        $('#lastQ').focus();

      });
    }
  });

  $('#form2').on('submit', function(b) {
    b.preventDefault();
    answer2 = $('#lastQ').val();
    if (answer2.toLowerCase() != 'short' && array2.length < 3) {
      $('#wrongAnswer').append('<p id=\'wrongList\'>' + answer2 + '</p>');
      array2.push(answer2);
      $('#lastQ').val('');

    } else {
      $('#section1Title').hide();
      $('#gabumon2').hide();
      $('#gabumon3').show();
      $('#showAnswer2').text('The correct answer is \'short\'!');
      $('#section2').hide();
      $('#form2').replaceWith('<p id=\'farewell\'>Thanks for playing!</p>');
    }
  });
});
