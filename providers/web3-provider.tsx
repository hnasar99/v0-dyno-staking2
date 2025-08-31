"use client"

import { createContext, useContext, type ReactNode } from "react"
import { WagmiProvider } from "wagmi"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { config } from "@/lib/wagmi-config"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
})

type Web3ContextType = {}

const Web3Context = createContext<Web3ContextType>({})

export function Web3Provider({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Web3Context.Provider value={{}}>{children}</Web3Context.Provider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export const useWeb3 = () => useContext(Web3Context)
