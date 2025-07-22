 document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { name: "Diamond Ring", description: "Elegant diamond ring", price: 10000, imageUrl: "product1.jpg" },
    { name: "Gold Necklace", description: "Traditional gold necklace", price: 25000, imageUrl: "product2.jpg" },
    { name: "Pearl Earrings", description: "Classic pearl earrings", price: 8000, imageUrl: "product3.jpg" },
    { name: "Diamond Ring", description: "Bracelets", price: 10000, imageUrl: "product4.jpg" },
    { name: "Gold Necklace", description: "Brooches", price: 25000, imageUrl: "product5.jpg" },
    { name: "Pearl Earrings", description: "Anklets", price: 8000, imageUrl: "product6.jpg" },
    { name: "Pearl Earrings", description: "Pendants", price: 8000, imageUrl: "product7.jpg" },
    { name: "Pearl Earrings", description: "Mangalsutra", price: 8000, imageUrl: "product8.jpg" },
    { name: "Diamond Ring", description: "Bling.", price: 10000, imageUrl: "product9.jpg" },
    { name: "Gold Necklace", description: "Headband", price: 25000, imageUrl: "product10.jpg" },
    { name: "Pearl Earrings", description: "Crowns", price: 8000, imageUrl: "product11.jpg" },
    { name: "Pearl Earrings", description: "Hairclip", price: 8000, imageUrl: "product12.jpg" }
    // 👉 Add more products up to your 50 images
  ];

  const productsSection = document.getElementById('products');
  products.forEach(p => {
    const div = document.createElement('div');
    div.className = 'product-card';
    div.innerHTML = `
      <img src="assets/${p.imageUrl}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <p><strong>₹${p.price}</strong></p>
    `;
    productsSection.appendChild(div);
  });
});

