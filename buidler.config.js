require("dotenv").config();

usePlugin("@nomiclabs/buidler-ethers");

task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(await account.getAddress());
  }
});

const { forkedChain, runTests } = require("./helpers/test");
task("test", "Runs tests via Jest", async () => {
  const { start, stop } = forkedChain();
  await start();
  await runTests();
  await stop();
});

module.exports = {
  defaultNetwork: 'localhost'
};
