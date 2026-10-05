// ===============================
// CART FUNCTIONS
// ===============================

function getCart() {
    return JSON.parse(localStorage.getItem("cart") || "[]");
}

function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartCount() {

    let cart = getCart();

    let count = 0;

    cart.forEach(function(item) {
        count = count + item.quantity;
    });

    document.querySelectorAll(".cart-count").forEach(function(element) {
        element.innerText = count;
    });
}


// ===============================
// HOME PAGE SEARCH
// ===============================

function searchMedicine() {

    let search = document.getElementById("homeSearch").value;

    if (search.trim() === "") {
        alert("Please enter a medicine name.");
        return;
    }

    window.location.href =
        "medicines.html?search=" + encodeURIComponent(search);
}


// ===============================
// PAGE LOAD
// ===============================

document.addEventListener("DOMContentLoaded", function() {

    updateCartCount();

});