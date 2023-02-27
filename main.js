const apiUrl = "https://api.etherscan.io/api";
const apiKey = "WWXFQY5ZXRRUMJ9PRA9TTR7SI7ANGA9JYJ";
const address = "0x4Fe42dFC900EED12A1cD9060d726f41F4495d970";

const url = `${apiUrl}?module=account&action=balance&address=${address}&tag=latest&apikey=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const balance = data.result;
    console.log(`Balance: ${balance}`);
  });
