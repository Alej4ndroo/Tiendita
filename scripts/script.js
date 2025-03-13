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

document.addEventListener("DOMContentLoaded", () => {
    const pizzas = [
        { nombre: "Margarita", ingredientes: "Tomate, mozzarella, albahaca", precio: "$8", imagen: "margarita.jpg" },
        { nombre: "Pepperoni", ingredientes: "Pepperoni, mozzarella, tomate", precio: "$10", imagen: "pepperoni.jpg" },
        { nombre: "Hawaiana", ingredientes: "Piña, jamón, mozzarella", precio: "$9", imagen: "hawaiana.jpg" },
        { nombre: "Cuatro Quesos", ingredientes: "Mozzarella, gorgonzola, parmesano, cheddar", precio: "$11", imagen: "cuatroquesos.jpg" },
        { nombre: "Vegetariana", ingredientes: "Champiñones, pimientos, cebolla, tomate", precio: "$9", imagen: "vegetariana.jpg" },
        { nombre: "BBQ Chicken", ingredientes: "Pollo, salsa BBQ, mozzarella, cebolla", precio: "$12", imagen: "bbqchicken.jpg" },
        { nombre: "Napolitana", ingredientes: "Anchoas, tomate, aceitunas, mozzarella", precio: "$10", imagen: "napolitana.jpg" },
        { nombre: "Carbonara", ingredientes: "Bacon, huevo, parmesano, mozzarella", precio: "$11", imagen: "carbonara.jpg" },
        { nombre: "Marinera", ingredientes: "Mariscos, ajo, tomate, mozzarella", precio: "$13", imagen: "marinera.jpg" },
        { nombre: "Mexicana", ingredientes: "Carne, jalapeños, cebolla, tomate", precio: "$12", imagen: "mexicana.jpg" }
    ];

    const menu = document.getElementById("menu");
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    function agregarAlCarrito(pizza) {
        carrito.push(pizza);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        alert(`${pizza.nombre} ha sido agregado al carrito.`);
    }

    pizzas.forEach(pizza => {
        const div = document.createElement("div");
        div.classList.add("pizza");
        div.innerHTML = `
            <img src="images/${pizza.imagen}" alt="${pizza.nombre}">
            <h2>${pizza.nombre}</h2>
            <p>${pizza.ingredientes}</p>
            <span>${pizza.precio}</span>
            <button class="add-to-cart">Agregar al carrito</button>
        `;
        
        const button = div.querySelector(".add-to-cart");
        button.addEventListener("click", () => agregarAlCarrito(pizza));
        
        menu.appendChild(div);
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        if (window.location.href.includes(link.getAttribute("href"))) {
            link.classList.add("active");
        }
    });
});