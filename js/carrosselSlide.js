const sliders = document.querySelector(".carrosselBox");
let scrollAmount = 0;
let scrollPerClick = 100;
const imagePadding = 20;

function sliderScrollLeft() {
  scrollAmount = Math.max(0, scrollAmount - scrollPerClick);
  sliders.scrollTo({
    top: 0,
    left: scrollAmount,
    behavior: "smooth",
  });
}

function sliderScrollRight() {
  const maxScrollLeft = sliders.scrollWidth - sliders.clientWidth;

  if (scrollAmount < maxScrollLeft) {
    scrollAmount = Math.min(maxScrollLeft, scrollAmount + scrollPerClick);

    sliders.scrollTo({
      top: 0,
      left: scrollAmount,
      behavior: "smooth",
    });
  }
}
