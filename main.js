let activeIndex = 0;
const slides = document.getElementsByTagName("article");

function HandleLeft() {
    const nextSlideIndex = activeIndex === 0 ? slides.length - 1 : activeIndex - 1;
    const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`);
    const nextSlide = document.querySelector(`[data-index="${nextSlideIndex}"]`);
    nextSlide.dataset.status = "transition-active";
    currentSlide.dataset.status = "inactive";
    setTimeout(() => {
        nextSlide.dataset.status = "active";
    })
    activeIndex = nextSlideIndex;
}

function HandleRight() {
    const nextSlideIndex = activeIndex === slides.length - 1 ? 0 : activeIndex + 1;
    const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`);
    const nextSlide = document.querySelector(`[data-index="${nextSlideIndex}"]`);
    nextSlide.dataset.status = "transition-active";
    currentSlide.dataset.status = "inactive";
    setTimeout(() => {
        currentSlide.dataset.status = "active";
    }, 400)
    activeIndex = nextSlideIndex;
}