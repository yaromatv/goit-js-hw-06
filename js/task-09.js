// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерации случайного цвета используй функцию getRandomHexColor.

const btnEl = document.querySelector(".change-color");
const body = document.querySelector("body");
const textEl = document.querySelector(".color");

textEl.style.display = "block";

const onClick = () => {
    const hexColorTemp = getRandomHexColor();
    body.style.backgroundColor = hexColorTemp;
    textEl.innerHTML = hexColorTemp;
};

btnEl.addEventListener("click", onClick);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}
