# NFT Metadata

How to use Alchemy SDK to get NFT metadata.

## Step 1: Initialize SDK

First, we must initialize the alchemy SDK. To do this, we must import some modules from the Alchemy SDK.

```js
import { Network, Alchemy } from "alchemy-sdk";
```

We will create a setting object to contain our `apiKey` and the `network` from which we want to query and then we'll use the setting object to create a new instance of Alchemy SDK.

```js
const settings = {
  apiKey: "YOUR_API_KEY",
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);
```

Now we'll make a new object called `Token` and store the NFT Contract address and NFT token ID from which we want to get the metadata. for this case we have used the NFT _MutantApeYachtClub #14810_.

```js
const Token = {
  address: "0x60E4d786628Fea6478F785A6d7e704777c86a7c6",
  id: 14810,
};
```

Finally, we'll use the `nft` route to call the `getNFTMetadata` method. Then we'll print the result.

```js
const metadata = await alchemy.nft.getNftMetadata(Token.address, Token.id);

console.log(metadata);
```

Output-

```json
{
  contract: {
    address: '0x60e4d786628fea6478f785a6d7e704777c86a7c6',
    name: 'MutantApeYachtClub',
    symbol: 'MAYC',
    totalSupply: '19447',
    tokenType: 'ERC721',
    openSea: {
      floorPrice: 14,
      collectionName: 'Mutant Ape Yacht Club',
      safelistRequestStatus: 'verified',
      imageUrl: 'https://i.seadn.io/gae/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI?w=500&auto=format',
      description: 'The MUTANT APE YACHT CLUB is a collection of up to 20,000 Mutant Apes that can only be created by exposing an existing Bored Ape to a vial of MUTANT SERUM or by minting a Mutant Ape in the public sale.',
      externalUrl: undefined,
      twitterUsername: undefined,
      discordUrl: undefined,
      lastIngestedAt: '2023-01-18T20:52:14.000Z'
    },
      raw: 'ipfs://QmfNzqEHVFvMv551ThzEQ26Qurzx4L812LDJnJtmUVgqeK',
      gateway: 'https://nft-cdn.alchemy.com/eth-mainnet/997293f7afc5d12e2310959e250e860a',
      thumbnail: 'https://res.cloudinary.com/alchemyapi/image/upload/thumbnail/eth-mainnet/997293f7afc5d12e2310959e250e860a',
      format: 'png',
      bytes: 714453
    }
  ],
  spamInfo: undefined
}
```

---
