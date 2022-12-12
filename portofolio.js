"use strict";
/**
 * Method to animate the navigation bar and the side menu
 */
const navSlide = () => { //TODO: create functions overall
  //const menu = document.querySelector(".menu");
    const openMenu = document.querySelector(".openMenu");
    const closeMenu = document.querySelector(".closeMenu");
  const sidenav = document.querySelector(".sidenav");
  const navLinks = document.querySelectorAll(".nav-links li");
  const section = document.getElementById("blurred");
  const body = document.querySelector("body");
  const links = document.querySelectorAll(".navigateTo");

  openMenu.addEventListener("click", () => {
    //Toggle nav
    //sidenav.classList.toggle("sidenav-active");
    sidenav.classList.add('sidenav-active');
    openMenu.style.display = "none";
    closeMenu.style.display = "block";
    body.style.overflow = "hidden";
    section.classList.add("is-blurred");

    //Animate nav links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });

    //Navigate to html's sections
    links.forEach((item) => {
      item.addEventListener("click", () => {
        const el = document.getElementById(item.getAttribute("data-link"));
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        section.classList.remove("is-blurred");
        sidenav.classList.remove("sidenav-active");
        body.style.overflow = "visible";
        closeMenu.style.display = "none";
        openMenu.style.display = "block";
      });
    });

    //Menu animation
   // menu.classList.toggle("menuToggle");
  });

  closeMenu.addEventListener("click", () => {
    sidenav.classList.remove('sidenav-active');
    closeMenu.style.display = "none";
    openMenu.style.display = "block";
    body.style.overflow = "visible";
    section.classList.remove("is-blurred");
  })
}
navSlide();

/**
 * Show the navbar on scrolling up
 */
const navbar = document.querySelector("nav"); //TODO: check why the navbar is hidden at section "Other Projects" (open side nav + navbar top hidden)
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-3rem";
  }
  prevScrollpos = currentScrollPos;
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
const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
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
 if (e.key === 'Tab') {
    let e = [...document.querySelectorAll('[tabindex]')],
    i = e.indexOf(document.activeElement) + 1;
    i = i === e.length ? i = 0 : i;
    e[i].focus();
  }else if ([tabindex='1']) {
    let myAlert = document.querySelector('.toast');
    let bsAlert = new  bootstrap.Toast(myAlert);
    bsAlert.show();
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
 * Show the toast notification
*/
  window.onload = () => {
    let myAlert = document.querySelector('.toast');
    let bsAlert = new  bootstrap.Toast(myAlert);
    bsAlert.show();
  }

// /**
//  * Change the background color
//  */
// const btn = document.getElementById("bg-change");
// btn.addEventListener("click", () => {
 //TODO:
// });