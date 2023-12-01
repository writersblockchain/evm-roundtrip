const { ethers } = require("hardhat");

async function execute() {
  const sendReceiveAddress = "0xe31d9a784d53729E166C28FdF45DE421c8FCdBe8"; // Replace with your deployed contract's address

  try {
    const SendReceive = await ethers.getContractFactory("SendReceive");
    const sendReceive = await SendReceive.attach(sendReceiveAddress);

    const storedMessage = await sendReceive.storedMessage();

    console.log("Sender:", storedMessage.sender);
    console.log("Message:", storedMessage.message);
  } catch (error) {
    console.error("Error:", error);
  }
}

execute();
