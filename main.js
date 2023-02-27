const apiUrl = "https://api.etherscan.io/api";
const apiKey = "WWXFQY5ZXRRUMJ9PRA9TTR7SI7ANGA9JYJ";
const address = "0xE6b169DEE5941F569B989A3B026982703087cfEb";

const url = `${apiUrl}?module=account&action=balance&address=${address}&tag=latest&apikey=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const balance = data.result;
    console.log(`Balance: ${balance}`);
  });
