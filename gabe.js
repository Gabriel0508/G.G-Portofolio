"use strict";
const openMenu = document.querySelector(".openMenu");
const closeMenu = document.querySelector(".closeMenu");
const links = document.querySelector(".nav-links");
const navbar = document.querySelector("nav");
const navLinks = document.querySelectorAll(".nav-links li");
const main = document.getElementById("fullpage");
const body = document.querySelector("body");

/**
 * Method to open the menu
 */
function showLinks() {
  links.classList.add("nav-active");
  main.classList.add("is-blurred");
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
  body.style.overflow = "hidden";

  //Animated the navlinks
  navLinks.forEach((link, index) => {
    //if (link.style.animation) {
    //  link.style.animation = "";
    // } else {
    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
    //}
  });
}

/**
 * Method to close the menu
 */
function hideLinks() {
  links.classList.remove("nav-active");
  main.classList.remove("is-blurred");
  openMenu.style.display = "block";
  closeMenu.style.display = "none";
  body.style.overflow = "visible";
}

/**
 * Method to close the menu on clicking outside of it
 */
window.addEventListener("mouseup", function (event) {
  if (event.target != links && event.target.parentNode != links) {
    hideLinks();
  }
});

/**
 * Observer Animation
 */
const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px",
};
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");
const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});

/**
 * Fullpage js options
 */
new fullpage("#fullpage", {
  licenseKey: "gplv3-license",
  autoScrolling: true,
  sectionsColor: ['#040317', '#040317', '#040317', '#040317', '#040317'],
  navigation: true,
  navigationPosition: "right",
  lazyLoading: true,
  scrollingSpeed: 1000,
  css3: true,
  keyboardScrolling: true,
  credits: { enabled: false},
  menu: ".nav-links",
  anchors: ["home", "about", "experience", "projects", "contact"],
  responsiveWidth: 1240,
  afterResponsive: function(isResponsive){}
});