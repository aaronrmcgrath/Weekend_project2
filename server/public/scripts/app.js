$(document).ready(function(){
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data){
      console.log(data);
      appendDom(data);

      function onNext() {
        index++;
        // var person = data.kappa;
        if (index > data.kappa.length - 1) {
          index = 0;
        }
        $.ajax({
          type: "GET",
          url: "/data",
          success: function(data){
            console.log('onNext data: ', data);
            appendDom(data);
            console.log(index);
            return index;
          }})};

          function onPrevious() {
            index--;
            // var person = data.kappa;
            if (index < 0) {
              index = data.kappa.length - 1;
            }
            $.ajax({
              type: "GET",
              url: "/data",
              success: function(data){
                console.log('onPrevious data: ', data);
                appendDom(data);
                console.log(index);
                return index;
              }})};

              $('.carousel').on('click', '.next', onNext);
              $('.carousel').on('click', '.previous', onPrevious);
            }
          });
        });

        var index = 0;
        var $el = undefined;
        // var person = undefined;

        function appendDom(data) {
          $('.carnival').append('<div class="carousel"></div>');

          var $el = $('.carnival').children().last();
          // person = data.kappa;

          $el.append('<br />');
          $el.append('<p>' + data.kappa[index].name + '</p>');
          $el.append('<p>' + data.kappa[index].location + '</p>');
          $el.append('<p>' + data.kappa[index].spirit_animal + '</p>');
          $el.append('<p>' + data.kappa[index].shoutout + '</p>');

          $el.append('<button type="button" class="previous btn">Previous</button>');
          $el.append('<button type="button" class="next btn">Next</button>');

          // function onNext() {
          //   index++;
          //   // var person = data.kappa;
          //   if (index > data.kappa.length - 1) {
          //     index = 0;
          //   }
          //   appendDom();
          //   console.log(index);
          //   // return index;
          // }
          //
          // function onPrevious() {
          //   index--;
          //   // var person = data.kappa;
          //   if (index < 0) {
          //     index = data.kappa.length - 1;
          //   }
          //   appendDom();
          //   console.log(index);
          //   // return index;
          // }


          // $('.carousel').on('click', '.next', onNext);
          // $('.carousel').on('click', '.previous', onPrevious);

        }


        function onNext() {
          index++;
          // var person = data.kappa;
          if (index > data.kappa.length - 1) {
            index = 0;
          }
          // appendDom();
          console.log(index);
          return index;
        }

        function onPrevious() {
          index--;
          // var person = data.kappa;
          if (index < 0) {
            index = data.kappa.length - 1;
          }
          // appendDom();
          console.log(index);
          return index;
        }







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
