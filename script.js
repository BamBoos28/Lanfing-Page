ScrollReveal().reveal('#homeH1', {
  delay: 120,
  duration: 750,
  reset: true
});

ScrollReveal().reveal('#homeH5', {
  delay: 240,
  duration: 800,
  reset: true
});

ScrollReveal().reveal('#homeButton', {
  delay: 270,
  duration: 800,
  reset: true
});


ScrollReveal().reveal('#aboutText', {
  delay: 120,
  duration: 750,
  reset: true
});

ScrollReveal().reveal('#aboutItem', {
  delay: 270,
  duration: 800,
  reset: true
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("navbar").style.background = "#929EC4";
    document.getElementById("navbar").style.borderBottom = "3px solid white";
    document.getElementById("navbar").style.paddingTop = "2rem";
    document.getElementById("navbar").style.paddingBottom = "2rem";
  } else {
    document.getElementById("navbar").style.background = "";
    document.getElementById("navbar").style.borderBottom = "";
    document.getElementById("navbar").style.paddingTop = "1.5rem";
    document.getElementById("navbar").style.paddingBottom = "1.5rem";
  }
}

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});