// Added file system module to allow Truffle to write files to our folder
const fs = require('fs');
var safemath = artifacts.require("./safemath.sol");
var zombiefactory = artifacts.require("./zombiefactory.sol");
var zombiefeeding = artifacts.require("./zombiefeeding.sol");
var zombiehelper = artifacts.require("./zombiehelper.sol");
var zombieattack = artifacts.require("./zombieattack.sol");
var zombieownership = artifacts.require("./zombieownership.sol");

module.exports = function(deployer) {
    deployer.deploy(safemath);
    deployer.deploy(zombiefactory);
    deployer.deploy(zombiefeeding);
    deployer.deploy(zombiehelper);
    deployer.deploy(zombieattack);
    // Added .then() to run automatically after ZombieOwnership deploys
    deployer.deploy(zombieownership).then(() => {
        // Format the new ABI and Address as JavaScript variables
        const configContent = `
        var cryptoZombiesABI = ${JSON.stringify(zombieownership.abi)};
        var cryptoZombiesAddress = "${zombieownership.address}";
                `;
        // Write formatted variables directly into cryptozombies_abi.js
        fs.writeFileSync('./cryptozombies_abi.js', configContent);
        console.log("Auto-updated cryptozombies_abi.js with new Address and ABI!");
    });
}
