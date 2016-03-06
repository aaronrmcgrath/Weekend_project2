

//jQuery - waits until document is ready and loads/GET data from data.json
$(document).ready(function(){
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data){
      console.log(data);
      appendDom(data);
    }
  });

  $('.button-container').append('<button type="button" class="previous btn btn-success">Previous</button>');
  $('.button-container').append('<button type="button" class="next btn btn-success">Next</button>');

  $('.button-container').on('click', '.previous', onPrevious);
  $('.button-container').on('click', '.next', onNext);

});


//GLOBAL VARIABLES

var index = 0;
var $el = undefined;
// var person = undefined;



//FUNCTIONS

//Appends the Dom and creates the previous and next buttons
function appendDom(data) {

  console.log('*** --->> index before if/else: ', index);

  if (index > data.kappa.length - 1) {
    index = 0;
    // return index;
  } else if (index < 0) {
    index = data.kappa.length - 1;
    // return index;
  }

  console.log('*** --->> index after if/else: ', index);

  $('.carnival').append('<div class="carousel"></div>');

  var $el = $('.carnival').children().last();
  // person = data.kappa;

  $el.append('<br />');
  $el.append('<p>' + data.kappa[index].name + '</p>');
  $el.append('<p>' + data.kappa[index].location + '</p>');
  $el.append('<p>' + data.kappa[index].spirit_animal + '</p>');
  $el.append('<p>' + data.kappa[index].shoutout + '</p>');

  for (var j = 0; j <= data.kappa.length; j++) {
    $('.index').append('<p class="container legend legend-box[j]">' + j + '</p>');
  }
  console.log(j, index);
}


//Controls the 'Next' button
function onNext() {
  index++;
  // var person = data.kappa;
  // if (index > data.kappa.length - 1) {
  //   index = 0;
  // }
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data){
      console.log('onNext data: ', data);
      $('.carnival').empty();
      $('.index').empty();
      appendDom(data);
      // console.log(index);
      // return index;
    }
  });
  console.log(index);
}


//Controls the 'Previous' button
function onPrevious() {
  index--;
  // var person = data.kappa;
  // if (index < 0) {
  //   index = data.kappa.length - 1;
  // }
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data){
      console.log('onPrevious data: ', data);
      $('.carnival').empty();
      $('.index').empty();
      appendDom(data);
      // console.log(index);
      // return index;
    }
  });
  console.log(index);
}


//Counter Legend function
// function legendIndex() {
//   $('.index').empty();
//   for (var j = 0; j <= data.kappa.length; j++) {
//     $('.index').append('<p class="container legend legend-box[j]"></p>');
//   }
//   console.log(j, index);
// }



//END ------>>> trialed functions below v








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
