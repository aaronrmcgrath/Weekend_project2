

//jQuery - waits until document is ready and loads/GET data from data.json
$(document).ready(function(){
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data){
      console.log(data);
      kappaRiders = data.kappa;
      appendDom(data);
    }
  });

  $('.button-container').append('<button type="button" class="previous btn btn-success">Previous</button>');
  $('.button-container').append('<button type="button" class="next btn btn-success">Next</button>');

  $('.button-container').on('click', '.previous', onPrevious);
  $('.button-container').on('click', '.next', onNext);

  // $('.button-container').on('click', function() {
  //   $('.carousel').fadeIn('slow', 'swing');
  // });

});


//GLOBAL VARIABLES

var index = 0;
var $el = undefined;
var legendNum = 0;
var timer = 0;
var kappaRiders = [];



//FUNCTIONS

//Appends the Dom and creates the previous and next buttons
function appendDom(data) {

  timer = setInterval(onNext, 10000);

  // console.log('*** --->> index before if/else: ', index);

  if (index > kappaRiders.length - 1) {
    index = 0;
    // return index;
  } else if (index < 0) {
    index = kappaRiders.length - 1;
    // return index;
  }

  // console.log('*** --->> index after if/else: ', index);

  $('.carnival').append('<div class="carousel"></div>');

  var $el = $('.carnival').children().last();
  // person = data.kappa;

  $el.append('<br />');
  $el.append('<p>' + kappaRiders[index].name + '</p>').hide().fadeIn('slow');
  $el.append('<p>' + kappaRiders[index].location + '</p>').hide().fadeIn('slow');
  $el.append('<p>' + kappaRiders[index].spirit_animal + '</p>').hide().fadeIn('slow');
  $el.append('<p>' + kappaRiders[index].shoutout + '</p>').hide().fadeIn('slow');

  for (var i = 0; i < kappaRiders.length; i++) {

    var legendClass = '.legend-' + i;

    $('.index').append('<p class="container legend legend-' + i + '"></p>');

    if (index == i) {
      $('.legend-' + i + '').addClass('highlight');
    }

  }

  console.log(index, i);
}


//Controls the 'Next' button
function onNext() {
  index++;
  clearInterval(timer);
  // var person = data.kappa;
  // if (index > data.kappa.length - 1) {
  //   index = 0;
  // }
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data){
      console.log('onNext data: ', data);
      // $('.carousel').fadeOut('fast', function() {$(this).empty();});
      $('.carousel').empty();
      $('.index').empty();
      appendDom(data);
      // console.log(index);
      // return index;
    }
  });
  // console.log(index);
}


//Controls the 'Previous' button
function onPrevious() {
  index--;
  clearInterval(timer);
  // var person = data.kappa;
  // if (index < 0) {
  //   index = data.kappa.length - 1;
  // }
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data){
      console.log('onPrevious data: ', data);
      $('.carousel').empty();
      $('.index').empty();
      appendDom(data);
      // console.log(index);
      // return index;
    }
  });
  // console.log(index);
}






//END ------>>> trialed functions below v




// var legendClass = '.legend-' + legendNum;
//
// if (index == legendNum) {
//         $('.legend-' + legendNum + '').addClass('highlight');
// }



//Counter Legend function
// function legendIndex() {
//   $('.index').empty();
//   for (var j = 0; j <= data.kappa.length; j++) {
//     $('.index').append('<p class="container legend legend-box[j]"></p>');
//   }
//   console.log(j, index);
// }




        // function onNext() {
        //   index++;
        //   // var person = data.kappa;
        //   if (index > data.kappa.length - 1) {
        //     index = 0;
        //   }
        //   // appendDom();
        //   console.log(index);
        //   return index;
        // }
        //
        // function onPrevious() {
        //   index--;
        //   // var person = data.kappa;
        //   if (index < 0) {
        //     index = data.kappa.length - 1;
        //   }
        //   // appendDom();
        //   console.log(index);
        //   return index;
        // }





        // function onNext() {
        //   index++;
        //   var person = data.kappa;
        //
        //   if (index > person.length - 1) {
        //     index = person.length;
        //   }
        //   console.log(index);
        // }

        // function onPrevious() {
        //   index--;
        //   console.log(index);
        // }
