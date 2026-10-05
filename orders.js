function displayOrders() {

    let orders =
        JSON.parse(localStorage.getItem("orders") || "[]");

    let container =
        document.getElementById("orderList");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    if (orders.length === 0) {

        container.innerHTML = `
            <div class="text-center p-5">
                <i class="bi bi-box-seam fs-1 text-muted"></i>

                <h4 class="mt-3">
                    No orders yet
                </h4>

                <a href="medicines.html"
                   class="btn btn-success mt-2">
                    Start Shopping
                </a>
            </div>
        `;

        return;
    }

    orders.reverse();

    orders.forEach(function(order, index) {

        let itemsHTML = "";

        order.items.forEach(function(item) {

            itemsHTML += `
                <li class="list-group-item">
                    ${item.name}
                    × ${item.quantity}
                    - ₹${item.price * item.quantity}
                </li>
            `;
        });

        container.innerHTML += `

            <div class="card shadow-sm mb-4">

                <div class="card-header">

                    <strong>
                        Order #${orders.length - index}
                    </strong>

                    <span class="badge bg-success float-end">
                        ${order.status}
                    </span>

                </div>

                <div class="card-body">

                    <p class="text-muted">
                        ${order.date}
                    </p>

                    <ul class="list-group mb-3">
                        ${itemsHTML}
                    </ul>

                    <h5 class="text-success">
                        Total: ₹${order.total}
                    </h5>

                </div>

            </div>
        `;
    });
}


document.addEventListener("DOMContentLoaded", function() {
    displayOrders();
});