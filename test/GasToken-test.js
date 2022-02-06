const { expect } = require('chai');

describe('Gas Token', () => {
    let GasToken;
    let token721;
    let _name = "GasTokan"
    let _symbol = "GSTO"
    let account1, otheraccounts;

    beforeEach(async() => {
        GasToken = await ethers.getContractFactory('GasToken');
        [owner, account1, ...otheraccounts] = await ethers.getSigners();
        token721 = await GasToken.deploy(_name, _symbol) 
    })

    describe('Deployment', () => {
        it('should have correct name and symbol', async() => {
            expect(await token721.name()).to.equal(_name)
            expect(await token721.symbol()).to.equal(_symbol)
        })

        it('should mint a token with ID 1 % 2 to account 1', async () => {
            const address1 = account1.address;
            await token721.mintTo(address1)
            expect(await token721.ownerOf(1)).to.equal(address1)

            await token721.mintTo(address1)
            expect(await token721.ownerOf(2)).to.equal(address1)

            expect(await token721.balanceOf(address1))
        })
    })
})