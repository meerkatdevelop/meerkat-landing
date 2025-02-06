import { Token } from "../../types"

//* ETHEREUM
const USDC_ETH: Token = { address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', decimals: 6 }
const USDT_ETH: Token = { address: '0xdAC17F958D2ee523a2206206994597C13D831ec7', decimals: 6 }

//*BASE
const USDC_BASE: Token = { address: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913', decimals: 6 }
const USDT_BASE: Token = { address: '0xfde4C96c8593536E31F229EA8f37b2ADa2699bb2', decimals: 6 } //cannonical bridge

//*BSC
const USDT_BSC: Token = { address: '0x55d398326f99059ff775485246999027b3197955', decimals: 18 }
const USDC_BSC: Token = { address: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d', decimals: 18 }

export const TOKENS_ADDRESSES = {
  '0x1': {
    USDC: USDC_ETH,
    USDT: USDT_ETH,
  },
  '0x38': {
    USDC: USDC_BSC,
    USDT: USDT_BSC,
  },
  '0x2105': {
    USDC: USDC_BASE,
    USDT: USDT_BASE,
  },
}

//todo: add real addresses
const PRESALE_BSC = ''
const PRESALE_BASE = ''
const PRESALE_ETH = ''
const STAKING_PRESALE_ETH = ''
const STAKING_POST_PRESALE_ETH = ''
const CLAIM_ETH = ''

export const CONTRACTS_ADDRESSES = {
  '0x1': {
    PRESALE: PRESALE_ETH,
    STAKING_PRESALE: STAKING_PRESALE_ETH,
    STAKING_POST_PRESALE: STAKING_POST_PRESALE_ETH,
    CLAIM: CLAIM_ETH,
  },
  '0x38': {
    PRESALE: PRESALE_BSC,
  },
  '0x2105': {
    PRESALE: PRESALE_BASE,
  },
}

