// artifacts is a global object
// eslint-disable-next-line no-undef
var VotingExample = artifacts.require("VotingExample");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(VotingExample);
};