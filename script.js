/* ===============================
   BACK TO TOP BUTTON
================================ */
let mybutton = document.getElementById("backToTop");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 300) {
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
// Create hamburger menu
const menuToggle = document.createElement('div');
menuToggle.classList.add('menu-toggle');
menuToggle.innerHTML = '&#9776;'; // hamburger icon
document.querySelector('.navbar').appendChild(menuToggle);

const navLinks = document.querySelector('.nav-links');

// Toggle menu on click
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
