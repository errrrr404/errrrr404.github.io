const apiUrl = "https://api.etherscan.io/api";
const apiKey = "WWXFQY5ZXRRUMJ9PRA9TTR7SI7ANGA9JYJ";
const address = "0x5B136C9966342d23eDa33cf99a576f8C97842994";

const url = `${apiUrl}?module=account&action=balance&address=${address}&tag=latest&apikey=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const balance = data.result;
    console.log(`Balance: ${balance}`);
  });
