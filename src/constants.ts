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
