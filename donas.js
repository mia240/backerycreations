let cart = [];
    let total = 0;

    function addToCart(productName, productPrice) {
      // Agregar el producto al carrito
      cart.push({ name: productName, price: productPrice });
      total += productPrice;

      // Actualizar el carrito
      document.getElementById("cart-items").textContent = `${cart.length} productos`;
      document.querySelector(".cart-total").textContent = `Total: $${total.toFixed(2)}`;
    }
