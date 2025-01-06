const CartItems = document.querySelector(".cart-items");

function displayCartItems() {
  const items = JSON.parse(localStorage.getItem("cart")) || []; // Default to empty array if cart is null

  CartItems.innerHTML = ""; // Clear previous items before rendering new ones
  items.forEach((item, index) => {
    const cartItem = document.createElement("div");
    cartItem.className = "cart_item";
    cartItem.innerHTML = `
      <p class="cart_id">${item.id}</p>
      <p class="cart_title">${item.title}</p>
      <img src="${item.image}" alt="${item.title}" class="cart_img" />
      <p class="cart_price">${item.price}</p>
      <button class="cart_delete">Delete</button>
    `;

    const deleteButton = cartItem.querySelector(".cart_delete");
    deleteButton.addEventListener("click", () => deleteCartItem(index));

    CartItems.appendChild(cartItem);
  });
}

function deleteCartItem(index) {
  let items = JSON.parse(localStorage.getItem("cart")) || [];
  items.splice(index, 1); // Remove the item at the specified index
  localStorage.setItem("cart", JSON.stringify(items)); // Update localStorage
  displayCartItems(); // Re-render the cart items
}

// Initial rendering of cart items
displayCartItems();
