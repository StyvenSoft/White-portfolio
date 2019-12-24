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
      let navOffset = $('.header-main').height() + 50;
      const navbar = () => {
        if($('.header-main').length){
          $(window).scroll(() =>{
            let scroll = $(window).scrollTop();
            if(scroll >= navOffset){
              $('.header-main .main-menu').addClass('navbar-fix');
            }else{
              $('.header-main .main-menu').removeClass('navbar-fix');
            }
          })
        }
      }
      navbar();
});