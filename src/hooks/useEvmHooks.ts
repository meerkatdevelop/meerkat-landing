import { useConnectWallet, useSetChain } from '@web3-onboard/react'

export const useWallet = () => {
  const [
    {
      wallet, // the wallet that has been connected or null if not yet connected
    },
    connect, // function to call to initiate user to connect wallet
    disconnect, // function to call with wallet<DisconnectOptions> to disconnect wallet
  ] = useConnectWallet()

  return {
    wallet,
    connect,
    disconnect,
  }
}

export const useChangeEvmNetwork = () => {
  const [
    {
      chains, // the list of chains that web3-onboard was initialized with
      connectedChain, // the current chain the user's wallet is connected to
    },
    setChain, // function to call to initiate user to switch chains in their wallet
  ] = useSetChain()

  const changeEvmNetwork =  (newChangeName: 'ethereum' | 'base' | 'bsc') => {
    const newChainData = chains.find((chain) => chain.label?.toLowerCase() === newChangeName)
    const hexChainId = `${newChainData?.id}`
    setChain({ chainId: hexChainId })
  }

  return {
    chains,
    connectedChain,
    setChain,
    changeEvmNetwork,
  }
}
