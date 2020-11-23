const currencyElementOne = document.getElementById("currency-one");
const amountElementOne = document.getElementById("amount-one");
const currencyElementTwo = document.getElementById("currency-two");
const amountElementTwo = document.getElementById("amount-two");

const rateElement = document.getElementById("rate");
const swap = document.getElementById("swap");

// Fetch exchange rates and updates the DOM.
calculate = () => {
  console.log("Success!");
};

// Event listeners.
currencyElementOne.addEventListener("change", calculate);
amountElementOne.addEventListener("input", calculate);
currencyElementTwo.addEventListener("change", calculate);
amountElementTwo.addEventListener("input", calculate);

calculate();
