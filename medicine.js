let cart = [];
let totalPrice = 0;

function addToCart(medicineName, price) {
    cart.push({ medicineName, price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    totalPrice = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.medicineName} - ${item.price}`;
        cartItems.appendChild(li);
        totalPrice += item.price;
    });

    document.getElementById('total-price').textContent = `Total: ${totalPrice}`;
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        alert('Order placed successfully!');
        cart = [];
        updateCart();
    }
}
