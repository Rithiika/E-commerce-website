
document.addEventListener('DOMContentLoaded', function () {
    const products = document.querySelectorAll('.product');
    const priceFilter = document.getElementById('price-filter');
    const sortOption = document.getElementById('sort');

    priceFilter.addEventListener('change', filterProducts);
    sortOption.addEventListener('change', sortProducts);

    function filterProducts() {
        const priceRange = priceFilter.value;

        products.forEach(product => {
            const price = parseInt(product.querySelector('p').textContent.replace(/[^0-9]/g, ''));

            if (priceRange === 'all') {
                product.style.display = 'block';
            } else if (priceRange === 'low' && price < 800) {
                product.style.display = 'block';
            } else if (priceRange === 'mid' && price >= 800 && price <= 1000) {
                product.style.display = 'block';
            } else if (priceRange === 'high' && price > 1000) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }

    function sortProducts() {
        const sortValue = sortOption.value;
        const productArray = Array.from(products);
        const catalog = document.getElementById('catalog');

        let sortedProducts;

        if (sortValue === 'name') {
            sortedProducts = productArray.sort((a, b) => {
                const nameA = a.querySelector('h2, h3').textContent.toUpperCase();
                const nameB = b.querySelector('h2, h3').textContent.toUpperCase();
                return nameA.localeCompare(nameB);
            });
        } else if (sortValue === 'price-asc') {
            sortedProducts = productArray.sort((a, b) => {
                const priceA = parseInt(a.querySelector('p').textContent.replace(/[^0-9]/g, ''));
                const priceB = parseInt(b.querySelector('p').textContent.replace(/[^0-9]/g, ''));
                return priceA - priceB;
            });
        } else if (sortValue === 'price-desc') {
            sortedProducts = productArray.sort((a, b) => {
                const priceA = parseInt(a.querySelector('p').textContent.replace(/[^0-9]/g, ''));
                const priceB = parseInt(b.querySelector('p').textContent.replace(/[^0-9]/g, ''));
                return priceB - priceA;
            });
        }

        sortedProducts.forEach(product => {
            catalog.appendChild(product);
        });
    }
});



// product.js

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const item = {
                image: button.getAttribute('data-image'),
                name: button.getAttribute('data-name'),
                price: button.getAttribute('data-price')
            };

            // Add item to cart in localStorage
            const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            cartItems.push(item);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            
            // Optional: Alert or provide feedback
            alert('Item added to cart!');
        });
    });
});




