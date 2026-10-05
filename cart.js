function displayCart() {

    let cart = getCart();
    let container = document.getElementById("cartItems");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="text-center p-5">
                <i class="bi bi-cart-x fs-1 text-muted"></i>
                <h4 class="mt-3">Your cart is empty</h4>
                <a href="medicines.html" class="btn btn-success mt-2">
                    Shop Medicines
                </a>
            </div>
        `;

        document.getElementById("cartTotal").innerText = "₹0";
        return;
    }

    cart.forEach(function(item) {

        let itemTotal = item.price * item.quantity;

        total = total + itemTotal;

        container.innerHTML += `
            <div class="card mb-3 p-3">

                <div class="row align-items-center">

                    <div class="col-md-2">
                        <img src="${item.image}"
                             class="img-fluid"
                             style="height:80px; object-fit:cover;">
                    </div>

                    <div class="col-md-4">
                        <h5>${item.name}</h5>
                        <p class="text-success">₹${item.price}</p>
                    </div>

                    <div class="col-md-3">

                        <button class="btn btn-sm btn-outline-secondary"
                                onclick="changeQuantity(${item.id}, -1)">
                            -
                        </button>

                        <span class="mx-3">${item.quantity}</span>

                        <button class="btn btn-sm btn-outline-secondary"
                                onclick="changeQuantity(${item.id}, 1)">
                            +
                        </button>

                    </div>

                    <div class="col-md-2">
                        <strong>₹${itemTotal}</strong>
                    </div>

                    <div class="col-md-1">
                        <button class="btn btn-danger btn-sm"
                                onclick="removeFromCart(${item.id})">
                            <i class="bi bi-trash"></i>
                        </button>
                    </div>

                </div>

            </div>
        `;
    });

    document.getElementById("cartTotal").innerText =
        "₹" + total;
}


function changeQuantity(id, change) {

    let cart = getCart();

    let item = cart.find(function(product) {
        return product.id === Number(id);
    });

    if (!item) {
        return;
    }

    item.quantity = item.quantity + change;

    if (item.quantity <= 0) {

        cart = cart.filter(function(product) {
            return product.id !== Number(id);
        });
    }

    saveCart(cart);

    displayCart();
    updateCartCount();
}


function removeFromCart(id) {

    let cart = getCart();

    cart = cart.filter(function(item) {
        return item.id !== Number(id);
    });

    saveCart(cart);

    displayCart();
    updateCartCount();
}


function placeOrder() {

    let cart = getCart();

    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    let orders =
        JSON.parse(localStorage.getItem("orders") || "[]");

    let total = 0;

    cart.forEach(function(item) {
        total = total + item.price * item.quantity;
    });

    let order = {

        id: Date.now(),

        date: new Date().toLocaleString(),

        items: cart,

        total: total,

        status: "Order Placed"

    };

    orders.push(order);

    localStorage.setItem(
        "orders",
        JSON.stringify(orders)
    );

    localStorage.removeItem("cart");

    alert("Order placed successfully!");

    window.location.href = "orders.html";
}


document.addEventListener("DOMContentLoaded", function() {
    displayCart();
});