"use strict";
/**
 * Method to animate the navigation bar and the side menu
 */
const navSlide = () => {
  const menu = document.querySelector(".menu");
  const sidenav = document.querySelector(".sidenav");
  const navLinks = document.querySelectorAll(".nav-links li");
  const section = document.getElementById("blurred");
  const body = document.querySelector("body");

  menu.addEventListener("click", () => {
    //Toggle nav
    sidenav.classList.toggle("sidenav-active");

    //Animate nav links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
        body.style.overflow = "visible";
        section.classList.remove("is-blurred");
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        body.style.overflow = "hidden";
        section.classList.add("is-blurred");
      }
    });

    //navLinks.forEach((link) => (link.onclick = () => sidenav.classList.toggle("sidenav-active")));

    //Menu animation
    menu.classList.toggle("menuToggle");
  });

  /**
   * Close the side-nav when the user clicks anywhere outside of it
   */
  window.onclick = function (e) {
    if (!sidenav.contains(e.target)) {
      //sidenav.classList.toggle("sidenav-active");
      // menu.classList.toggle("menuToggle");
      // section.classList.toggle("is-blurred");
    }
  };
};
navSlide();

/**
 * Show the navbar on scrolling up
 */
let lastScrollTop;
const navbar = document.querySelector("nav");
window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-80px";
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
});

/**
 * Observer Animation
*/
const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px"
}

const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const appearOnScroll = new IntersectionObserver
(function(
  entries, 
  appearOnScroll
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    })
  }, 
  appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  })

  sliders.forEach(slider => {
    appearOnScroll.observe(slider);
  });