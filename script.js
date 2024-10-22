let cart = [];

function addToCart(item, price) {
  const foodItem = { name: item, price: price };
  cart.push(foodItem);
  updateCartCount();
}

function updateCartCount() {
  const cartCount = document.getElementById('cart-count');
  cartCount.textContent = cart.length;
}

function scrollToMenu() {
  document.querySelector('#menu').scrollIntoView({ behavior: 'smooth' });
}
