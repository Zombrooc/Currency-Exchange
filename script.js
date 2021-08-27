const usdInput = document.getElementById("USD");
const brlInput = document.getElementById("BRL");
//const convertButton = document.getElementById("convertButton");

const replaceComma = (string) => {
  return string.replace(',', '.');
}

usdInput.addEventListener("input", (event) => {

  let targetValue = replaceComma(event.target.value);
  
  fetch("https://api.coinbase.com/v2/exchange-rates?currency=USD")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      brlInput.value = (targetValue * data.data.rates.BRL).toLocaleString(
        "pt-br",
        { style: "currency", currency: "BRL" }
      );
    });
});

brlInput.addEventListener("input", (event) => {

  let targetValue = replaceComma(event.target.value);

  fetch("https://api.coinbase.com/v2/exchange-rates?currency=USD")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      usdInput.value = (targetValue / data.data.rates.BRL).toLocaleString(
        "us",
        { style: "currency", currency: "USD" }
      );
    });
});