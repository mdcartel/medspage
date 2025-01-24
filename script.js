document.querySelectorAll('header nav ul li a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

document.querySelector('.newsletter form').addEventListener('submit', event => {
    const emailInput = document.querySelector('.newsletter input');
    if (!emailInput.value || !emailInput.value.includes('@')) {
        event.preventDefault();
        alert('Please enter a valid email address.');
    }
});

document.querySelector('.search-bar button').addEventListener('click', () => {
    const locationInput = document.querySelector('.search-bar input[type="text"]:first-of-type');
    const specialtyInput = document.querySelector('.search-bar input[type="text"]:last-of-type');

    if (!locationInput.value || !specialtyInput.value) {
        alert('Please enter both a location and a doctor\'s name or specialty.');
    } else {
        alert(`Searching for doctors in ${locationInput.value} specializing in ${specialtyInput.value}`);
    }
});

document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = 'none';
    });
});

document.querySelectorAll('.specialist-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = 'none';
    });
});
