$(document).ready(function(){

    let $btns = $('.buttons-group button');

    $btns.click(function(e){

        $('.buttons-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.projects .grid').isotope({
            filter:selector
        });
        return false;
    })

    $('.projects .buttons-group #btnOne').trigger('click');

    $('.projects .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery:{enabled:true} 
      });

      $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
              items: 1
            },
            554: {
                items: 2
            }
          }
      });   

});