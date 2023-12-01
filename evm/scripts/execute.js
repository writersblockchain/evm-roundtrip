const { ethers } = require("hardhat");

async function execute() {
  const sendReceiveAddress = "0xe31d9a784d53729E166C28FdF45DE421c8FCdBe8"; // Replace with your deployed contract's address
  const destinationChain = "secret"; // Replace with your desired destination chain
  const destinationAddress = "secret1ftukxfm978r56c6lz9l7jwslulhmurx9sakx7a"; // Replace with your desired destination address

  let msg = "Hello World!";
  const SendReceive = await ethers.getContractFactory("SendReceive");
  const sendReceive = await SendReceive.attach(sendReceiveAddress);

  const tx = await sendReceive.send(destinationChain, destinationAddress, msg, {
    value: ethers.utils.parseEther("0.35"), // Adjust the amount as needed for gas
  });

  console.log(`Transaction hash: ${tx.hash}`);
  await tx.wait();

  console.log("send function executed successfully!");
}
execute();
