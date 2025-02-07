import { JsonRpcSigner, Contract, ContractRunner } from 'ethers'
import tokenAbi from '../abis/token.json'
import presaleL2Abi from '../abis/presaleL2.json'
import presaleEthereumAbi from '../abis/presaleEthereum.json'
import { HexNetworksId } from '../../../types'
import { CONTRACTS_ADDRESSES, TOKENS_ADDRESSES } from '../addresses'

export const approve = async (signer: JsonRpcSigner, network: HexNetworksId, tokenName: string, amount: bigint) => {
  const networkTokens = TOKENS_ADDRESSES[network]
  const token: string = networkTokens[tokenName === 'USDC' ? 'USDC' : 'USDT'].address
  const spenderAddress: string = CONTRACTS_ADDRESSES[network].PRESALE
  const contract = new Contract(token, tokenAbi, signer as unknown as ContractRunner)
  const tx = await contract.approve(spenderAddress, amount)
  await tx.wait()
  return tx
}

export const buyPresaleL2 = async (signer: JsonRpcSigner, network: HexNetworksId, tokenName: string, amount: bigint) => {
  const networkTokens = TOKENS_ADDRESSES[network]
  const presaleAddress: string = CONTRACTS_ADDRESSES[network].PRESALE
  const contract = new Contract(presaleAddress, presaleL2Abi, signer as unknown as ContractRunner)
  if (tokenName === 'USDC' || tokenName === 'USDT') {
    const paymentTokenAddress: string = networkTokens[tokenName === 'USDC' ? 'USDC' : 'USDT'].address
    const tx = await contract.buyWithStable(paymentTokenAddress, amount)
    await tx.wait()
    return tx
  } else {
    const tx = await contract.buyWithETH({ value: amount })
    await tx.wait()
    return tx
  }
}

export const buyPresaleETHNetwork = async (signer: JsonRpcSigner, tokenName: string, amount: bigint, stake: boolean) => {
  const networkTokens = TOKENS_ADDRESSES['0x1']
  const presaleAddress: string = CONTRACTS_ADDRESSES['0x1'].PRESALE
  const contract = new Contract(presaleAddress, presaleEthereumAbi, signer as unknown as ContractRunner)
  if (tokenName === 'USDC' || tokenName === 'USDT') {
    const paymentTokenAddress: string = networkTokens[tokenName === 'USDC' ? 'USDC' : 'USDT'].address
    const tx = await contract.buyWithStable(paymentTokenAddress, amount, stake)
    await tx.wait()
    return tx
  } else {
    const tx = await contract.buyWithETH(stake, { value: amount })
    await tx.wait()
    return tx
  }
}
