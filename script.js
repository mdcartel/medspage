document.addEventListener("DOMContentLoaded", () => {
        document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

     document.querySelector(".search-bar .btn").addEventListener("click", () => {
        const locationInput = document.querySelector(".search-bar input:nth-child(1)").value;
        const specialtyInput = document.querySelector(".search-bar input:nth-child(2)").value;

        if (locationInput && specialtyInput) {
            alert(`Searching for ${specialtyInput} in ${locationInput}...`);
        } else {
            alert("Please enter both location and specialty.");
        }
    });

       document.querySelectorAll(".btn").forEach(button => {
        button.addEventListener("click", (e) => {
            if (button.textContent === "Learn More") {
                alert("More information coming soon!");
            }
        });
    });

     const newsletterForm = document.querySelector(".newsletter form");
    if (newsletterForm) {
        newsletterForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const emailInput = document.querySelector(".newsletter input").value;
            if (validateEmail(emailInput)) {
                alert("Thank you for subscribing!");
            } else {
                alert("Please enter a valid email address.");
            }
        });
    }

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
