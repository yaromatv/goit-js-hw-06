// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод
// document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список
// ul#ingredients.

const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];

const listEl = document.querySelector("#ingredients");

const tempCreateListEl = [];

const createListEl = ingredients.forEach(function (element, index) {
    const listItemEl = document.createElement("li");
    listItemEl.textContent = ingredients[index];
    listItemEl.classList.add("item");

    tempCreateListEl.push(listItemEl);
});

listEl.append(...tempCreateListEl);
