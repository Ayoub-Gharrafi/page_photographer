$('.pics').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    Infinite: true,
    });
    
    function adjustSliderWidth() {
    let viewportWidth = window.innerWidth;
    let slider = document.querySelector('.pics');
      
    if (viewportWidth < 768) {
        slider.style.width = '1000px';
    } else {
        slider.style.width = '1000px';
    }
    }
    
    
    adjustSliderWidth();
    
    
    window.addEventListener('resize', adjustSliderWidth);