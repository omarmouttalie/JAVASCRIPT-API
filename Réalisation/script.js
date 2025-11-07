// Get DOM elements
let searchInput = document.getElementById('searchInput');
let categoryFilter = document.getElementById('categoryFilter');
let productsCatalogue = document.getElementById('products-catalogue');

// Store all products for filtering
let allProducts = [];

// Fetch product data
fetch("product.json")
  .then(response => response.json())
  .then(data => {
    console.log('data received:', data);
    allProducts = data;
    DisplayProducts(allProducts);
  })
  .catch(error => console.error("Error fetching products:", error));

// Display products in the catalogue
function DisplayProducts(products) {
  productsCatalogue.innerHTML = ""; // Clear previous results

  products.forEach(p => {
    let card = document.createElement("div");
    card.className = "products";

    card.innerHTML = `
      <img src="${p.image}" class="productImg" alt="${p.name}">
      <h3 class="productName">${p.name}</h3>
      <p class="productPrice">${p.price} $</p>
    `;

    productsCatalogue.appendChild(card);
  });
}

// Apply filters: search + category
function applyFilters() {
  let query = searchInput.value.trim().toLowerCase();
  let selectedCategory = categoryFilter.value;

  let filtered = allProducts.filter(p => {
    let matchesName = p.name.toLowerCase().includes(query);
    let matchesCategory = selectedCategory === "all" || p.category === selectedCategory;
    return matchesName && matchesCategory;
  });

  DisplayProducts(filtered);
}

// Event listeners for live filtering
searchInput.addEventListener('input', applyFilters);
categoryFilter.addEventListener('change', applyFilters);
