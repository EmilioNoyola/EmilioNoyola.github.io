// URL de la API de Open Library para obtener un mayor número de libros
const apiUrl = "https://openlibrary.org/subjects/science_fiction.json?limit=20";

// Carrito inicial vacío
let cart = [];

// Carga los datos de la API al cargar la página
window.onload = function () {
    fetchBooks();
};

// Función para hacer la solicitud a la API y cargar libros aleatorios
async function fetchBooks() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const productsDiv = document.getElementById('products');
        productsDiv.innerHTML = ''; // Limpia el contenido previo

        // Selecciona aleatoriamente 5 libros de la respuesta
        const randomBooks = getRandomBooks(data.works, 5);

        randomBooks.forEach(book => {
            const title = book.title;
            const coverId = book.cover_id;
            const price = Math.floor(Math.random() * 20) + 10; // Precio aleatorio para ejemplo
            const imageUrl = coverId
                ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`
                : 'placeholder.jpg'; // Imagen placeholder si no hay portada

            // Crear el elemento HTML para cada libro
            const bookElement = document.createElement('div');
            bookElement.classList.add('product');
            bookElement.innerHTML = `
                <img src="${imageUrl}" alt="${title}" class="book-cover" />
                <h3>${title}</h3>
                <p>Precio: $${price}</p>
                <input type="number" min="1" value="1" class="quantity">
                <button onclick="addToCart('${title}', ${price})">Agregar al Carrito</button>
            `;
            productsDiv.appendChild(bookElement);
        });
    } catch (error) {
        console.error("Error al cargar los libros:", error);
    }
}

// Función para seleccionar N libros aleatorios
function getRandomBooks(books, count) {
    const shuffled = books.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Función para agregar un producto al carrito
function addToCart(productName, productPrice) {
    const quantity = parseInt(event.target.previousElementSibling.value);

    // Añade el producto al carrito
    cart.push({ name: productName, price: productPrice, quantity });

    // Actualiza el carrito en la interfaz
    updateCart();
}

// Función para actualizar la visualización del carrito
function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const total = document.getElementById('total');

    cartItems.innerHTML = ''; // Vacía la lista del carrito

    let totalAmount = 0;
    cart.forEach((item) => {
        const itemTotal = item.price * item.quantity;
        totalAmount += itemTotal;

        const li = document.createElement('li');
        li.innerText = `${item.name} - $${item.price} x ${item.quantity} = $${itemTotal}`;
        cartItems.appendChild(li);
    });

    total.innerText = `Total: $${totalAmount}`;
}

// Función para vaciar el carrito
function clearCart() {
    cart = [];
    updateCart();
}
