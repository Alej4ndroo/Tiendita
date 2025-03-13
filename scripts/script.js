document.addEventListener("DOMContentLoaded", () => {
    const pizzas = [
        {
            name: "Margherita",
            description: "Tomate, mozzarella fresca y albahaca",
            price: "$8.99",
            image: "../images/margarita.jpeg"
        },
        {
            name: "Pepperoni",
            description: "Tomate, mozzarella y pepperoni italiano",
            price: "$10.99",
            image: "../images/pepperoni.jpg"
        },
        {
            name: "Prosciutto",
            description: "Tomate, mozzarella, jamón y rúcula",
            price: "$12.99",
            image: "../images/prosciutto.jpg"
        }
    ];

    const pizzaContainer = document.querySelector(".pizza-cards");
    pizzaContainer.innerHTML = "";

    pizzas.forEach(pizza => {
        const pizzaCard = document.createElement("div");
        pizzaCard.classList.add("pizza-card");
        pizzaCard.innerHTML = `
            <img src="${pizza.image}" alt="${pizza.name}" class="pizza-img">
            <h3>${pizza.name}</h3>
            <p>${pizza.description}</p>
            <span class="price">${pizza.price}</span>
        `;
        pizzaContainer.appendChild(pizzaCard);
    });
});