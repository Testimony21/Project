document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress-bar");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let bar = entry.target;
                let percent = bar.getAttribute("data-percent");
                let count = 0;
                let interval = setInterval(() => {
                    if (count >= percent) {
                        clearInterval(interval);
                    } else {
                        count++;
                        bar.style.width = count + "%";
                        bar.parentElement.previousElementSibling.querySelector(".percentage").textContent = count + "%";
                    }
                }, 20);
                observer.unobserve(bar);
            }
        });
    }, { threshold: 0.5 });
    progressBars.forEach(bar => observer.observe(bar));
})



document.addEventListener("DOMContentLoaded", function () {
    const h1Elements = document.querySelectorAll("h1");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
            }
        });
    }, { threshold: 1 });
    h1Elements.forEach(h1 => observer.observe(h1));
});



const reviews = document.querySelector('.reviews');
const nextArrow = document.querySelector('.next');
const prevArrow = document.querySelector('.prev');

let currentIndex = 0;
const feedbackCount = document.querySelectorAll('.feedback').length;

nextArrow.addEventListener('click', () => {
    if (currentIndex < feedbackCount - 1) {
        currentIndex++;
        updateSlide();
    }
});

prevArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlide();
    }
});

function updateSlide() {
    const offset = -currentIndex * 320; // Adjust 320 based on feedback width
    reviews.style.transform = `translateX(${offset}px)`;
}






// const reviews = document.querySelector ('.reviews');
// const reviewItems = document.querySelectorAll('.feedback');

// let index = 0;

// function slideReviews() {
//     index++;
//     if (index > reviewItems.length- 2) {
//         index = 0;
//     }
//     reviews.style.transform = `translateX(-${index * 320}px)`;
// }

// setInterval(slideReviews, 3000);