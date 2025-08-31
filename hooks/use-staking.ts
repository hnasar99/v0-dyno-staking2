"use client"

import { useReadContract, useWriteContract, useWaitForTransactionReceipt } from "wagmi"
import { parseEther, formatEther } from "viem"
import { useChainId, useAccount } from "wagmi"
import { CONTRACT_ADDRESSES, type ChainId } from "@/contracts/addresses"
import { STAKING_CONTRACT_ABI } from "@/contracts/abis/staking-contract"

export function useStaking() {
  const chainId = useChainId() as ChainId
  const { address } = useAccount()
  const stakingAddress = CONTRACT_ADDRESSES[chainId]?.STAKING_CONTRACT

  const { writeContract, data: hash, isPending } = useWriteContract()
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
    hash,
  })

  // Read staked amount
  const { data: stakedAmount, refetch: refetchStaked } = useReadContract({
    address: stakingAddress as `0x${string}`,
    abi: STAKING_CONTRACT_ABI,
    functionName: "getStakedAmount",
    args: address ? [address] : undefined,
  })

  // Read pending rewards
  const { data: pendingRewards, refetch: refetchRewards } = useReadContract({
    address: stakingAddress as `0x${string}`,
    abi: STAKING_CONTRACT_ABI,
    functionName: "getPendingRewards",
    args: address ? [address] : undefined,
  })

  // Check if wallet is registered
  const { data: isRegistered, refetch: refetchRegistration } = useReadContract({
    address: stakingAddress as `0x${string}`,
    abi: STAKING_CONTRACT_ABI,
    functionName: "isRegistered",
    args: address ? [address] : undefined,
  })

  const registerWallet = () => {
    if (!stakingAddress) return

    writeContract({
      address: stakingAddress as `0x${string}`,
      abi: STAKING_CONTRACT_ABI,
      functionName: "registerWallet",
    })
  }

  const stake = (amount: string) => {
    if (!stakingAddress) return

    writeContract({
      address: stakingAddress as `0x${string}`,
      abi: STAKING_CONTRACT_ABI,
      functionName: "stake",
      args: [parseEther(amount)],
    })
  }

  const unstake = (amount: string) => {
    if (!stakingAddress) return

    writeContract({
      address: stakingAddress as `0x${string}`,
      abi: STAKING_CONTRACT_ABI,
      functionName: "unstake",
      args: [parseEther(amount)],
    })
  }

  const claimRewards = () => {
    if (!stakingAddress) return

    writeContract({
      address: stakingAddress as `0x${string}`,
      abi: STAKING_CONTRACT_ABI,
      functionName: "claimRewards",
    })
  }

  return {
    stakedAmount: stakedAmount ? formatEther(stakedAmount as bigint) : "0",
    pendingRewards: pendingRewards ? formatEther(pendingRewards as bigint) : "0",
    isRegistered: Boolean(isRegistered),
    registerWallet,
    stake,
    unstake,
    claimRewards,
    isPending,
    isConfirming,
    isSuccess,
    refetchStaked,
    refetchRewards,
    refetchRegistration,
  }
}
