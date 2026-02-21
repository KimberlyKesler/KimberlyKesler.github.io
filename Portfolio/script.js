/* ===============================
   BACK TO TOP LOGIC
================================ */
const backBtn = document.getElementById("backToTop");

window.onscroll = () => {
    // Show button after scrolling 400px
    if (window.scrollY > 400) {
        backBtn.style.display = "block"; // Required to counteract display: none
        // Small timeout to allow transition if using opacity
        setTimeout(() => {
            backBtn.style.opacity = "1";
            backBtn.style.visibility = "visible";
        }, 10);
    } else {
        backBtn.style.opacity = "0";
        backBtn.style.visibility = "hidden";
        // Hide from layout after transition
        setTimeout(() => {
            if (window.scrollY <= 400) backBtn.style.display = "none";
        }, 300);
    }
};

// This is the function the HTML 'onclick' is looking for
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

/* ===============================
   MOBILE NAVBAR TOGGLE
================================ */
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        
        const icon = mobileToggle.querySelector('i');
        if (navLinks.classList.contains('show')) {
            icon.className = 'fa fa-times';
        } else {
            icon.className = 'fa fa-bars';
        }
    });
}

// Close menu on link click (important for single-page feel)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('show');
        if(mobileToggle) mobileToggle.querySelector('i').className = 'fa fa-bars';
    });
});

/* ===============================
   FADE-IN ANIMATIONS
================================ */
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
