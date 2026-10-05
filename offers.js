let offers = [
    {
        code: "MEDI15",
        title: "15% OFF",
        description: "Get 15% discount on your first order."
    },
    {
        code: "HEALTH20",
        title: "Health Savings",
        description: "Get special discounts on selected health products."
    },
    {
        code: "FREEDELIVERY",
        title: "Free Delivery",
        description: "Enjoy free delivery on selected orders."
    }
];

function copyOfferCode(code) {

    navigator.clipboard.writeText(code);

    alert("Coupon code " + code + " copied!");
}