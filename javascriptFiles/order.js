document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("orderMethod");
  const button = document.querySelector(".order-button");

  const links = {
    correios: "https://buy.stripe.com/28EdR2h176sGeqIccS2cg00",
    retirada: "https://buy.stripe.com/28E14gaCJdV85UcdgW2cg01",
  };

  function updateButtonLink() {
    const selected = select.value;
    button.href = links[selected];
    button.setAttribute("target", "_blank");
  }

  select.addEventListener("change", updateButtonLink);

  updateButtonLink();
});