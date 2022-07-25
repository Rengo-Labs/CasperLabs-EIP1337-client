# `ERC1337-JS-CLIENT`

This JavaScript client gives you an easy way to install and interact with the ERC-1337 contract.

## Set up the project

First of all, you need to download all plugins:

```bash
npm install
```

After that, you must configure the keys of your wallet. You need to put 
the `public_key.pem`and `secret_key.pem` in the same directory and link it 
with your `PATH_TO_SOURCE_KEYS` from the `.env` file.

This is going to read it by the `getKeyPairOfContract` function:
```javascript
export const getKeyPairOfContract = (pathToFaucet) => {
  return Keys.Ed25519.parseKeyFiles(
    `${pathToFaucet}/public_key.pem`,
    `${pathToFaucet}/secret_key.pem`
  );
};
```

## How to check it
To check this example, execute **every** job using the follow commands:
```bash
npm run approve:erc777
npm run install:erc1337
npm run create:erc1337
npm run get:erc1337
npm run execute:erc1337
npm run cancel:erc1337
```

##Guide to use this client
These guides contain steps to implement every contract client and usage examples
- [ERC777](src/clients/erc777/README.md)
- [ERC1337](src/clients/erc1337/README.md)

## More examples
