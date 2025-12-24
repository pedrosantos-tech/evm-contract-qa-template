const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Vault", function () {
  let vault, owner, user;

  beforeEach(async () => {
    [owner, user] = await ethers.getSigners();
    const Vault = await ethers.getContractFactory("Vault");
    vault = await Vault.deploy();
    await vault.deployed();
  });

  it("should accept deposits", async () => {
    await vault.connect(user).deposit({ value: ethers.utils.parseEther("1") });
    const balance = await vault.balances(user.address);
    expect(balance).to.equal(ethers.utils.parseEther("1"));
  });

  it("should prevent over-withdrawal", async () => {
    await expect(vault.connect(user).withdraw(ethers.utils.parseEther("1")))
      .to.be.revertedWith("Insufficient balance");
  });
});
