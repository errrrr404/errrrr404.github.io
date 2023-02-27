// создаем функцию для получения данных с API etherscan.io
function getData() {
  const apiKey = WWXFQY5ZXRRUMJ9PRA9TTR7SI7ANGA9JYJ; // здесь нужно вставить ваш API ключ etherscan.io
  const API_URL = 'https://api.etherscan.io/api?module=account&action=balance&address=0x742d35Cc6634C0532925a3b844Bc454e4438f44e&tag=latest&apikey=WWXFQY5ZXRRUMJ9PRA9TTR7SI7ANGA9JYJ';
  // используем fetch для получения данных из API
  console.log("Starting API request");
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data.result); // выводим полученные данные в консоль
      // здесь вы можете использовать полученные данные для отображения на вашем сайте
    })
    .catch(error => console.error(error));
}

// вызываем функцию для получения данных
getData();
