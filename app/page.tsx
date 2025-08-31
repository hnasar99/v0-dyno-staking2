"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, TrendingUp, Heart, Users, Zap, Globe, ChevronRight } from "lucide-react"
import { BackgroundVideo } from "@/components/background-video"
import { WalletConnectButton } from "@/components/web3/wallet-connect-button"
import { StakingDashboard } from "@/components/web3/staking-dashboard"
import { RoleSelector } from "@/components/auth/role-selector"
import { AdminDashboard } from "@/components/admin/admin-dashboard"
import { UserDashboard } from "@/components/user/user-dashboard"

export default function DynoSocialLanding() {
  const [userRole, setUserRole] = useState<"user" | "admin" | null>(null)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">D</span>
            </div>
            <span className="font-bold text-xl">Dyno Staking</span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#staking" className="text-muted-foreground hover:text-foreground transition-colors">
              Staking
            </a>
            <a href="#dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
              Dashboard
            </a>
            <a href="#roadmap" className="text-muted-foreground hover:text-foreground transition-colors">
              Roadmap
            </a>
          </nav>

          <WalletConnectButton />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <BackgroundVideo />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
        </div>

        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <Badge variant="secondary" className="mb-4">
            Built on Base Network
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            <span className="text-primary">DeFi Made Simple</span> for Everyone
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            Earn 2-3% monthly returns on stable DStake tokens without the complexity. No crypto expertise required -
            just simple, accessible DeFi earnings for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90"
              onClick={() => document.getElementById("dashboard")?.scrollIntoView({ behavior: "smooth" })}
            >
              Acceder al Dashboard <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("staking")?.scrollIntoView({ behavior: "smooth" })}
            >
              Cómo Funciona
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">2-3%</div>
              <div className="text-muted-foreground">Monthly Returns</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">1:1</div>
              <div className="text-muted-foreground">USDC Peg</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100M</div>
              <div className="text-muted-foreground">Max DStake Supply</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">DeFi Without the Complexity</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Making DeFi earnings accessible to everyone, regardless of crypto experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Simple & Secure</CardTitle>
                <CardDescription>
                  No complex DeFi knowledge needed. Just connect your wallet and start earning with bank-grade security
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Consistent Returns</CardTitle>
                <CardDescription>
                  Earn predictable 2-3% monthly returns with daily distributions - no market timing or trading skills
                  required
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Accessible to All</CardTitle>
                <CardDescription>
                  Democratizing DeFi earnings for everyone - from crypto beginners to experienced users
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Staking Section */}
      <section id="staking" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Simple & Rewarding Staking</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our streamlined staking mechanism makes it easy to earn consistent returns while democratizing access to
                DeFi.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-semibold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Connect Your Wallet</h3>
                    <p className="text-muted-foreground">
                      Connect MetaMask or any Web3 wallet to get started - receive 1 DStake token as welcome bonus
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-semibold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Mint DStake Tokens</h3>
                    <p className="text-muted-foreground">
                      Mint DStake tokens from the 100M total supply, pegged 1:1 to USDC for stability
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-semibold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Stake & Earn Daily</h3>
                    <p className="text-muted-foreground">
                      Stake your tokens and earn 2-3% monthly returns with daily distributions automatically
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl">Staking Calculator</CardTitle>
                <CardDescription>Estimate your potential returns</CardDescription>
              </CardHeader>
              <CardContent className="p-0 space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Stake Amount (DStake)</label>
                  <div className="relative">
                    <input type="number" placeholder="10,000" className="w-full p-3 border rounded-lg bg-background" />
                  </div>
                </div>

                <div className="space-y-3 p-4 bg-muted/50 rounded-lg">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monthly Return (2.5%)</span>
                    <span className="font-semibold">250 DStake</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Annual Return</span>
                    <span className="font-semibold">3,000 DStake</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">With Reinvestment Bonus</span>
                    <span className="font-semibold text-primary">3,100 DStake</span>
                  </div>
                </div>

                <Button
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={() => document.getElementById("dashboard")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Comenzar Staking
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="dashboard" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Dashboard</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Selecciona tu rol para acceder al dashboard correspondiente
            </p>
          </div>

          {/* Role Selector */}
          <div className="mb-12">
            <RoleSelector onRoleSelect={setUserRole} currentRole={userRole} />
          </div>

          {/* Dashboard based on role */}
          {userRole === "admin" && <AdminDashboard />}
          {userRole === "user" && <UserDashboard />}
          {!userRole && (
            <Card className="w-full max-w-2xl mx-auto">
              <CardHeader className="text-center">
                <CardTitle>Bienvenido a Dyno Staking</CardTitle>
                <CardDescription>
                  Selecciona tu rol arriba para acceder a las funcionalidades correspondientes
                </CardDescription>
              </CardHeader>
            </Card>
          )}
        </div>
      </section>

      {/* Updated Social Impact Section to focus on accessibility */}
      <section id="social" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Growing Together</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Our mission is simple: make DeFi earnings accessible to everyone. By removing complexity and barriers, we're
            creating opportunities for people who were previously excluded from decentralized finance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">No Barriers</h3>
              <p className="text-sm text-muted-foreground">Open to everyone regardless of crypto experience</p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Simple Interface</h3>
              <p className="text-sm text-muted-foreground">User-friendly design that anyone can understand</p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Global Access</h3>
              <p className="text-sm text-muted-foreground">Available worldwide with minimal requirements</p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Inclusive Growth</h3>
              <p className="text-sm text-muted-foreground">Building wealth opportunities for everyone</p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Development Roadmap</h2>
            <p className="text-xl text-muted-foreground">Our journey to revolutionize DeFi with social impact</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="relative">
              <CardHeader>
                <Badge className="w-fit mb-2">Phase 1</Badge>
                <CardTitle className="text-lg">Conceptualization</CardTitle>
                <CardDescription>Architecture design and tokenomics planning</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Smart contract design</li>
                  <li>• Tokenomics structure</li>
                  <li>• Technical architecture</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader>
                <Badge className="w-fit mb-2">Phase 2</Badge>
                <CardTitle className="text-lg">Development</CardTitle>
                <CardDescription>Smart contracts and frontend implementation</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Solidity development</li>
                  <li>• Frontend dApp</li>
                  <li>• Testnet deployment</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader>
                <Badge className="w-fit mb-2">Phase 3</Badge>
                <CardTitle className="text-lg">Security & Launch</CardTitle>
                <CardDescription>Auditing and mainnet deployment</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Security audit</li>
                  <li>• Mainnet deployment</li>
                  <li>• Public launch</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader>
                <Badge className="w-fit mb-2">Phase 4</Badge>
                <CardTitle className="text-lg">Growth & DAO</CardTitle>
                <CardDescription>Community building and decentralized governance</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Community growth</li>
                  <li>• DAO governance</li>
                  <li>• Platform expansion</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your DeFi Journey Today</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands discovering how simple DeFi can be. No complex strategies, no market timing - just steady,
            accessible earnings with DStake tokens.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              onClick={() => document.getElementById("dashboard")?.scrollIntoView({ behavior: "smooth" })}
            >
              Comenzar <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              onClick={() => document.getElementById("staking")?.scrollIntoView({ behavior: "smooth" })}
            >
              Saber Más
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">D</span>
                </div>
                <span className="font-bold text-xl">Dyno Social</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Decentralized staking platform with social impact on Base network.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#staking" className="hover:text-foreground transition-colors">
                    Staking
                  </a>
                </li>
                <li>
                  <a href="#dashboard" className="hover:text-foreground transition-colors">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Analytics
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Whitepaper
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Audit Report
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Telegram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Dyno Social. Built on Base Network. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
