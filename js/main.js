$(document).ready(function(){
// Toggler button
  $('.navbar-toggler').click(function(){

    $('.navbar-toggler').toggleClass('change');
  })

//sticky navbar on scroll
$(window).scroll(function(){
  let postion = $(this).scrollTop();

  if (postion >= 718){
    $('.navbar').addClass('navbar-background');
    $('.navbar').addClass('fixed-top');
  } else{
    $('.navbar').removeClass('navbar-background');
    $('.navbar').removeClass('fixed-top');
  }
})

// Smooth Scroll
$('.nav-item a, .header-link, #back-to-top').click(function(link){
  link.preventDefault();

  let target = $(this).attr('href');

  $('html, body').animate({
    scrollTop: $(target).offset.top - 25
  }, 3000);

  console.log('smooth');
})


























    $("header,info").ripples({
        dropRadius: 20,
        perturbance: 0.01,
        interactive: true,
      });
//magnfic popup
$('.parent-container').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',

  gallery: {
    enabled: true
  }
  // other options
});

});

$(document).ready