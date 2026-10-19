# CryptoZombies DApp - CPSC 559 Midterm Project

This is a web3 demo project for the CPSC 559 course at California State University Fullerton, starting from the CryptoZombies demo package. This project demonstrates blockchain development and web3 integration with standard HTML, JS, and CSS front end.
<div align="center">
  <img width="856" height="829" alt="HTML Page with Zombie Walking" src="https://github.com/user-attachments/assets/35b616a2-27ea-48f1-acbc-d56b40b425a7" />
</div>

**GitHub Respository:** https://github.com/LiamDwane/559-blockchain-midterm

## Team Members
* **Name:** Liam Dwane | **CWID:** 888470812 | **Email:** lpdwane@csu.fullerton.edu
* **Name:** Noemi Pantoja Morales | **CWID:** 888595816 | **Email:** noemi_900@csu.fullerton.edu
* **Name:** Jasmine Rodriguez | **CWID:** 884544784 | **Email:** jasminerrodriguez@csu.fullerton.edu
* **Name:** Ammar Mohiuddin | **CWID:** 882421753| **Email:** Mohiuddin2004@csu.fullerton.edu

## Improvements Made
We made it much easier to deploy and run the app by completely automating how the blockchain connects to the frontend:
* We updated our deployment script, so that every time we deploy our smart contracts, the new contract address and ABI are automatically saved directly into our frontend file.
* We removed the hard-coded contract address. The website now automatically reads the correct address from our generated file.
* We added `cryptozombies_abi.js` to our `.gitignore` file. Because everyone gets a different local address when they run Ganache on their own computers, this prevents us from accidentally overwriting each other's setups when saving to GitHub.
* Animated a walk cycle for the zombie in 6 layers for different limbs. Colored the limbs using DNA modulus logic to sample from color palettes controlled by transformed cosine functions and rendered using an html canvas.
* Added a clearer error message when the user tries to create another zombie

<div align="center">
  <img width="900" height="40" alt="Leg Palette" src="https://github.com/user-attachments/assets/63a0c427-c45b-4290-8ed6-8e7afb976250" />
  <br />
  <p><sub><i>Zombie Leg Palette</i></sub></p>
</div>

<div align="center">
  <img width="900" height="40" alt="image" src="https://github.com/user-attachments/assets/f0f4209a-3674-4d5d-96f2-04111322c8e8" />
  <br />
  <p><sub><i>Zombie Torso Palette</i></sub></p>
</div>

<div align="center">
  <img width="900" height="40" alt="image" src="https://github.com/user-attachments/assets/d5d17dfe-dce7-460c-a115-0928ba175cd4" />
  <br />
  <p><sub><i>Zombie Arm Palette</i></sub></p>
</div>

<div align="center">
  <img width="900" height="40" alt="image" src="https://github.com/user-attachments/assets/670b0b88-22c6-489b-9926-b067f4adc65a" />
  <br />
  <p><sub><i>Zombie Head Palette</i></sub></p>
</div>

  
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
3. Ensure MetaMask wallet is connected to the site to interact with the smart contracts. Each account is currently limited to one zombie. You can play by using the Create Zombie and Level Up buttons. When you click Create Zombie, the interface will display your zombie's stats: Name (which defaults to your wallet address), DNA, level, wins, losses, and ready time. After upgrading, simply click Show Zombie to refresh the screen and view your zombie's new level.

