const usdInput = document.getElementById("USD");
const brlInput = document.getElementById("BRL");
const convertButton = document.getElementById("convertButton");

convertButton.addEventListener("click", () => {
  fetch("https://api.coinbase.com/v2/exchange-rates")
    .then((res) => res.json())
    .then((data) => {
      const usdValue = usdInput.value;

      brlInput.value = (usdValue * data.data.rates.BRL).toLocaleString(
        "pt-br",
        { style: "currency", currency: "BRL" }
      );
    });
});
