jQuery(document).ready(function(){

  console.log('ready');

  const mainSlider = new Swiper('.main-slider', {
    // Default parameters
    slidesPerView: 3,
    speed: 800,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
         
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    },
      
    // Responsive breakpoints
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.main-pagination',
        type: 'bullets',
        clickable: true,
      },
  });


const heroSlider = new Swiper('.hero_slider', {
    // Default parameters
    slidesPerView: 1,
    speed: 1800,
    spaceBetween: 0,
    loop: true,
    autoplay: true,
   
  });

 
  $('.header__burger').on('click', function () {

    if($(this).hasClass('active')){
      $('.header-right__menu').hide();
      $(this).toggleClass("active");
      $('header').removeClass('header_fixed');
      $('body').css('overflow', 'auto');
    
    }
    else{
    
      $('.header-right__menu').show();
      $(this).toggleClass("active");
      $('body').css('overflow', 'hidden');
    
      $('header').addClass('header_fixed');
    
    }
    
    });

  

    new WOW().init();



    let scrollChange = 50;
    
    function headerScroll(params) {
      
      let scroll = $(window).scrollTop();
      
      if (scroll >= scrollChange) {
        $('header').addClass('header_scroll');

      } else {
        $('header').removeClass('header_scroll');

      }

    }

    $(document).on('scroll', ()=>{
      headerScroll();  
    })

    headerScroll();
}) 



 const gearsIcon = new Vivus(
    'my-svg', 
    {
      type: 'delayed',
      duration: 500

    }, 
    );
const gearsPcon = new Vivus(
  'my-svg2', 
  {
    type: 'delayed',
    duration: 500

  }, 
  );
const gearsYcon = new Vivus(
  'my-svg3', 
  {
    type: 'delayed',
    duration: 500

  }, 
  );

