# `ERC777`

This JavaScript client gives you an easy way to approve an amount of tokens to transfer on Casper network.

## Set up the project

First of all, you need to download all plugins:

```bash
npm install
```

## How to execute an approval
You can run this entry point using the follow command:
```bash
npm run approve:erc777
```

**NOTE**: To install `ERC-777-RECIPIENT` you must copy the **erc1820 and erc777 contract hash** 
and paste it in [ERC-777-RECIPIENT Script](src/jobs/erc1337/installer.js).

## Create a usage example
In this case, we're going to implement a runner following the next steps:
### First - Import libs
```javascript
import ERC777 from "../../clients/erc777/ERC777";
import {CLValueBuilder, RuntimeArgs} from "casper-js-sdk";
import {getAccounts} from "../../helpers/utils";
```

### Second - Instance `erc777`
```javascript
const erc777 = new ERC777()
```

### Third - Set erc777 contract hash
```javascript
await erc777.initContract("hash-<HASH STRING>")
```

### Finally, Invoke the `approve` function
```javascript
await erc777.approve(RuntimeArgs.fromMap({
    spender: CLValueBuilder.key(ownerHash),
    amount: CLValueBuilder.u256("500")
}))
```