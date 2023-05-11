// artifacts is a global object
// eslint-disable-next-line no-undef
var CoinExample = artifacts.require("CoinExample");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(CoinExample);
};