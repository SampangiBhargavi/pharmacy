// ==========================================
// MEDICINE DATA
// ==========================================

let medicines = [

    {
        id: 1,
        name: "Paracetamol 500mg",
        category: "Pain Relief",
        price: 35,
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
        description: "Used for temporary relief from fever and mild pain."
    },

  {
    id: 2,
    name: "Vitamin C Tablets",
    category: "Vitamins",
    price: 199,
    image: "vitaminc.jpg",
    description: "Vitamin C supplement for daily nutritional support."
},

    {
        id: 3,
        name: "Cough Relief Syrup",
        category: "Cold and Cough",
        price: 145,
        image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88",
        description: "Helps provide relief from cough and throat irritation."
    },

    {
        id: 4,
        name: "Antiseptic Cream",
        category: "First Aid",
        price: 99,
        image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde",
        description: "For minor cuts, wounds and skin protection."
    },

    {
        id: 5,
        name: "Multivitamin Tablets",
        category: "Vitamins",
        price: 299,
        image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de",
        description: "Daily multivitamin supplement for nutritional support."
    },

    {
        id: 6,
        name: "Digital Thermometer",
        category: "Health Devices",
        price: 249,
        image: "https://images.unsplash.com/photo-1584362917165-526a968579e8",
        description: "Digital thermometer for quick temperature measurement."
    }

];


// ==========================================
// SAVE MEDICINES
// ==========================================

localStorage.setItem(
    "medicines",
    JSON.stringify(medicines)
);


// ==========================================
// ADD TO CART
// ==========================================

function addToCart(id) {

    let cart = getCart();

    let medicine = medicines.find(function(item) {

        return item.id === Number(id);

    });


    // Medicine not found
    if (!medicine) {

        alert("Medicine not found!");

        return;
    }


    // Check whether medicine already exists
    let existingMedicine = cart.find(function(item) {

        return item.id === medicine.id;

    });


    // If already in cart
    if (existingMedicine) {

        existingMedicine.quantity =
            existingMedicine.quantity + 1;

    }

    // If not in cart
    else {

        cart.push({

            id: medicine.id,

            name: medicine.name,

            price: medicine.price,

            image: medicine.image,

            quantity: 1

        });

    }


    // Save cart
    saveCart(cart);


    // Update cart number
    updateCartCount();


    // Message
    alert(medicine.name + " added to cart!");
}


// ==========================================
// DISPLAY POPULAR MEDICINES
// ==========================================

function displayPopularMedicines() {

    let container =
        document.getElementById("popularMedicines");


    if (!container) {

        return;

    }


    container.innerHTML = "";


    medicines.forEach(function(medicine) {

        container.innerHTML += `

            <div class="col-md-4 mb-4">

                <div class="card medicine-card h-100">

                    <img
                        src="${medicine.image}"
                        class="card-img-top"
                        alt="${medicine.name}"
                    >

                    <div class="card-body">

                        <h5 class="card-title">
                            ${medicine.name}
                        </h5>

                        <p class="text-muted">
                            ${medicine.category}
                        </p>

                        <p>
                            ${medicine.description}
                        </p>

                        <h5 class="text-success">
                            ₹${medicine.price}
                        </h5>

                        <button
                            class="btn btn-success w-100 mt-2"
                            onclick="addToCart(${medicine.id})"
                        >

                            <i class="bi bi-cart-plus"></i>

                            Add to Cart

                        </button>

                    </div>

                </div>

            </div>

        `;

    });

}


// ==========================================
// PAGE LOAD
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        displayPopularMedicines();

        updateCartCount();

    }
);