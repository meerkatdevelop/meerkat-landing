import { PropsWithChildren } from 'react'
import { Web3OnboardProvider, init } from '@web3-onboard/react'
import injectedModule from '@web3-onboard/injected-wallets'
import coinbaseWalletModule from '@web3-onboard/coinbase'
import walletConnectModule from '@web3-onboard/walletconnect'
import { CHAINS_ONBOARD_CONFIG } from './chains'

const OnBoardGloablProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { ethereum, bsc, base } = CHAINS_ONBOARD_CONFIG
  const walletConnectOptions = {
    projectId: import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID,
    /**
     * Chains required to be supported by all wallets connecting to your DApp
     */
    requiredChains: [ethereum.id],
    /**
     * Chains required to be supported by all wallets connecting to your DApp
     */
    optionalChains: [bsc.id, base.id, ethereum.id],
    /**
     * Defaults to `appMetadata.explore` that is supplied to the web3-onboard init
     * Strongly recommended to provide atleast one URL as it is required by some wallets (i.e. MetaMask)
     * To connect with WalletConnect
     */
    dappUrl: 'http://YourAwesomeDapp.com',
  }

  const chains = [ethereum, bsc, base]
  const wallets = [injectedModule(), coinbaseWalletModule(), walletConnectModule(walletConnectOptions)]
  const web3Onboard = init({
    wallets,
    chains,
    appMetadata: {
      name: 'Meerkat',
      icon: '<svg>App Icon</svg>',
      description: 'Meerkat ($MERK) is more than just a token it is a revolutionary ecosystem! Featuring Meerkat Games, AI Meme Generator, Staking, and DAO Governance, $MERK empowers its community like never before',
    },
    theme: 'dark',
  })
  return <Web3OnboardProvider web3Onboard={web3Onboard}>{children}</Web3OnboardProvider>
}

export default OnBoardGloablProvider
