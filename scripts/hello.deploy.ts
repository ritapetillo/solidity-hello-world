import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

async function deploy() {
  const HelloWorld = await ethers.getContractFactory("HelloWorld");
  const helloWorld = await HelloWorld.deploy();
  await helloWorld.deployed();
  return helloWorld;
}

// @ts-ignore
async function run(hello) {
  console.log(await hello.hello());
}

deploy().then(async (hello) => await run(hello));
