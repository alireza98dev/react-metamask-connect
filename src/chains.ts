import type { AddEthereumChainParameter } from '@web3-react/types'

export const BSC_MAINNET_CHAIN: AddEthereumChainParameter = {
    chainId : 56,
    chainName : "Binance Smart Chain (Mainnet)",
    nativeCurrency : {
        name: 'BNB',
        symbol: 'BNB',
        decimals: 18,
    },
    rpcUrls : ['https://bsc-dataseed1.binance.org']
}

export const BSC_TESTNET_CHAIN: AddEthereumChainParameter = {
    chainId : 97,
    chainName : "Binance Smart Chain (Testnet)",
    nativeCurrency : {
        name: 'tBNB',
        symbol: 'tBNB',
        decimals: 18,
    },
    rpcUrls : ['https://data-seed-prebsc-1-s3.binance.org:8545/']
}

export const SUPPORTED_CHAINS = [BSC_MAINNET_CHAIN, BSC_TESTNET_CHAIN]