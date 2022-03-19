$(function(){
  
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
    readOnly: true

  });
});