// Slow reveal My Work Section
ScrollReveal().reveal('.bioIMG', { delay: 300 });
ScrollReveal().reveal('.bioTopLine', { delay: 500 });
ScrollReveal().reveal('.bioSecondLine', { delay: 500 });
ScrollReveal().reveal('.bioThirdLine', { delay: 500 });
ScrollReveal().reveal('.workItem1', { delay: 600 });
ScrollReveal().reveal('.workItem2', { delay: 600 });
ScrollReveal().reveal('.workItem3', { delay: 600 });
ScrollReveal().reveal('.connect', { delay: 600 });
ScrollReveal().reveal('.icons', { delay: 800 });

// Change Nav Item color on Hover
$(function() {
    $('.navItem').hover(function(){
        $(this).css('color', '#F0A45D');
    },
    function(){
       $(this).css('color', '#EDEDED');
    });
});

// Change Footer Nav Item color on Hover
$(function() {
    $('.footerNav').hover(function(){
        $(this).css('color', '#F0A45D');
    },
    function(){
       $(this).css('color', '#EDEDED');
    });
});
