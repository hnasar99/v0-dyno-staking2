"use client"

import { useReadContract, useWriteContract, useWaitForTransactionReceipt } from "wagmi"
import { parseEther, formatEther } from "viem"
import { useChainId } from "wagmi"
import { CONTRACT_ADDRESSES, type ChainId } from "@/contracts/addresses"
import { DSTAKE_TOKEN_ABI } from "@/contracts/abis/dstake-token"

export function useDStakeToken() {
  const chainId = useChainId() as ChainId
  const tokenAddress = CONTRACT_ADDRESSES[chainId]?.DSTAKE_TOKEN

  const { writeContract, data: hash, isPending } = useWriteContract()
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
    hash,
  })

  // Read token balance
  const { data: balance, refetch: refetchBalance } = useReadContract({
    address: tokenAddress as `0x${string}`,
    abi: DSTAKE_TOKEN_ABI,
    functionName: "balanceOf",
    args: [],
  })

  // Read total supply
  const { data: totalSupply } = useReadContract({
    address: tokenAddress as `0x${string}`,
    abi: DSTAKE_TOKEN_ABI,
    functionName: "totalSupply",
  })

  const mintInitialSupply = () => {
    if (!tokenAddress) return

    writeContract({
      address: tokenAddress as `0x${string}`,
      abi: DSTAKE_TOKEN_ABI,
      functionName: "mintInitialSupply",
    })
  }

  const mintTokens = (to: string, amount: string) => {
    if (!tokenAddress) return

    writeContract({
      address: tokenAddress as `0x${string}`,
      abi: DSTAKE_TOKEN_ABI,
      functionName: "mint",
      args: [to as `0x${string}`, parseEther(amount)],
    })
  }

  return {
    balance: balance ? formatEther(balance as bigint) : "0",
    totalSupply: totalSupply ? formatEther(totalSupply as bigint) : "0",
    mintInitialSupply,
    mintTokens,
    isPending,
    isConfirming,
    isSuccess,
    refetchBalance,
  }
}
