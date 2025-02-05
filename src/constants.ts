import { BASE, BNB, ETH, SOLANA, USDT } from './assets'

export const MOBILE_MAX_WIDTH = 768

export const pairs = {
  ETH: [
    { coin: ETH, chain: ETH, label: 'ETH', name: 'Ethereum' },
    { coin: USDT, chain: ETH, label: 'USDT', name: 'Tether' },
  ],
  SOL: [
    { coin: SOLANA, chain: SOLANA, label: 'SOL', name: 'Solana' },
    { coin: USDT, chain: SOLANA, label: 'USDT', name: 'Tether' },
  ],
  BNB: [
    { coin: BNB, chain: BNB, label: 'BNB', name: 'Binance' },
    { coin: USDT, chain: BNB, label: 'USDT', name: 'Tether' },
  ],
  BASE: [
    { coin: ETH, chain: BASE, label: 'BASE', name: 'Base' },
    { coin: USDT, chain: BASE, label: 'USDT', name: 'Tether' },
  ],
}
export const chains = [
  { chain: ETH, label: 'ETH', name: 'Ethereum' },
  { chain: SOLANA, label: 'SOL', name: 'Solana' },
  { chain: BNB, label: 'BNB', name: 'Binance' },
  { chain: BASE, label: 'BASE', name: 'Base' },
]

export const springInLaguageSelector = {
  hidden: {
    height: 0,
    opacity: 0,
  },
  visible: {
    height: 320,
    opacity: 1,
    transition: {
      duration: 0.4,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.2,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
}

export const springInChainSelector = {
  hidden: {
    height: 0,
    opacity: 0,
  },
  visible: {
    height: 260,
    opacity: 1,
    transition: {
      duration: 0.4,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.2,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
}
export const springInUserMenu = {
  hidden: {
    height: 0,
    opacity: 0,
  },
  visible: {
    height: 260,
    opacity: 1,
    transition: {
      duration: 0.4,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.2,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
}
