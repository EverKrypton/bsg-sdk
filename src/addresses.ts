import { SupportedChainId } from './constants'

export type AddressMap = { [chainId: number]: string }

export const INIT_CODE_HASH: AddressMap = {
  [SupportedChainId.MAINNET]: '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f', // Uniswap
  [SupportedChainId.ROPSTEN]: '0x0000000000000000000000000000000000000000000000000000000000000000',
  [SupportedChainId.RINKEBY]: '0xc504c260b7a99152dcc258f5a6f9e6628e16e080e46a2cf586d8889d33f02a9c',
  [SupportedChainId.GÖRLI]: '0x0000000000000000000000000000000000000000000000000000000000000000',
  [SupportedChainId.KOVAN]: '0x0000000000000000000000000000000000000000000000000000000000000000'
}

export const FACTORY_ADDRESS: AddressMap = {
  [SupportedChainId.MAINNET]: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f', // Uniswap
  [SupportedChainId.ROPSTEN]: '0x0000000000000000000000000000000000000000',
  [SupportedChainId.RINKEBY]: '0x97c4ab76e6818FaA20Bc75D18B59b3F99685e2cf',
  [SupportedChainId.GÖRLI]: '0x0000000000000000000000000000000000000000',
  [SupportedChainId.KOVAN]: '0x0000000000000000000000000000000000000000'
}

export const ROUTER_ADDRESS: AddressMap = {
  [SupportedChainId.MAINNET]: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D', // Uniswap
  [SupportedChainId.ROPSTEN]: '0x0000000000000000000000000000000000000000',
  [SupportedChainId.RINKEBY]: '0xb167044f29eFE9bbc58a2A06Ae8d5d950da350C3',
  [SupportedChainId.GÖRLI]: '0x0000000000000000000000000000000000000000',
  [SupportedChainId.KOVAN]: '0x0000000000000000000000000000000000000000'
}

// provider addresses
export const MULTICALL_NETWORKS: AddressMap = {
  [SupportedChainId.MAINNET]: '0xeefba1e63905ef1d7acba5a8513c70307c1ce441',
  [SupportedChainId.ROPSTEN]: '0x53c43764255c17bd724f74c4ef150724ac50a3ed',
  [SupportedChainId.RINKEBY]: '0x42ad527de7d4e9d9d011ac45b31d8551f8fe9821',
  [SupportedChainId.GÖRLI]: '0x77dca2c955b15e9de4dbbcf1246b4b85b651e50e',
  [SupportedChainId.KOVAN]: '0x2cc8688c5f75e365aaeeb4ea8d6a480405a48d2a'
}

export const MULTICALL2_ADDRESS: AddressMap = {
  [SupportedChainId.MAINNET]: '0x5ba1e12693dc8f9c48aad8770482f4739beed696',
  [SupportedChainId.ROPSTEN]: '0x5ba1e12693dc8f9c48aad8770482f4739beed696',
  [SupportedChainId.RINKEBY]: '0x5ba1e12693dc8f9c48aad8770482f4739beed696',
  [SupportedChainId.GÖRLI]: '0x5ba1e12693dc8f9c48aad8770482f4739beed696',
  [SupportedChainId.KOVAN]: '0x5ba1e12693dc8f9c48aad8770482f4739beed696'
}

export const ENS_REGISTRAR_ADDRESS: AddressMap = {
  [SupportedChainId.MAINNET]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  [SupportedChainId.ROPSTEN]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  [SupportedChainId.RINKEBY]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  [SupportedChainId.GÖRLI]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'
}
