const { ethers } = require("hardhat");
require("dotenv").config();

const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS; 

async function main() {
  const HelloWorldContractFactory = await ethers.getContractFactory("HelloWorld");
  HelloWorldContract = await HelloWorldContractFactory.attach(CONTRACT_ADDRESS);

  //Reading the current message stored
  const message = await HelloWorldContract.message();
  console.log("The message is " + message);

  //Updating the current message
  const tx = await HelloWorldContract.update("Good Bye, World!!");
  await tx.wait();

  const nmessage = await HelloWorldContract.message();
  console.log("The new message is " + nmessage);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
