"use client"

import { Button } from "@/components/ui/button"
import { useWallet } from "@/hooks/use-wallet"
import { Wallet, LogOut } from "lucide-react"

export function WalletConnectButton() {
  const { address, isConnected, isConnecting, connectWallet, disconnectWallet } = useWallet()

  if (isConnected && address) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">{`${address.slice(0, 6)}...${address.slice(-4)}`}</span>
        <Button variant="outline" size="sm" onClick={disconnectWallet} className="gap-2 bg-transparent">
          <LogOut className="h-4 w-4" />
          Disconnect
        </Button>
      </div>
    )
  }

  return (
    <Button onClick={connectWallet} disabled={isConnecting} className="gap-2 bg-emerald-600 hover:bg-emerald-700">
      <Wallet className="h-4 w-4" />
      {isConnecting ? "Connecting..." : "Connect Wallet"}
    </Button>
  )
}
