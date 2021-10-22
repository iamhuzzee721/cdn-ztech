        //   $('.slider-slick').slick({
        //     dots: true,
        //     infinite: false,
        //     speed: 1000,
        //     slidesToShow: 1,
        //     slidesToScroll: 1,
        //     infinite:true,
        //     // autoplay:true,
        //     arrows:false,
        //     responsive: [
        //     {
        //       breakpoint: 1000,
        //       settings: {
        //       slidesToShow: 1,
        //       }
        //     },
        //     {
        //       breakpoint: 767,
        //       settings: {
        //       slidesToShow: 1
        //       }
        //       }
        //     ]

        //     });


        //   $('.left-right').slick({
        //       speed: 10000,
        //       autoplay: true,
        //       autoplaySpeed: 0,
        //       cssEase: 'linear',
        //       slidesToShow: 1,
        //       slidesToScroll: 1,
        //       variableWidth: true,
        //       infinite:true,
        //       prevarrow:false,
        //       nextarrow:false,
        //       arrows:false,
        //       pauseOnHover:false,
        //     });  




            // $('.right-left').slick({
            //   speed: 10000,
            //   autoplay: true,
            //   autoplaySpeed: 0,
            //   cssEase: 'linear',
            //   slidesToShow: 1,
            //   slidesToScroll: -1,
            //   variableWidth: true,
            //   infinite:true,
            //   prevarrow:false,
            //   nextarrow:false,
            //   arrows:false,
            //   pauseOnHover:false,
            // });

            
            $(window).on("scroll", function() {
              if($(window).scrollTop() > 1) {
                  $("#bg-change").addClass("bg-top");
              } else {
                  //remove the background property so it comes transparent again (defined in your css)
                 $("#bg-change").removeClass("bg-top");
              }
            });

            $(window).on("scroll", function() {
              if($(window).scrollTop() > 1) {
                  $(".service-top-image").addClass("cd-transform-image");
              } else {
                  //remove the background property so it comes transparent again (defined in your css)
                 $(".service-top-image").removeClass("cd-transform-image");
              }
            });
            
            
            
            
            
            
            
            
            document.addEventListener("mousemove", function(event) {
              const x = event.pageX - 00;
              const y = event.pageY - 00;
              const cursor = document.querySelector("#cursor");
              cursor.style.left = x + "px";
              cursor.style.top = y + "px";
            });
            
            $('a').on("mouseover", function(){
              $('#cursor').css({'transform': 'scale(2)'});
            });
            
            $('a').on("mouseleave", function(){
              $('#cursor').css({'transform': 'scale(1)'});
            });
            
            
            // $(window).ready(function(){
            // $(".logo-image img").attr("src","http://webprojectmockup.com/html/Ztech/assets/assets/v1-01.svg");
            // });
            
            
            
            
            
            
            
            
            $(function() {
  $('.hz1.creative').mouseenter(function() {
    $('li.creative-deisgning').addClass("inverse");
  }).mouseleave(function () {
    $('li.creative-deisgning').removeClass("inverse");
  });
});

$(function() {
  $('.hz1.traffic').mouseenter(function() {
    $('li.website-traffic').addClass("inverse");
  }).mouseleave(function () {
    $('li.website-traffic').removeClass("inverse");
  });
});

$(function() {
  $('.hz1.social').mouseenter(function() {
    $('li.smm').addClass("inverse");
  }).mouseleave(function () {
    $('li.smm').removeClass("inverse");
  });
});

$(function() {
  $('.hz1.lead').mouseenter(function() {
    $('li.lead-gen').addClass("inverse");
  }).mouseleave(function () {
    $('li.lead-gen').removeClass("inverse");
  });
});

$(function() {
  $('.hz1.seo').mouseenter(function() {
    $('li.search-engine').addClass("inverse");
  }).mouseleave(function () {
    $('li.search-engine').removeClass("inverse");
  });
});

$(function() {
  $('.hz1.web-dev').mouseenter(function() {
    $('li.web-deve').addClass("inverse");
  }).mouseleave(function () {
    $('li.web-deve').removeClass("inverse");
  });
});

$(function() {
  $('.hz1.vid-dev').mouseenter(function() {
    $('li.video-dev').addClass("inverse");
  }).mouseleave(function () {
    $('li.video-dev').removeClass("inverse");
  });
});

$(function() {
  $('.hz1.content').mouseenter(function() {
    $('li.cont').addClass("inverse");
  }).mouseleave(function () {
    $('li.cont').removeClass("inverse");
  });
});

$(function() {
  $('.hz1.app-dev').mouseenter(function() {
    $('li.appli').addClass("inverse");
  }).mouseleave(function () {
    $('li.appli').removeClass("inverse");
  });
});



var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
 if (!isMobile) {
      luxy.init({
        wrapper: '#luxy',
        wrapperSpeed:  0.9
    });
}
 


jQuery(".hz-row-1 li h2").mouseenter(function(){
    jQuery('.hz-row-1 li h2').css('opacity','0');
    jQuery(this).css('opacity','1');
});
jQuery(".hz-row-1 li h2").mouseleave(function(){
  jQuery('.hz-row-1 li h2').css('opacity','1');
});







jQuery(function() {
  jQuery('.pp-cta-div').mouseenter(function() {
    jQuery('#cursor').addClass("hidden");
  }).mouseleave(function () {
    jQuery('#cursor').removeClass("hidden");
  });
});