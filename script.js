/* ----------------------------- All JavaScript ----------------------------- */

$(document).ready(function () {

  //---------- jQuery Flip Js

  $("#card1").flip({
    // Optional
    trigger: 'click',
    autoSize: true
  });

  $("#card2").flip({
    // Optional
    trigger: 'click',
    autoSize: true
  });

  $("#card3").flip({
    // Optional
    trigger: 'click',
    autoSize: true
  });

  $("#card4").flip({
    // Optional
    trigger: 'click',
    autoSize: true
  });

  $("#card5").flip({
    // Optional
    trigger: 'click',
    autoSize: true
  });

  $("#card6").flip({
    // Optional
    trigger: 'click',
    autoSize: true
  });

  //---------- Slick JS

  $('.slick-js').slick({
    dots: true,
    arrows: false,
    draggable: true
  });

  $('.slider').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1200,
    responsive: [{
        breakpoint: 995,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 771,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 531,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      }
    ]
  });

  //---------- Sweet Alert

  $(".alert-show").click(function () {
    Swal.fire({
      // icon: 'info',
      title: 'Hello my friend!',
      text: 'To get examples of works, you can contact me 😊👌',

      imageUrl: 'assets/logo2.svg',
      imageWidth: 80,
      imageHeight: 80,
      imageAlt: 'Custom image',

      width: 510,
      padding: '3em',
      background: '#F7F9F9 url()',
      backdrop: `
        rgba(13, 13, 13, 0.92)
        url("assets/image-4CND.gif")
        top
        no-repeat
      `,

      confirmButtonText: "Okay",
    })
  })

});