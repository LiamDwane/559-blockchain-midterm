# CryptoZombies DApp - CPSC 559 Midterm Project

This is a web3 demo project for the CPSC 559 course at California State University Fullerton, starting from the CryptoZombies demo package. This project demonstrates blockchain development and web3 integration with standard HTML, JS, and CSS front end.

**GitHub Respository:** 

## Team Members
* **Name:** Liam Dwane | **CWID:** | **Email:**
* **Name:** Noemi Pantoja Morales | **CWID:** 888595816 | **Email:** noemi_900@csu.fullerton.edu
* **Name:** Jasmine Rodriguez | **CWID:** 888470812 | **Email:** lpdwane@csu.fullerton.edu
* **Name:** Ammar Mohiuddin | **CWID:** 882421753| **Email:** Mohiuddin2004@csu.fullerton.edu

## Improvements Made
We made it much easier to deploy and run the app by completely automating how the blockchain connects to the frontend:
* We updated our deployment script, so that every time we deploy our smart contracts, the new contract address and ABI are automatically saved directly into our frontend file.
* We removed the hard-coded contract address. The website now automatically reads the correct address from our generated file.
* We added `cryptozombies_abi.js` to our `.gitignore` file. Because everyone gets a different local address when they run Ganache on their own computers, this prevents us from accidentally overwriting each other's setups when saving to GitHub.

---

## Instructions for Setup and Running
*Note: Our DApp setup is a bit different from the starter code because manual ABI copy-pasting is no required*

### Prequisites
* **Node.js & npm**
* **Truffle** (to install: `npm install -g truffle`)
* **Ganache** (Desktop UI app)
* **MetaMask** (Browser extension)
* **VS Code** with Live Server extension

### 1. Local Blockchain Setup
1. Open the Ganache desktop app and ensure the RPC Server is running on `HTTP://127.0.0.1:7545`
2. Open a terminal in the root directory of this repository and deploy the smart contracts:
```bash
truffle migrate --reset
```

### 2. MetaMask Configuration
1. Open MetaMask and add a custom network. Ensure default network RPC URL matches Ganache: `HTTP://127.0.0.1:7545`, Chain ID: 5777, and currency symbol: ETH.
2. Import a test account from Ganache using its private key.

### 3. Running the Frontend
1. Open `index.html` in VS Code
2. Select open with live server
3. Ensure MetaMask wallet is connected to the site to interact with the smart contracts. Each account is currently limited to a single zombie. You can play by using the Create Zombie and Level Up buttons. When you click Create Zombie, the interface will display your zombie's stats: Name (which defaults to your wallet address), DNA, level, wins, losses, and ready time. After upgrading, simply click Show Zombie to refresh the screen and view your zombie's new level.
