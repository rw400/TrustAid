var TrustAidToken = artifacts.require("./TrustAidToken.sol");

module.exports = function(deployer) {
  deployer.deploy(TrustAidToken);
  
};
