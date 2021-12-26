import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { expect } from "chai";

describe("Hello World", () => {
  it("should say hi", async () => {
    //  1. set up the environment
    //  2. deploy the contract
    //  3. call the contract

    // 2. deploy the contract
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const helloWorld = await HelloWorld.deploy();
    await helloWorld.deployed();

    expect(await helloWorld.hello()).to.equal("Hello World!");
  });
});
