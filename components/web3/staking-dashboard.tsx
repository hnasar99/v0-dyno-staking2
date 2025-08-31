"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useStaking } from "@/hooks/use-staking"
import { useDStakeToken } from "@/hooks/use-dstake-token"
import { useWallet } from "@/hooks/use-wallet"
import { Coins, TrendingUp, Gift } from "lucide-react"

export function StakingDashboard() {
  const { isConnected } = useWallet()
  const { balance } = useDStakeToken()
  const { stakedAmount, pendingRewards, isRegistered, registerWallet, stake, unstake, claimRewards, isPending } =
    useStaking()

  const [stakeAmount, setStakeAmount] = useState("")
  const [unstakeAmount, setUnstakeAmount] = useState("")

  if (!isConnected) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle>Connect Your Wallet</CardTitle>
          <CardDescription>Please connect your wallet to access the staking dashboard</CardDescription>
        </CardHeader>
      </Card>
    )
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Registration Card */}
      {!isRegistered && (
        <Card className="border-emerald-200 bg-emerald-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gift className="h-5 w-5 text-emerald-600" />
              Welcome Bonus Available!
            </CardTitle>
            <CardDescription>Register your wallet to receive 1 DStake token as a welcome bonus</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={registerWallet} disabled={isPending} className="bg-emerald-600 hover:bg-emerald-700">
              {isPending ? "Registering..." : "Register Wallet & Claim Bonus"}
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Balance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">DStake Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Number.parseFloat(balance).toFixed(4)}</div>
            <p className="text-xs text-muted-foreground">Available to stake</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Staked Amount</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Number.parseFloat(stakedAmount).toFixed(4)}</div>
            <p className="text-xs text-muted-foreground">Currently earning rewards</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Pending Rewards</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-600">{Number.parseFloat(pendingRewards).toFixed(6)}</div>
            <p className="text-xs text-muted-foreground">Ready to claim</p>
          </CardContent>
        </Card>
      </div>

      {/* Staking Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Stake Tokens */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Coins className="h-5 w-5" />
              Stake Tokens
            </CardTitle>
            <CardDescription>Stake your DStake tokens to earn daily rewards</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="stake-amount">Amount to Stake</Label>
              <Input
                id="stake-amount"
                type="number"
                placeholder="0.00"
                value={stakeAmount}
                onChange={(e) => setStakeAmount(e.target.value)}
              />
            </div>
            <Button
              onClick={() => stake(stakeAmount)}
              disabled={isPending || !stakeAmount || Number.parseFloat(stakeAmount) <= 0}
              className="w-full bg-emerald-600 hover:bg-emerald-700"
            >
              {isPending ? "Staking..." : "Stake Tokens"}
            </Button>
          </CardContent>
        </Card>

        {/* Unstake Tokens */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Unstake Tokens
            </CardTitle>
            <CardDescription>Unstake your tokens (1% withdrawal fee applies)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="unstake-amount">Amount to Unstake</Label>
              <Input
                id="unstake-amount"
                type="number"
                placeholder="0.00"
                value={unstakeAmount}
                onChange={(e) => setUnstakeAmount(e.target.value)}
              />
            </div>
            <Button
              onClick={() => unstake(unstakeAmount)}
              disabled={isPending || !unstakeAmount || Number.parseFloat(unstakeAmount) <= 0}
              variant="outline"
              className="w-full"
            >
              {isPending ? "Unstaking..." : "Unstake Tokens"}
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Claim Rewards */}
      {Number.parseFloat(pendingRewards) > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Claim Rewards</CardTitle>
            <CardDescription>
              You have {Number.parseFloat(pendingRewards).toFixed(6)} DStake tokens ready to claim
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={claimRewards} disabled={isPending} className="bg-emerald-600 hover:bg-emerald-700">
              {isPending ? "Claiming..." : "Claim Rewards"}
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
