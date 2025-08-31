"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { 
  Coins, 
  TrendingUp, 
  Gift, 
  Users, 
  Zap, 
  Heart,
  Star,
  Crown,
  Target,
  Award
} from "lucide-react"
import { useStaking } from "@/hooks/use-staking"
import { useDStakeToken } from "@/hooks/use-dstake-token"
import { useWallet } from "@/hooks/use-wallet"
import { ADMIN_CONFIG } from "@/lib/admin-config"

export function UserDashboard() {
  const { isConnected } = useWallet()
  const { balance } = useDStakeToken()
  const { stakedAmount, pendingRewards, isRegistered, registerWallet, stake, unstake, claimRewards, isPending } =
    useStaking()

  const [stakeAmount, setStakeAmount] = useState("")
  const [unstakeAmount, setUnstakeAmount] = useState("")
  const [referralCode, setReferralCode] = useState("")

  // Simulación de datos del protocolo de regalías
  const [royaltyLevel, setRoyaltyLevel] = useState("Bronze")
  const [referralCount, setReferralCount] = useState(12)
  const [totalEarned, setTotalEarned] = useState(1250.50)
  const [pendingRoyalties, setPendingRoyalties] = useState(89.75)
  
  // Estados para airdrop y recompensas de registro
  const [hasClaimedAirdrop, setHasClaimedAirdrop] = useState(false)
  const [hasClaimedRegistrationReward, setHasClaimedRegistrationReward] = useState(false)
  const [isClaimingAirdrop, setIsClaimingAirdrop] = useState(false)
  const [isClaimingRegistrationReward, setIsClaimingRegistrationReward] = useState(false)

  if (!isConnected) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle>Conecta tu Wallet</CardTitle>
          <CardDescription>Por favor conecta tu wallet para acceder al dashboard de usuario</CardDescription>
        </CardHeader>
      </Card>
    )
  }

  const handleReferralSubmit = () => {
    // Simular envío de código de referido
    if (referralCode.trim()) {
      setReferralCount(prev => prev + 1)
      setReferralCode("")
    }
  }

  const claimRoyalties = () => {
    // Simular claim de regalías
    setTotalEarned(prev => prev + pendingRoyalties)
    setPendingRoyalties(0)
  }

  const claimAirdrop = async () => {
    setIsClaimingAirdrop(true)
    // Simular transacción de claim airdrop
    await new Promise(resolve => setTimeout(resolve, 2000))
    setHasClaimedAirdrop(true)
    setIsClaimingAirdrop(false)
  }

  const claimRegistrationReward = async () => {
    setIsClaimingRegistrationReward(true)
    // Simular transacción de claim recompensa de registro
    await new Promise(resolve => setTimeout(resolve, 2000))
    setHasClaimedRegistrationReward(true)
    setIsClaimingRegistrationReward(false)
  }

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Dashboard de Usuario</h2>
        <p className="text-muted-foreground">
          Staking, protocolo de regalías y gestión de tu portfolio
        </p>
      </div>

      {/* Registration Card */}
      {!isRegistered && (
        <Card className="border-emerald-200 bg-emerald-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gift className="h-5 w-5 text-emerald-600" />
              ¡Bono de Bienvenida Disponible!
            </CardTitle>
            <CardDescription>Registra tu wallet para recibir {ADMIN_CONFIG.REWARDS.WELCOME_BONUS} DBT como bono de bienvenida</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={registerWallet} disabled={isPending} className="bg-emerald-600 hover:bg-emerald-700">
              {isPending ? "Registrando..." : "Registrar Wallet & Reclamar Bono"}
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Airdrop & Registration Rewards Cards */}
      {isRegistered && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Airdrop Card */}
          <Card className={`border-2 ${hasClaimedAirdrop ? 'border-green-200 bg-green-50' : 'border-blue-200 bg-blue-50'}`}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-blue-600" />
                Airdrop DBT
              </CardTitle>
              <CardDescription>
                {hasClaimedAirdrop 
                  ? `Ya reclamaste tu airdrop de ${ADMIN_CONFIG.REWARDS.AIRDROP_AMOUNT} DBT` 
                  : `Reclama ${ADMIN_CONFIG.REWARDS.AIRDROP_AMOUNT} DBT desde la tesorería (Wallet A)`
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              {hasClaimedAirdrop ? (
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">✓ Reclamado</div>
                  <p className="text-sm text-muted-foreground">{ADMIN_CONFIG.REWARDS.AIRDROP_AMOUNT} DBT recibidos</p>
                </div>
              ) : (
                <Button 
                  onClick={claimAirdrop} 
                  disabled={isClaimingAirdrop}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  {isClaimingAirdrop ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Reclamando...
                    </>
                  ) : (
                    <>
                      <Zap className="mr-2 h-4 w-4" />
                      Reclamar Airdrop ({ADMIN_CONFIG.REWARDS.AIRDROP_AMOUNT} DBT)
                    </>
                  )}
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Registration Reward Card */}
          <Card className={`border-2 ${hasClaimedRegistrationReward ? 'border-green-200 bg-green-50' : 'border-purple-200 bg-purple-50'}`}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-purple-600" />
                Recompensa de Registro
              </CardTitle>
              <CardDescription>
                {hasClaimedRegistrationReward 
                  ? `Ya reclamaste tu recompensa de registro` 
                  : `Reclama ${ADMIN_CONFIG.REWARDS.REGISTRATION_REWARD} DBT desde la tesorería (Wallet A)`
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              {hasClaimedRegistrationReward ? (
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">✓ Reclamado</div>
                  <p className="text-sm text-muted-foreground">{ADMIN_CONFIG.REWARDS.REGISTRATION_REWARD} DBT recibidos</p>
                </div>
              ) : (
                <Button 
                  onClick={claimRegistrationReward} 
                  disabled={isClaimingRegistrationReward}
                  className="w-full bg-purple-600 hover:bg-purple-700"
                >
                  {isClaimingRegistrationReward ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Reclamando...
                    </>
                  ) : (
                    <>
                      <Award className="mr-2 h-4 w-4" />
                      Reclamar Recompensa ({ADMIN_CONFIG.REWARDS.REGISTRATION_REWARD} DBT)
                    </>
                  )}
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      )}

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Balance DBT</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Number.parseFloat(balance).toFixed(4)}</div>
            <p className="text-xs text-muted-foreground">Disponible para staking</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Cantidad Staked</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Number.parseFloat(stakedAmount).toFixed(4)}</div>
            <p className="text-xs text-muted-foreground">Ganando recompensas</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Recompensas Pendientes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-600">{Number.parseFloat(pendingRewards).toFixed(6)}</div>
            <p className="text-xs text-muted-foreground">Listas para reclamar</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Nivel de Regalías</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">{royaltyLevel}</div>
            <p className="text-xs text-muted-foreground">Protocolo de referidos</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Staking Section */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Coins className="h-5 w-5" />
                Staking de Tokens
              </CardTitle>
              <CardDescription>Stakea tus DBT tokens para ganar recompensas diarias</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="stake-amount">Cantidad a Stake</Label>
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
                {isPending ? "Stakeando..." : "Stakear Tokens"}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Unstake de Tokens
              </CardTitle>
              <CardDescription>Unstakea tus DBT tokens (1% de fee de retiro aplica)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="unstake-amount">Cantidad a Unstake</Label>
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
                {isPending ? "Unstakeando..." : "Unstakear Tokens"}
              </Button>
            </CardContent>
          </Card>

          {/* Claim Rewards */}
          {Number.parseFloat(pendingRewards) > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Reclamar Recompensas</CardTitle>
                <CardDescription>
                  Tienes {Number.parseFloat(pendingRewards).toFixed(6)} DBT tokens listos para reclamar
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={claimRewards} disabled={isPending} className="bg-emerald-600 hover:bg-emerald-700">
                  {isPending ? "Reclamando..." : "Reclamar Recompensas"}
                </Button>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Royalty Protocol Section */}
        <div className="space-y-6">
          <Card className="border-purple-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-700">
                <Crown className="h-5 w-5" />
                Protocolo de Regalías
              </CardTitle>
              <CardDescription>Gana regalías por referir usuarios al protocolo</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Nivel Actual:</span>
                  <div className="font-semibold flex items-center gap-2">
                    {royaltyLevel === "Bronze" && <Star className="h-4 w-4 text-yellow-600" />}
                    {royaltyLevel === "Silver" && <Star className="h-4 w-4 text-gray-400" />}
                    {royaltyLevel === "Gold" && <Star className="h-4 w-4 text-yellow-500" />}
                    {royaltyLevel === "Diamond" && <Diamond className="h-4 w-4 text-blue-500" />}
                    {royaltyLevel}
                  </div>
                </div>
                <div>
                  <span className="text-muted-foreground">Referidos:</span>
                  <div className="font-semibold">{referralCount}</div>
                </div>
                <div>
                  <span className="text-muted-foreground">Total Ganado:</span>
                  <div className="font-semibold text-green-600">{totalEarned.toFixed(2)} DBT</div>
                </div>
                <div>
                  <span className="text-muted-foreground">Pendiente:</span>
                  <div className="font-semibold text-orange-600">{pendingRoyalties.toFixed(2)} DBT</div>
                </div>
              </div>

              <Button 
                onClick={claimRoyalties} 
                disabled={pendingRoyalties <= 0}
                className="w-full bg-purple-600 hover:bg-purple-700"
              >
                <Award className="mr-2 h-4 w-4" />
                Reclamar Regalías
              </Button>
            </CardContent>
          </Card>

          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-700">
                <Users className="h-5 w-5" />
                Programa de Referidos
              </CardTitle>
              <CardDescription>Invita amigos y gana regalías por cada referido</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="referral-code">Tu Código de Referido</Label>
                <div className="flex gap-2">
                  <Input
                    id="referral-code"
                    value="DYNOREF123"
                    readOnly
                    className="font-mono"
                  />
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => navigator.clipboard.writeText("DYNOREF123")}
                  >
                    Copiar
                  </Button>
                </div>
              </div>

              <div>
                <Label htmlFor="referral-submit">Código de Referido de Amigo</Label>
                <div className="flex gap-2">
                  <Input
                    id="referral-submit"
                    placeholder="Ingresa código de amigo"
                    value={referralCode}
                    onChange={(e) => setReferralCode(e.target.value)}
                  />
                  <Button 
                    onClick={handleReferralSubmit}
                    disabled={!referralCode.trim()}
                    size="sm"
                  >
                    <Heart className="mr-1 h-3 w-3" />
                    Aplicar
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700">
                <Target className="h-5 w-5" />
                Metas de Nivel
              </CardTitle>
              <CardDescription>Progreso hacia el siguiente nivel de regalías</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Bronze → Silver</span>
                  <span className="font-semibold">5 referidos</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: `${Math.min((referralCount / 5) * 100, 100)}%` }}></div>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Silver → Gold</span>
                  <span className="font-semibold">25 referidos</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: `${Math.min((referralCount / 25) * 100, 100)}%` }}></div>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Gold → Diamond</span>
                  <span className="font-semibold">100 referidos</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: `${Math.min((referralCount / 100) * 100, 100)}%` }}></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

// Componente Diamond para el nivel Diamond
function Diamond({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
    </svg>
  )
}

