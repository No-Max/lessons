const scrollElement = document.querySelector(".scroll");

console.log({
  offsetWidth: scrollElement.offsetWidth,
  offsetHeight: scrollElement.offsetHeight,
});

console.log({
  offsetLeft: scrollElement.offsetLeft,
  offsetTop: scrollElement.offsetTop,
});

console.log({
  clientLeft: scrollElement.clientLeft,
  clientTop: scrollElement.clientTop,
});

console.log({
  clientWidth: scrollElement.clientWidth,
  clientHeight: scrollElement.clientHeight,
});

console.log({
  scrollWidth: scrollElement.scrollWidth,
  scrollHeight: scrollElement.scrollHeight,
});

console.log({
  scrollLeft: scrollElement.scrollLeft,
  scrollTop: scrollElement.scrollTop,
});

scrollElement.scrollTop = 100;

const slider = document.querySelector(".slider");

document.querySelector(".next").onclick = (e) => {
  if (slider.scrollLeft === 2400) {
    slider.scrollLeft = 0;
  } else {
    slider.scrollLeft += 800;
  }
};

document.querySelector(".prev").onclick = () => {
  slider.scrollLeft = slider.scrollLeft - 800;
};

document.addEventListener("click", function (event) {
  const togglerTextSelector = event.target.dataset.toggler;
  if (togglerTextSelector) {
    const togglerTextElement = document.querySelector(togglerTextSelector);
    togglerTextElement.hidden = !togglerTextElement.hidden;
  }
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("toggler")) {
    document.querySelectorAll(".toggler").forEach(function (e) {
      e.classList.remove("active");
    });
    e.target.classList.add("active");
  }
});
