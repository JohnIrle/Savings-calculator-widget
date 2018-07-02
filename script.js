$(document).ready(function(){

  //Takes the values of the select boxes and then calculates new values
  function calculateFinance() {

    var $cost = $('#cost').val();
    var $time = $('#time').val();
    var costResult = $cost * $time * 12;
    var firstSavings = costResult - 3090;
    var secondSavings = costResult - 480;


    $('#timeNum').val($time);
    $('#costResult').val("$" + costResult);
    //Make the background red if the number is less than zero
    if(firstSavings < 0){
      $('#firstsavings').css({'background-color': 'red', 'color': 'white'});
    }
    //Make the background green if the number is greater than zero
    if(firstSavings > 0){
      $('#firstsavings').css({'background-color': 'green', 'color': 'white'});
    }
    //Set the value of firstsavings
    $('#firstsavings').val("$" + firstSavings);

    //Make the background red if the number is less than zero
    if(secondSavings < 0){
      $('#secondsavings').css({'background-color': 'red', 'color': 'white'});
    }
    //Make the background green if the number is greater than zero
    if(secondSavings > 0){
      $('#secondsavings').css({'background-color': 'green', 'color': 'white'});
    }
    //Set the value of secondsavings
    $('#secondsavings').val("$" + secondSavings);
  }

  function calculateTime() {
     var $drive = $('#drive').val();
     var $time = $('#time').val();
     var trip = $drive * $time * 2;
     var year = trip * 12;
     var hours = year / 60;

     $('#timeResult').val(hours + ' hours.');
  }

  $('#time').on('change', function() {
        calculateFinance();
        calculateTime();
    });

    $('#cost').on('change', function() {
        calculateFinance();
    });

    $('#drive').on('input', function(){
      calculateTime();
    });

    $('#times').on('input', function(){
      calculateTime();
    });
});
