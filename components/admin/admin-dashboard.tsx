"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Shield, 
  Coins, 
  Lock, 
  Settings, 
  TrendingUp, 
  Users, 
  Database, 
  Zap,
  AlertTriangle,
  CheckCircle,
  Clock
} from "lucide-react"

export function AdminDashboard() {
  const [isProcessing, setIsProcessing] = useState(false)
  const [lastAction, setLastAction] = useState<string | null>(null)

  const handleAction = async (action: string, actionName: string) => {
    setIsProcessing(true)
    setLastAction(actionName)
    
    // Simular procesamiento
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsProcessing(false)
    setLastAction(null)
  }

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Panel de Administración</h2>
        <p className="text-muted-foreground">
          Gestión completa de contratos y configuración del protocolo
        </p>
      </div>

      {/* Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              Estado del Sistema
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">Operativo</div>
            <p className="text-xs text-muted-foreground">Todos los contratos activos</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Coins className="h-4 w-4 text-blue-600" />
              Total Staked
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,450,000</div>
            <p className="text-xs text-muted-foreground">DStake tokens</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Users className="h-4 w-4 text-purple-600" />
              Usuarios Activos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground">Wallets conectadas</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-emerald-600" />
              APY Promedio
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.8%</div>
            <p className="text-xs text-muted-foreground">Retorno mensual</p>
          </CardContent>
        </Card>
      </div>

      {/* Contract Management */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Token Contract Management */}
        <Card className="border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-700">
              <Coins className="h-5 w-5" />
              Gestión del Contrato de Token
            </CardTitle>
            <CardDescription>
              Administra el contrato DStake Token (DSTAKE)
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Dirección del Contrato:</span>
                <Badge variant="secondary" className="font-mono text-xs">
                  0x1234...5678
                </Badge>
              </div>
              <div className="flex justify-between text-sm">
                <span>Supply Total:</span>
                <span className="font-semibold">100,000,000 DSTAKE</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Circulación:</span>
                <span className="font-semibold">45,200,000 DSTAKE</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <Button 
                onClick={() => handleAction("mint", "Mint Tokens")}
                disabled={isProcessing}
                className="bg-blue-600 hover:bg-blue-700"
                size="sm"
              >
                <Zap className="mr-1 h-3 w-3" />
                Mint Tokens
              </Button>
              <Button 
                onClick={() => handleAction("burn", "Burn Tokens")}
                disabled={isProcessing}
                variant="outline"
                size="sm"
              >
                <AlertTriangle className="mr-1 h-3 w-3" />
                Burn Tokens
              </Button>
              <Button 
                onClick={() => handleAction("pause", "Pausar Contrato")}
                disabled={isProcessing}
                variant="outline"
                size="sm"
              >
                <Clock className="mr-1 h-3 w-3" />
                Pausar
              </Button>
              <Button 
                onClick={() => handleAction("unpause", "Reanudar Contrato")}
                disabled={isProcessing}
                variant="outline"
                size="sm"
              >
                <CheckCircle className="mr-1 h-3 w-3" />
                Reanudar
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Staking Contract Management */}
        <Card className="border-emerald-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-emerald-700">
              <Lock className="h-5 w-5" />
              Gestión del Contrato de Staking
            </CardTitle>
            <CardDescription>
              Administra el protocolo de staking y recompensas
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Dirección del Contrato:</span>
                <Badge variant="secondary" className="font-mono text-xs">
                  0x8765...4321
                </Badge>
              </div>
              <div className="flex justify-between text-sm">
                <span>Total Staked:</span>
                <span className="font-semibold">2,450,000 DSTAKE</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Recompensas Pendientes:</span>
                <span className="font-semibold">67,500 DSTAKE</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <Button 
                onClick={() => handleAction("distribute", "Distribuir Recompensas")}
                disabled={isProcessing}
                className="bg-emerald-600 hover:bg-emerald-700"
                size="sm"
              >
                <TrendingUp className="mr-1 h-3 w-3" />
                Distribuir
              </Button>
              <Button 
                onClick={() => handleAction("emergency", "Pausa de Emergencia")}
                disabled={isProcessing}
                variant="outline"
                size="sm"
                className="border-red-200 text-red-700 hover:bg-red-50"
              >
                <AlertTriangle className="mr-1 h-3 w-3" />
                Emergencia
              </Button>
              <Button 
                onClick={() => handleAction("updateAPY", "Actualizar APY")}
                disabled={isProcessing}
                variant="outline"
                size="sm"
              >
                <Settings className="mr-1 h-3 w-3" />
                Actualizar APY
              </Button>
              <Button 
                onClick={() => handleAction("withdrawFees", "Retirar Fees")}
                disabled={isProcessing}
                variant="outline"
                size="sm"
              >
                <Database className="mr-1 h-3 w-3" />
                Retirar Fees
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Advanced Controls */}
      <Card className="border-orange-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-orange-700">
            <Settings className="h-5 w-5" />
            Controles Avanzados
          </CardTitle>
          <CardDescription>
            Funciones administrativas avanzadas del protocolo
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Button 
              onClick={() => handleAction("upgrade", "Upgrade Contratos")}
              disabled={isProcessing}
              variant="outline"
              className="border-orange-200 text-orange-700 hover:bg-orange-50"
            >
              <Database className="mr-2 h-4 w-4" />
              Upgrade Contratos
            </Button>
            <Button 
              onClick={() => handleAction("migrate", "Migrar Datos")}
              disabled={isProcessing}
              variant="outline"
              className="border-purple-200 text-purple-700 hover:bg-purple-50"
            >
              <Zap className="mr-2 h-4 w-4" />
              Migrar Datos
            </Button>
            <Button 
              onClick={() => handleAction("audit", "Auditoría")}
              disabled={isProcessing}
              variant="outline"
              className="border-blue-200 text-blue-700 hover:bg-blue-50"
            >
              <Shield className="mr-2 h-4 w-4" />
              Auditoría
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Processing Status */}
      {isProcessing && (
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="pt-6">
            <div className="flex items-center justify-center gap-3">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
              <span className="text-blue-700">
                Procesando: {lastAction}...
              </span>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
