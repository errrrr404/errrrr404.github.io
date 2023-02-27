// создаем функцию для получения данных с API etherscan.io
function getData() {
  const apiKey = "WWXFQY5ZXRRUMJ9PRA9TTR7SI7ANGA9JYJ"; // здесь нужно вставить ваш API ключ etherscan.io
  const apiUrl = `https://api.etherscan.io/api?module=account&action=balance&address=0x4Fe42dFC900EED12A1cD9060d726f41F4495d970&tag=latest&apikey=${apiKey}`;

  // используем fetch для получения данных из API
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
