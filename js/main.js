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
});