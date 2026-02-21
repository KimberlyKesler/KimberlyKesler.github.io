/* ===============================
   BACK TO TOP BUTTON
================================ */
let mybutton = document.getElementById("backToTop");

window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ===============================
   MOBILE NAVBAR TOGGLE
================================ */
// Create hamburger menu automatically if it doesn't exist
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelector('.nav-links');

if (navbar && !document.querySelector('.menu-toggle')) {
    const menuToggle = document.createElement('div');
    menuToggle.classList.add('menu-toggle');
    menuToggle.innerHTML = '&#9776;'; // hamburger icon
    navbar.appendChild(menuToggle);

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
}
