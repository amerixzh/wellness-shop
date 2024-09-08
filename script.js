// For the cart and interactive features
document.addEventListener("DOMContentLoaded", () => {
    const cartButtons = document.querySelectorAll(".product-card button");

    cartButtons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Added to Cart");
        });
    });
});
