

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

  $('.button-div').append('<button type="button" class="previous btn">Previous</button>');
  $('.button-div').append('<button type="button" class="next btn">Next</button>');

  $('.button-div').on('click', '.next', onNext);
  $('.button-div').on('click', '.previous', onPrevious);

});


//GLOBAL VARIABLES

var index = 0;
var $el = undefined;
// var person = undefined;



//FUNCTIONS

//Appends the Dom and creates the previous and next buttons
function appendDom(data) {

  if (index > data.kappa.length - 1) {
    index = 0;
    return index;
  } else if (index < 0) {
    index = data.kappa.length;
    return index;
  }

  $('.carnival').append('<div class="carousel"></div>');

  var $el = $('.carnival').children().last();
  // person = data.kappa;

  $el.append('<br />');
  $el.append('<p>' + data.kappa[index].name + '</p>');
  $el.append('<p>' + data.kappa[index].location + '</p>');
  $el.append('<p>' + data.kappa[index].spirit_animal + '</p>');
  $el.append('<p>' + data.kappa[index].shoutout + '</p>');

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
      appendDom(data);
      // console.log(index);
      return index;
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
      appendDom(data);
      // console.log(index);
      return index;
    }
  });
  console.log(index);
}








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
