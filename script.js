// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Handle form submission
    const newsletterForm = document.querySelector('.newsletter form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput && emailInput.value) {
                alert(`Thank you for subscribing with email: ${emailInput.value}`);
                emailInput.value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('header nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Toggle mobile menu
    const menuToggle = document.createElement('button');
    menuToggle.textContent = '☰';
    menuToggle.className = 'menu-toggle';
    const nav = document.querySelector('header nav');
    nav.prepend(menuToggle);

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('mobile-nav-active');
    });

    // Simple form validation for search
    const searchForm = document.querySelector('.search-bar');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const locationInput = this.querySelector('input[placeholder="Location"]');
            const doctorInput = this.querySelector('input[placeholder="Doctor\'s Name or Specialty"]');
            if (locationInput.value && doctorInput.value) {
                alert(`Searching for ${doctorInput.value} in ${locationInput.value}`);
            } else {
                alert('Please fill in both location and doctor/specialty fields.');
            }
        });
    }

    // Lazy loading for images
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        img.classList.add('lazy');
        img.dataset.src = img.src;
        img.src = '';
        imageObserver.observe(img);
    });
});