import { Network, Alchemy } from "alchemy-sdk";

const settings = {
  apiKey: "YOUR_API_KEY",
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

const Token = {
  address: "0x60E4d786628Fea6478F785A6d7e704777c86a7c6",
  id: 14810,
};

const metadata = await alchemy.nft.getNftMetadata(Token.address, Token.id);

console.log(metadata);
