"use strict";
const openMenu = document.querySelector(".openMenu");
const closeMenu = document.querySelector(".closeMenu");
const sidenav = document.querySelector(".sidenav");
const navLinks = document.querySelectorAll(".nav-links li");
const main = document.getElementById("blurred");
const body = document.querySelector("body");
const links = document.querySelectorAll(".navigateTo");
const navbar = document.querySelector("nav");
const bgBtn = document.getElementById("bg-change");
const toTopBtn = document.getElementById("backbtn");

/**
 * Method to open the sidenav
 */
function openSidenav() {
  sidenav.classList.add('sidenav-active');
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
  body.style.overflow = "hidden";
  main.classList.add("is-blurred");

  //Animated the navlinks
  navLinks.forEach((link, index) => { //TODO: check the animation at the second time on clicking on the side menu icon
    // if (link.style.animation) {
    //   debugger;
    //   link.style.animation = "";
    // } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
    //}
  });
}

/**
 * Method to close the sidenav
 */
function closeSidenav() {
  sidenav.classList.remove('sidenav-active');
  main.classList.remove("is-blurred");
  closeMenu.style.display = "none";
  openMenu.style.display = "block";
  body.style.overflow = "visible";
}

/**
 * Method to close the sidenav on clicking outside of it
 */
window.addEventListener('mouseup', function(event){
	if (event.target != sidenav && event.target.parentNode != sidenav) {
      closeSidenav();
    }
});

/**
 * Method to navigate to html's sections
 */
  links.forEach((item) => {
    item.addEventListener("click", () => {
    const link = document.getElementById(item.getAttribute("data-link"));
    link.scrollIntoView({ behavior: "smooth", block: "start"});
    closeSidenav();
  });
});

/**
 * Method to slide down the navbar on scroll
 */
window.onscroll = function() {
  scrollFunction()
};
function scrollFunction() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
   navbar.style.top = "0";
   navbar.classList.add('nav-shadow');
   toTopBtn.style.display = "block";
  } else {
  navbar.style.top = "-3rem";
  navbar.classList.remove('nav-shadow');
  toTopBtn.style.display = "none";
  }
}

/**
 * Method to navigate to home page
 */
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

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
 * Keyboard navigation
 */
document.querySelector('[tabindex]');
document.addEventListener("keydown", (e) => {
 e.preventDefault()
 if (e.key === 'Tab') { //navigate through links and buttons (divs)
    let e = [...document.querySelectorAll('[tabindex]')],
    i = e.indexOf(document.activeElement) + 1;
    i = i === e.length ? i = 0 : i;
    e[i].focus();
  }else if (e.key === "Home") {
    window.location.hash = "#home";  //navigate to <home> page
  }else if (e.key.toLocaleLowerCase() === "r" && e.ctrlKey) {
    window.location.reload();  //refresh the page
  }else if (e.key.toLocaleLowerCase() === "a" && e.ctrlKey) {
    window.location.hash = "#about";  //navigate to <about-me> section
  }else if (e.key.toLocaleLowerCase() === "e" && e.ctrlKey) {
    window.location.hash = "#experience";  //navigate to <work-experience> section
  }else if (e.key.toLocaleLowerCase() === "p" && e.ctrlKey) {
    window.location.hash = "#work";  //navigate to <work-projects> section
  }else if (e.key.toLocaleLowerCase() === "c" && e.ctrlKey || e.key === 'End') {
    window.location.hash = "#contact";  //navigate to <contact> section
  }
});

/**
 * Method to show the toast notification
*/
  window.onload = () => {
    let myAlert = document.querySelector('.toast');
    let bsAlert = new  bootstrap.Toast(myAlert);
    bsAlert.show();
  }

/**
 * Change the main background color
 */
bgBtn.addEventListener("click", () => {
  main.classList.toggle("light-mode");
  navbar.classList.toggle("light-mode");
});