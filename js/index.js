$(document).ready(function(){

  function append() {
    event.preventDefault();
    var city = ['NYC', 'SF', 'LA', 'ATX','SYD'];
    for (var i = 0; i < city.length; i++) {
      $('select').append('<option>'+ (city[i]) +'<option>');
    }
  }

function choice(){
  event.preventDefault();
  var entry = $('#city-type').val();

  if (entry == 'ATX'){
    $("body").attr('class', 'austin');
  } else if (entry =='LA'){
    $("body").attr('class', 'la');
  } else if (entry =='SF'){
    $("body").attr('class', 'sf');
  } else if (entry =='NYC'){
    $("body").attr('class', 'nyc');
  } else if (entry =='SYD'){
    $("body").attr('class', 'sydney');
  } else {
    $("body").attr('class', 'austin');
  }

}

  $('#city-type').change(choice);
});
