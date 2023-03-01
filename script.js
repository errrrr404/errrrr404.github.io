const walletAddress = "0x4Fe42dFC900EED12A1cD9060d726f41F4495d970";
const apiKey = "WWXFQY5ZXRRUMJ9PRA9TTR7SI7ANGA9JYJ";

const balanceElement = document.getElementById("balance");

const ethersProvider = new ethers.providers.InfuraProvider("ropsten", apiKey);

async function updateBalance() {
  const balance = await ethersProvider.getBalance(walletAddress);
  const balanceInGwei = ethers.utils.formatUnits(balance, 'gwei');
  balanceElement.innerHTML = balanceInGwei;
}

updateBalance();
