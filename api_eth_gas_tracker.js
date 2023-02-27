const apiKey = WWXFQY5ZXRRUMJ9PRA9TTR7SI7ANGA9JYJ;
const apiUrl = `https://api.etherscan.io/api?module=proxy&action=eth_gasPrice&apikey=${WWXFQY5ZXRRUMJ9PRA9TTR7SI7ANGA9JYJ}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const gasPrice = data.result;
    console.log(`Current gas price: ${gasPrice} wei`);
  })
  .catch(error => console.error(error));
