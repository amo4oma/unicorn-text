function showSidebar() {
  $("#nav-icon3").toggleClass("open");
  $("#dashboard-aside, #profile-aside ,#view-request-sidebar").toggleClass(
    "show"
  );
}
$(window).on("load", function () {
  $(".navbar-toggler").on("click", function () {
    $(this).toggleClass("open");
  });
  if ($(window).width() >= 768) {
    $(window).scroll(function () {
      const scroll = $(window).scrollTop();
      if (scroll >= 100) {
        $(".navbar").addClass("scroll");
      } else {
        $(".navbar").removeClass("scroll");
      }
    });
  } else {
    $(window).scroll(function () {
      const scroll = $(window).scrollTop();
      if (scroll >= 100) {
        $(".navbar").removeClass("scroll");
      } else {
        $(".navbar").removeClass("scroll");
      }
    });
  }
});

var hideLedForm = $("#led-gen-form-id").hide();

function showLedGenForm() {
  
    $(".led-gen-form").removeClass("nav-led-form");
    $(".led-gen-form").removeClass("up");
    $(".led-gen-form").addClass("offset-6");
    $("#led-gen-form-id").slideDown();
 
}
$(".show-me-how-popup").hide();
function showPopUp() {
  $(".show-me-how-popup").slideDown();
}
function slidLedGenForm() {

  $(".led-gen-form").removeClass("nav-led-form");
  $(".led-gen-form").removeClass("offset-6");
  $(".led-gen-form").addClass("up");
  $("#led-gen-form-id").slideDown();
}
function slidLedGenFormNav() {

  $(".led-gen-form").addClass("offset-6");
  $(".led-gen-form").addClass("nav-led-form");
  $("#led-gen-form-id").slideDown();
}
$(".footer-form-btn").click(function() {
   
    $('html,body').animate({
        scrollTop: $(".popup-form-container").offset().top},
        'slow');
});
function closeForm() {
  $("#led-gen-form-id").hide();
}
$("#consult-me-btn").click(function() {
    $('html,body').animate({
            scrollTop: $(".led-gen-form").offset().top
        },
        'slow');
});
$(".footer-form-btn").click(function() {
    $('html,body').animate({
            scrollTop: $(".popup-form-container").offset().top
        },
        'slow');
});
$("#show-me-how-btn").click(function() {
    $('html,body').animate({
            scrollTop: $(".show-me-how-popup").offset().top
        },
        'slow');
    $("#led-gen-form-id").hide();
});
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
window.onload = function () {
  setInterval(function () {
    plusSlides(1);
  }, 2000);
};
var screenWidth = $(window).width();
var swiper = new Swiper(".swiper-container", {

  direction: (screenWidth < 440 ? "horizontal" : "vertical" ), // change the diriction on mobile 
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  
  loop: true,
  slidesPerView: 6,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  

  autoplay: {
    delay: 1500,
  disableOnInteraction: true,
  //waitForTransition: false,
  reverseDirection: true,
  },
  
 
});
 

 


const slider = document.getElementById("myinput");
const min = slider.min;
const max = slider.max;
const value = slider.value;

slider.style.background = `linear-gradient(to right, red 0%, red ${
  ((value - min) / (max - min)) * 100
}%, #DEE2E6 ${((value - min) / (max - min)) * 100}%, #DEE2E6 100%)`;
slider.oninput = function showVal(val) {
  var rangeVal = document.getElementById("range-value");
  var beforeVal = document.getElementById("befor-sbh-value");
  var withVal = document.getElementById("with-value");
  var savedVal = document.getElementById("saved-amount");
  this.style.background = `linear-gradient(to right, red 0%, red ${
    ((this.value - this.min) / (this.max - this.min)) * 100
  }%, #DEE2E6 ${
    ((this.value - this.min) / (this.max - this.min)) * 100
  }%, #DEE2E6 100%)`;
  return [
    (rangeVal.innerHTML = this.value + "+"),
    (beforeVal.innerHTML = "RM" + Math.floor((this.value / 36 / 100) * 17.5)),
    (withVal.innerHTML = "RM" + Math.floor(this.value / 36)),
    (savedVal.innerHTML =
      "RM" +
      Math.floor(this.value / 36 - (this.value / 36 / 100) * 17.5) +
      "/per month*"),
  ];
};

function showThankyouMessege() {
  $(".led-gen").prepend(
    $(
      '<div class="thank-you-message">' +
        '<div class="messege d-flex flex-column justify-content-center align-items-center">' +
        '<i onclick="closeForm()" class="close ml-auto fas fa-times"></i>' +
        '<img class="check" src="./Assest/check.svg" alt="">' +
        '<h1 class="tq-h1 avevir">Thank you for your inquiry</h1>' +
        '<p class="avevir-med tq-a">Our dedicated Financial Consultants will contact you shortly.</p>' +
        '<p class="avevir-med tq-a">Contact us through WhatsApp if you need to speak to our consultants urgently</p></div>' +
        '<div class="whatsapp d-flex flex-column justify-content-center align-items-center">' +
        '<img src="./Assest/WhatsApp 1.svg" alt="">' +
        '<a href="https://wa.me/60172783519">WhatsApp now</a></div></div>'
    )
  );
  $("#checkbox").remove();
}
 $(document).ready(function () {
  $(".for-silk-slider").slick({
     
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    easing: "linear",
    dots: true,
    Default: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false /* set centerMode to false to show complete slide instead of 3 */,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
