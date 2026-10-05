let categories = [
    "Pain Relief",
    "Cold and Cough",
    "Vitamins",
    "First Aid",
    "Health Devices",
    "General Healthcare"
];

function displayCategories() {

    let container = document.getElementById("categoryList");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    categories.forEach(function(category) {

        container.innerHTML += `
            <div class="col-md-4 mb-4">

                <div class="card shadow-sm text-center p-4 h-100">

                    <i class="bi bi-capsule fs-1 text-success"></i>

                    <h5 class="mt-3">${category}</h5>

                    <a href="medicines.html?category=${encodeURIComponent(category)}"
                       class="btn btn-success mt-2">
                        View Medicines
                    </a>

                </div>

            </div>
        `;
    });
}

document.addEventListener("DOMContentLoaded", function() {
    displayCategories();
});