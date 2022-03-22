$(function(){

  $('.product-slide__thumb').slick({
    asNavFor:'.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    draggable: false
  });
  $('.product-slide__big').slick({
    asNavFor:'.product-slide__thumb',
    draggable: false,
    arrows: false
  });

  $('.shop-content__filter-btn').on('click', function() {
    // $(this).addClass('shop-content__filter-btn--active')
    $('.shop-content__filter-btn').toggleClass('shop-content__filter-btn--active');
  });

  $('.button-list').on('click', function () {
    $('.product-item').addClass('product-item--list');
  });

  $('.button-grid').on('click', function () {
    $('.product-item').removeClass('product-item--list');
  });

  $('.select-style, .product-one__item-num').styler();

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "Br ",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  })
  
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000
  });

  $(".star").rateYo({
    starWidth: "24px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    multiColor: {
      "startColor": "#FF0000",
      "endColor": "#ffc35b" 
    },
    halfStar: true,
    readOnly: true,

  });
  document.getElementsByClassName('top-slider__inner')[0].addEventListener('click', console.log('click'));



  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }

  function initializeClock(id, endtime) {
    const clock = document.querySelector('.promo__clock');
    const daysSpan = clock.querySelector('.promo__days');
    const hoursSpan = clock.querySelector('.promo__hours');
    const minutesSpan = clock.querySelector('.promo__minutes');
    const secondsSpan = clock.querySelector('.promo__seconds');

    function updateClock() {
      const t = getTimeRemaining(endtime);

      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }

  const deadline = new Date(Date.parse(new Date()) + 28 * 20 * 58 * 45 * 1000);
  initializeClock('promo__clock', deadline);
});