const hrd = require('hardhat');

(async function(){
    const GasToken = await hrd.ethers.getContractFactory('GasToken');
    console.log("Deploying Gas Token ERC721...")
    const token = await GasToken.deploy('GasToken', 'GSTO');

    await token.deployed();
    console.log('Gas Token Deployed : ', token.address) 
})()
