# Dyno Staking Platform

Una plataforma de staking DeFi con sistema de roles diferenciados para administradores y usuarios, construida en Next.js con integración Web3.

## 🚀 Características Principales

### 🔐 Sistema de Roles
- **Modo Administrador**: Acceso completo a gestión de contratos y administración del protocolo
- **Modo Usuario**: Acceso a staking y protocolo de regalías por referidos

### 🎯 Funcionalidades por Rol

#### 👑 Administrador
- Gestión del contrato de token DStake
- Control del contrato de staking
- Distribución de recompensas
- Controles de emergencia
- Actualización de parámetros del protocolo
- Auditoría y migración de datos

#### 👤 Usuario
- Staking de tokens DStake
- Protocolo de regalías por referidos
- Sistema de niveles (Bronze, Silver, Gold, Diamond)
- Programa de referidos
- Claim de recompensas

## 🛠️ Instalación

1. **Clonar el repositorio**
```bash
git clone <repository-url>
cd v0-dyno-staking2
```

2. **Instalar dependencias**
```bash
npm install
# o
pnpm install
```

3. **Ejecutar en desarrollo**
```bash
npm run dev
# o
pnpm run dev
```

## 🔑 Acceso al Sistema

### Código de Administrador
El código de acceso para administrador está configurado en `lib/admin-config.ts`:

```typescript
export const ADMIN_CONFIG = {
  ADMIN_CODE: "DYNOSUPER2024", // Cambiar según necesidad
  // ... otras configuraciones
}
```

**⚠️ IMPORTANTE**: Cambia este código en producción por seguridad.

### Cómo Acceder

1. **Como Usuario**: Simplemente haz clic en "Acceder como Usuario"
2. **Como Administrador**: 
   - Haz clic en "Acceder como Administrador"
   - Ingresa el código: `DYNOSUPER2024`
   - Haz clic en "Verificar"

## 🏗️ Estructura del Proyecto

```
├── app/                    # Páginas de Next.js
├── components/            # Componentes React
│   ├── auth/             # Autenticación y selección de roles
│   ├── admin/            # Dashboard de administrador
│   ├── user/             # Dashboard de usuario
│   ├── web3/             # Componentes Web3
│   └── ui/               # Componentes de UI base
├── hooks/                 # Hooks personalizados
├── lib/                   # Utilidades y configuración
├── contracts/             # ABIs y direcciones de contratos
└── providers/             # Proveedores de contexto
```

## 🎨 Componentes Principales

### RoleSelector
Selector de roles con autenticación para administrador.

### AdminDashboard
Panel completo de administración con:
- Estado del sistema
- Gestión de contratos de token
- Gestión de contratos de staking
- Controles avanzados

### UserDashboard
Panel de usuario con:
- Staking de tokens
- Protocolo de regalías
- Programa de referidos
- Metas de nivel

## ⚙️ Configuración

### Niveles de Regalías
```typescript
ROYALTY_LEVELS: {
  BRONZE: { minReferrals: 0, maxReferrals: 4, bonus: 0.5 },
  SILVER: { minReferrals: 5, maxReferrals: 24, bonus: 1.0 },
  GOLD: { minReferrals: 25, maxReferrals: 99, bonus: 2.0 },
  DIAMOND: { minReferrals: 100, maxReferrals: Infinity, bonus: 5.0 }
}
```

### Parámetros de Staking
```typescript
STAKING: {
  MIN_STAKE: 1,           // 1 DSTAKE mínimo
  MAX_STAKE: 1000000,     // 1M DSTAKE máximo
  WITHDRAWAL_FEE: 0.01,   // 1% fee de retiro
  APY_BASE: 0.025,        // 2.5% APY base
  APY_BONUS: 0.005        // 0.5% APY bonus por referidos
}
```

## 🔒 Seguridad

- **Código de administrador**: Cambiar en producción
- **Validación de roles**: Implementada en el frontend
- **Contratos**: Integración con contratos inteligentes en Base Network

## 🚀 Despliegue

1. **Build de producción**
```bash
npm run build
```

2. **Iniciar servidor**
```bash
npm start
```

## 📱 Tecnologías Utilizadas

- **Frontend**: Next.js 15, React 19, TypeScript
- **UI**: Tailwind CSS, Radix UI
- **Web3**: Wagmi, Viem
- **Blockchain**: Base Network
- **Estilo**: Lucide React Icons

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 🆘 Soporte

Para soporte técnico o preguntas sobre el sistema:
- Abre un issue en GitHub
- Contacta al equipo de desarrollo

---

**Desarrollado con ❤️ para la comunidad DeFi**