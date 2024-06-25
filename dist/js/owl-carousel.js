$('.testimonial-slider').owlCarousel({
  loop:false,
  margin:10,
  nav:true,
  dots:false,
  navText: [
    '<span aria-label="' + "Previous" + '"> <i class="fa-solid fa-arrow-left"></i> </span>',
    '<span aria-label="' + "Next" + '">  <i class="fa-solid fa-arrow-right"></i> </span>',
  ],
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})