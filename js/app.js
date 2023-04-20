const app = {
    // CONFIG
    $btnPrev: document.getElementById("slider_prev"),
    $btnNext: document.getElementById("slider_next"),
    $rating1: document.getElementById("rating-1"),
    $rating2: document.getElementById("rating-2"),
    $rating3: document.getElementById("rating-3"),
    imgs: document.getElementsByClassName("slider__img"),
    reviews: document.querySelectorAll(".review"),
    currentSlider: 2,

    run: () => {
        app.events();
        app.setSlider();
    },
    // EVENTS
    events: () => {
        app.$btnPrev.addEventListener("click", app.sliderPrev);
        app.$btnNext.addEventListener("click", app.sliderNext);
        app.$rating1.addEventListener("change", () => app.rating(app.$rating1, 1));
        app.$rating2.addEventListener("change", () => app.rating(app.$rating2, 2));
        app.$rating3.addEventListener("change", () => app.rating(app.$rating3, 3));
    },
    // FILTER
    rating: (checkbox, stars) => {
        const isRatingChecked = checkbox.checked;

        for (let i = 0; i < app.reviews.length; i++) {
            const review = app.reviews[i];
            if (review.getAttribute("data-rating") == stars) {
                if (isRatingChecked) {
                    review.classList.remove("review--hidden");
                } else {
                    review.classList.add("review--hidden");
                }
            }
        }
    },
    // SLIDER
    setSlider: () => {
        const arr = Array.prototype.slice.call(app.imgs);
        arr.forEach((img, i) => {
            if (i === app.currentSlider) {
                img.classList.add("slider__img--current");
            } else {
                img.classList.remove("slider__img--current");
            }
        });
    },

    setCurrentSlider: () => {
        if (app.currentSlider >= app.imgs.length) {
            app.currentSlider = 0;
        } else if (app.currentSlider < 0) {
            app.currentSlider = app.imgs.length - 1;
        }
    },
    sliderPrev: () => {
        app.currentSlider--;
        app.setCurrentSlider();
        app.setSlider();
    },
    sliderNext: () => {
        app.currentSlider++;
        app.setCurrentSlider();
        app.setSlider();
    },
};

// RUN
app.run();
