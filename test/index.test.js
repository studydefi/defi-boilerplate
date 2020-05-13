/**
 * @jest-environment node
 */

require("dotenv").config();
jest.setTimeout(30000);

const bre = require("@nomiclabs/buidler");
const erc20 = require("@studydefi/money-legos/erc20");

const fromWei = (x, u = 18) => bre.ethers.utils.formatUnits(x, u);

describe("initial conditions", () => {
  let wallet;

  beforeAll(async () => {
    [wallet] = await bre.ethers.getSigners();
  });

  test("initial DAI balance of 0", async () => {
    const daiContract = new bre.ethers.Contract(
      erc20.dai.address,
      erc20.dai.abi,
      wallet
    );
    const daiBalance = await daiContract.balanceOf(await wallet.getAddress());
    expect(fromWei(daiBalance)).toBe("0.0");
  });

  test("initial ETH balance of 1000 ETH", async () => {
    const ethBalance = await wallet.getBalance();
    expect(fromWei(ethBalance)).toBe("1000.0");
  });
});
