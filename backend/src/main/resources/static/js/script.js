document.addEventListener("DOMContentLoaded", () => {
    fetch('http://localhost:8080/api/products')
        .then(response => response.json())
        .then(products => {
            const productsSection = document.getElementById('products');
            products.forEach(p => {
                const div = document.createElement('div');
                div.className = 'product-card';
                div.innerHTML = `
                    <img src="${p.imageUrl}" alt="${p.name}">
                    <h3>${p.name}</h3>
                    <p>${p.description}</p>
                    <p><strong>₹${p.price}</strong></p>
                `;
                productsSection.appendChild(div);
            });
        });
});

