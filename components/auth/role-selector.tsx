"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Shield, User, Lock, Key } from "lucide-react"
import { ADMIN_CONFIG } from "@/lib/admin-config"

type UserRole = "user" | "admin" | null

interface RoleSelectorProps {
  onRoleSelect: (role: UserRole) => void
  currentRole: UserRole
}

export function RoleSelector({ onRoleSelect, currentRole }: RoleSelectorProps) {
  const [adminCode, setAdminCode] = useState("")
  const [showAdminForm, setShowAdminForm] = useState(false)
  const [error, setError] = useState("")

  const ADMIN_CODE = ADMIN_CONFIG.ADMIN_CODE

  const handleAdminLogin = () => {
    if (adminCode === ADMIN_CODE) {
      onRoleSelect("admin")
      setError("")
      setAdminCode("")
    } else {
      setError("Código de administrador incorrecto")
    }
  }

  const handleUserLogin = () => {
    onRoleSelect("user")
  }

  const handleLogout = () => {
    onRoleSelect(null)
    setShowAdminForm(false)
    setAdminCode("")
    setError("")
  }

  if (currentRole) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2">
            {currentRole === "admin" ? (
              <>
                <Shield className="h-5 w-5 text-red-600" />
                Modo Administrador
              </>
            ) : (
              <>
                <User className="h-5 w-5 text-blue-600" />
                Modo Usuario
              </>
            )}
          </CardTitle>
          <CardDescription>
            {currentRole === "admin" 
              ? "Acceso completo a gestión de contratos y administración" 
              : "Acceso a staking y protocolo de regalías"
            }
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <Button onClick={handleLogout} variant="outline" className="w-full">
            Cambiar Rol
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle>Seleccionar Rol</CardTitle>
        <CardDescription>Elige tu rol para acceder a la plataforma</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* User Role Button */}
        <Button 
          onClick={handleUserLogin} 
          className="w-full bg-blue-600 hover:bg-blue-700"
        >
          <User className="mr-2 h-4 w-4" />
          Acceder como Usuario
        </Button>

        {/* Admin Role Button */}
        <Button 
          onClick={() => setShowAdminForm(true)} 
          variant="outline" 
          className="w-full"
        >
          <Shield className="mr-2 h-4 w-4" />
          Acceder como Administrador
        </Button>

        {/* Admin Code Form */}
        {showAdminForm && (
          <div className="space-y-3 pt-4 border-t">
            <div>
              <Label htmlFor="admin-code">Código de Administrador</Label>
              <div className="relative">
                <Input
                  id="admin-code"
                  type="password"
                  placeholder="Ingresa el código"
                  value={adminCode}
                  onChange={(e) => setAdminCode(e.target.value)}
                  className="pr-10"
                />
                <Key className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
            </div>
            
            {error && (
              <p className="text-sm text-red-600">{error}</p>
            )}

            <div className="flex gap-2">
              <Button 
                onClick={handleAdminLogin} 
                className="flex-1 bg-red-600 hover:bg-red-700"
              >
                <Lock className="mr-2 h-4 w-4" />
                Verificar
              </Button>
              <Button 
                onClick={() => setShowAdminForm(false)} 
                variant="outline"
              >
                Cancelar
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
