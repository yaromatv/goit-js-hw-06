const sliderEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

textEl.style.fontSize = `${sliderEl.value}px`;

document.addEventListener("input", () => {
    textEl.style.fontSize = `${sliderEl.value}px`;
});
