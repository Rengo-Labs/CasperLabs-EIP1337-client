export const PATH_TO_SOURCE_KEYS = `./ed25519-keys`;

export const PATH_TO_CONTRACT_ERC1337 = process.env.PATH_TO_CONTRACT_ERC1337 ||
    `./wasm/casper-contract-eip-1337.wasm`;

export const PATH_TO_CONTRACT_ERC777 =
    process.env.PATH_TO_CONTRACT_ERC777 ||
    `./wasm/erc777_token.wasm`;

// Name of target chain.
export const DEPLOY_CHAIN_NAME =
  process.env.DEPLOY_CHAIN_NAME || "casper-test";

// Gas payment to be offered.
export const DEPLOY_GAS_PAYMENT_FOR_ERC1337_INSTALLATION =
    process.env.DEPLOY_GAS_PAYMENT_FOR_ERC1337_INSTALLATION || 150000000000;

// Gas payment for native transfers to be offered.
export const DEPLOY_GAS_PAYMENT_FOR_TRANSACTION =
  process.env.DEPLOY_GAS_PAYMENT_FOR_TRANSACTION || 3000000000;

// Gas price to be offered.
export const DEPLOY_GAS_PRICE = process.env.DEPLOY_GAS_PRICE
  ? parseInt(process.env.DEPLOY_GAS_PRICE)
  : 1;

// Address of target node.
export const DEPLOY_NODE_ADDRESS =
  process.env.DEPLOY_NODE_ADDRESS || "http://136.243.187.84:7777/rpc";

// Time interval in milliseconds after which deploy will not be processed by a node.
export const DEPLOY_TTL_MS = process.env.DEPLOY_TTL_MS
    ? parseInt(process.env.DEPLOY_TTL_MS)
    : 1800000;

export const ERC1337_CONTRACT = process.env.ERC1337_CONTRACT || "casper-contract-eip-1337-latest-version-contract";
export const ERC777_CONTRACT = process.env.ERC777_CONTRACT || "erc777_token_contract";