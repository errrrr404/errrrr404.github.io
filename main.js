// создаем функцию для получения данных с API etherscan.io
function getData() {
  const apiKey = WWXFQY5ZXRRUMJ9PRA9TTR7SI7ANGA9JYJ; // здесь нужно вставить ваш API ключ etherscan.io
  const apiUrl = `https://api.etherscan.io/api?module=account&action=balance&address=0x742d35Cc6634C0532925a3b844Bc454e4438f44e&tag=latest&apikey=${WWXFQY5ZXRRUMJ9PRA9TTR7SI7ANGA9JYJ}`;

  // используем fetch для получения данных из API
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const result = data.result;
    const labels = result.map(record => record.time);
    const prices = result.map(record => record.close);
    drawChart(); // добавить эту строку
  });

