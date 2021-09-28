$('.slider').slick({
    arrows:false,
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


gsap.from(".header-main", { opacity: 0, y: 100, duration: 1 });
gsap.from(".nav-link", { opacity: 0, x: 100, duration: 1 });
gsap.from(".navbar-brand", { opacity: 0, x: -100, duration: 1 });
