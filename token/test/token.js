var TrustAidToken = artifacts.require("./TrustAidToken.sol");

contract('TrustAidToken', (accounts) => {

    var account1 = web3.eth.accounts[0];
    var account2 = web3.eth.accounts[1];

    //test balanceOf owner
    it('should have a balanceOf equal to totalSupply 1000.', async() => {
        var tokenBalance = await TrustAidToken.deployed();
        await tokenBalance.balanceOf(account1, 1000);
        assert.equal(tokenSupply, 1000, "the balance is not correct.");
    })
    //test donating items for tokens, transferFrom
    it('should transfer tokens to owners account, 1000', async() => {
        var ownerBalance = await TrustAidToken.deployed();
        await ownerBalance.transferFrom(account2, account1, 1000);
        assert.equal(ownerBalance, 1000, "the transfer did not compile.");
    })
    //test subtraction using tokens for discount purchases
    it('should subtract tokens from owners account, 100', async() => {
        var ownerBal = await TrustAidToken.deployed();
        await ownerBal.transfer(account2, account1, 100);
        assert.equal(ownerBal, 100, "tokens were not subracted from the owners account.");
    })
    //test added tokens for recieving
    it('should update the new additional tokens from owner to reciever, 100', async() => {
        var recipientBalance = await TrustAidToken.deployed();
        await ownerBal.transfer(account2, account1, 100);
        assert.equal(recipientBalance, 100, "tokens were not added to recipient account.");
    })
    //test verified accounts
    it('should return true for verified accounts', async() => {
        var verifiedOwner = await TrustAidToken.deployed();
        await verifiedOwner.verified(1);
        assert.equal(verifiedOwner, false, "verified account wasn not verified, invalid.");
    })
    //test if bulk orders qualify
    it('should transfer tokens to owners account, 100', async() => {
        var bulkAccount = await TrustAidToken.deployed();
        await bulkAccount.bulkorder(500);
        assert.equal(ownerBalance, 500, "Bulk account did not register as bulk to recieve discount.");
    })
    //test revert invalid transactions
    it('should revert transaction for insufficient funds on account.', async () => {
        try {
            var revertFunds = await TrustAidToken.deployed();
            await revertFunds.transferFrom(account1, account2, 100000);
        } catch (error) {
            assert.equal(err.toString().includes("revert"), true, "default payable was never called, did not revert.");
        }
    })
})