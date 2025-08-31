"use client"

import { useAccount, useConnect, useDisconnect } from "wagmi"
import { metaMask } from "wagmi/connectors"

export function useWallet() {
  const { address, isConnected, isConnecting } = useAccount()
  const { connect } = useConnect()
  const { disconnect } = useDisconnect()

  const connectWallet = () => {
    connect({ connector: metaMask() })
  }

  const disconnectWallet = () => {
    disconnect()
  }

  return {
    address,
    isConnected,
    isConnecting,
    connectWallet,
    disconnectWallet,
  }
}
