document.addEventListener("DOMContentLoaded", function () {
    const bookButton = document.querySelector(".hero .button");
    if (bookButton) {
        bookButton.addEventListener("click", function (event) {
            event.preventDefault();
            console.log("Hero button clicked");
            const bookingSection = document.getElementById("booking");
            if (bookingSection) {
                console.log("Booking section found, scrolling...");
                bookingSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    }

    // --- Progress Bars Animation ---
    const progressBars = document.querySelectorAll(".progress-bar");
    const progressObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const percent = parseInt(bar.getAttribute("data-percent"));
                let count = 0;
                const interval = setInterval(() => {
                    if (count >= percent) {
                        clearInterval(interval);
                    } else {
                        count++;
                        bar.style.width = count + "%";
                        const percentageDisplay = bar.parentElement.previousElementSibling.querySelector(".percentage");
                        if (percentageDisplay) {
                            percentageDisplay.textContent = count + "%";
                        }
                    }
                }, 20);
                progressObserver.unobserve(bar);
            }
        });
    }, { threshold: 0.5 });
    progressBars.forEach(bar => progressObserver.observe(bar));

    // --- Animate Headings on Scroll ---
    const animateElements = (selector) => {
        const elements = document.querySelectorAll(selector);
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                }
            });
        }, { threshold: 1 });
        elements.forEach(el => observer.observe(el));
    };
    animateElements("h1");
    animateElements("h3");

    // --- Testimonial Slider ---
    const reviewsContainer = document.querySelector(".reviews");
    const nextArrow = document.querySelector(".arrow.next");
    const prevArrow = document.querySelector(".arrow.prev");
    const feedbacks = document.querySelectorAll(".feedback");
    const reviewerNameDisplay = document.querySelector(".reviewer-name");

    let currentIndex = 0;
    const feedbackCount = feedbacks.length;

    const updateSlide = function () {
        const feedbackWidth = feedbacks[0].offsetWidth;
        const computedStyle = window.getComputedStyle(reviewsContainer);
        const gap = parseInt(computedStyle.gap) || 0;
        const offset = -currentIndex * (feedbackWidth + gap);
        reviewsContainer.style.transform = `translateX(${offset}px)`;

        const currentReviewer = feedbacks[currentIndex].querySelector(".reviewer");
        if (currentReviewer && reviewerNameDisplay) {
            reviewerNameDisplay.textContent = currentReviewer.textContent;
        }
    };

    if (nextArrow && prevArrow) {
        nextArrow.addEventListener("click", function () {
            if (currentIndex < feedbackCount - 1) {
                currentIndex++;
                updateSlide();
            }
        });

        prevArrow.addEventListener("click", function () {
            if (currentIndex > 0) {
                currentIndex--;
                updateSlide();
            }
        });
    }

    const bookingForm = document.querySelector(".appointment-form");
    if (bookingForm) {
        bookingForm.addEventListener("submit", function (event) {
            event.preventDefault();

            // Show the custom alert
            const alertBox = document.getElementById("custom-alert");
            if (alertBox) {
                alertBox.style.display = "flex";

                alertBox.querySelector("span").textContent = "Your booking has been successfully submitted!";

                // Add click event to the close button to hide the alert
                alertBox.querySelector(".close-btn").addEventListener("click", function () {
                    alertBox.style.display = "none";
                });
            }

            // Reset the form
            bookingForm.reset();
        });
    }

    // Hero Image Section
    const images = [
        'images/beauty31.jpg',
        'images/beauty30.jpg',
        'images/beauty24.jpg'
    ];

    let index = 0;
    const hero = document.querySelector('.hero');

    hero.style.backgroundImage = `url(${images[0]})`;

    const changeImage = function () {
        index = (index + 1) % images.length;
        hero.style.backgroundImage = `url(${images[index]})`;
    };

    setInterval(changeImage, 5000);

});

const flipAllCards = function () {
    const cards = document.querySelectorAll('.flip-card-inner');
    requestAnimationFrame(() => {
        cards.forEach(card => card.classList.add('flipped'));
    });

    // After 3 seconds, flip back to the original side
    setTimeout(() => {
        cards.forEach(card => card.classList.remove('flipped'));
    }, 4000);
};

window.addEventListener("load", () => {
    setTimeout(() => {
        flipAllCards();
        setInterval(flipAllCards, 10000);
    }, 1000);
});
