# `ERC1337`

This JavaScript client gives you an easy way to install and interact with the Casper ERC-1337 contract.

## Set up the project

First of all, you need to download all plugins:

```bash
npm install
```

## How to execute runners
To execute **every** job, you can run the follow commands:
```bash
npm run install:erc1337
npm run create:erc1337
npm run get:erc1337
npm run execute:erc1337
npm run cancel:erc1337
```

## Steps to execute a subscription
To implement this example, you must follow the next steps:
### 1 - Deploy ERC1337
```bash
npm run install:erc1337
```
### 2 - Create a subscription hash
```bash
npm run create:erc1337
```
### 3 - Get the subscription hash 
```bash
npm run get:erc1337
```
To run step 4 or 5, you need to generate a signature using the subscription hash and the account hash.
[Signer](https://github.com/Rengo-Labs/CasperLabs-EIP1337#sign-the-subscription-hash-as-the-sender)
### 4 - Execute the subscription
```bash
npm run execute:erc1337
```
### 5 - Cancel subscription [OPTIONAL]
```bash
npm run cancel:erc1337
```
**NOTE**: To transfer tokens, you firstly need to approve an amount of tokens.
[erc777 approval](../../jobs/erc777/approve.js)