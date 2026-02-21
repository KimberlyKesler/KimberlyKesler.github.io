/* ===============================
   MOBILE NAVBAR TOGGLE
================================ */
// Change these lines to match your HTML IDs
const mobileToggle = document.getElementById('mobile-menu'); 
const navLinks = document.getElementById('nav-menu');

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

// Update this selector to target the correct container
document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('show');
        if(mobileToggle) mobileToggle.querySelector('i').className = 'fa fa-bars';
    });
});
