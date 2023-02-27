function drawChart() {
  const chartDiv = document.getElementById('chart');
  const chart = new Chart(chartDiv, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'Ether price (USD)',
        data: prices,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      }
    }
  });
}
