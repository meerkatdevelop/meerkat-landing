import type { EIP1193Provider } from '@web3-onboard/common'
import { JsonRpcProvider, JsonRpcSigner, ethers } from 'ethers'
import { HexNetworksId } from '../../../types'
import { RPC_URLS } from '../addresses'

export const createSignerEtherProvider = async (provider: EIP1193Provider): Promise<JsonRpcSigner> => {
  const ethersProvider = new ethers.BrowserProvider(provider, 'any')
  const signer = await ethersProvider.getSigner()
  return signer
}


export const createPublicProvider =  (network: HexNetworksId): JsonRpcProvider => {
  const ethersProvider = new ethers.JsonRpcProvider(RPC_URLS[network])
  return ethersProvider
}