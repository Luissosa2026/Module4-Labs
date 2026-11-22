let products = [];

const productList = document.getElementById("product-list");
const categoryFilter = document.getElementById("category-filter");

// Generate individual product card
function addCard(product) {
    const template = document
        .getElementById("product-template")
        .content.cloneNode(true);

    template.querySelector(".card-img-top").src = product.image;
    template.querySelector(".card-img-top").alt = product.title;
    template.querySelector(".card-title").textContent = product.title;
    template.querySelector(".card-price").textContent = `$${product.price.toFixed(2)}`;
    template.querySelector(".card-text").textContent = product.description;

    productList.appendChild(template);
}

// Display products
function renderProducts(items) {
    productList.innerHTML = "";

    items.forEach(product => addCard(product));
}

//Fetch data
fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => {
        products = data;

        // Pull unique categories and dropdown
        const categories = [...new Set(products.map(product => product.category))];
        categories.forEach(category => {
            const option = document.createElement("option");

            option.value = category;
            option.textContent = category;

            categoryFilter.appendChild(option);
        });

        renderProducts(products);
    });

// Filter products when category changes
categoryFilter.addEventListener("change", () => {
    const selected = categoryFilter.value;

    if (selected === "all") {
        renderProducts(products);
    } else {
        const filtered = products.filter(product =>
            product.category === selected
        );

        renderProducts(filtered);
    }
});