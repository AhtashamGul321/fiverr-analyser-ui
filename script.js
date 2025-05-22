document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("seller-name").textContent = sellerData.name;
  document.getElementById("orders").textContent = `Orders: ${sellerData.ordersCompleted}/${sellerData.ordersReceived}`;
  document.getElementById("earnings").textContent = `Estimated: ${sellerData.estimatedEarnings}`;
});
