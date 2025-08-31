// Configuración de administrador
export const ADMIN_CONFIG = {
  // Código de acceso para administrador (cambiar según necesidad)
  ADMIN_CODE: "DYNOSUPER2024",
  
  // Configuración de niveles de regalías
  ROYALTY_LEVELS: {
    BRONZE: {
      name: "Bronze",
      minReferrals: 0,
      maxReferrals: 4,
      bonus: 0.5, // 0.5% bonus
      color: "text-yellow-600"
    },
    SILVER: {
      name: "Silver", 
      minReferrals: 5,
      maxReferrals: 24,
      bonus: 1.0, // 1% bonus
      color: "text-gray-400"
    },
    GOLD: {
      name: "Gold",
      minReferrals: 25,
      maxReferrals: 99,
      bonus: 2.0, // 2% bonus
      color: "text-yellow-500"
    },
    DIAMOND: {
      name: "Diamond",
      minReferrals: 100,
      maxReferrals: Infinity,
      bonus: 5.0, // 5% bonus
      color: "text-blue-500"
    }
  },

  // Configuración de contratos (direcciones simuladas)
  CONTRACTS: {
    TOKEN: "0x3213F1cB65579bed21a246ab16A4bc2dC01d8E74", // DBT Token
    STAKING: "0x3213F1cB65579bed21a246ab16A4bc2dC01d8E74",
    ROYALTIES: "",
    TREASURY: "0xWalletA" // Wallet A para airdrops y recompensas
  },

  // Configuración de staking
  STAKING: {
    MIN_STAKE: 1, // 1 DBT mínimo
    MAX_STAKE: 1000000, // 1M DBT máximo
    WITHDRAWAL_FEE: 0.01, // 1% fee de retiro
    APY_BASE: 0.025, // 2.5% APY base
    APY_BONUS: 0.005 // 0.5% APY bonus por referidos
  },

  // Configuración de airdrops y recompensas
  REWARDS: {
    AIRDROP_AMOUNT: 1, // 1 DBT por airdrop
    REGISTRATION_REWARD: 10, // 10 DBT por registro
    WELCOME_BONUS: 1 // 1 DBT como bono de bienvenida
  }
}

// Función para obtener el nivel de regalías basado en el número de referidos
export function getRoyaltyLevel(referralCount: number) {
  for (const [key, level] of Object.entries(ADMIN_CONFIG.ROYALTY_LEVELS)) {
    if (referralCount >= level.minReferrals && referralCount <= level.maxReferrals) {
      return level
    }
  }
  return ADMIN_CONFIG.ROYALTY_LEVELS.BRONZE
}

// Función para calcular el bonus de APY basado en el nivel
export function calculateAPYBonus(referralCount: number) {
  const level = getRoyaltyLevel(referralCount)
  return ADMIN_CONFIG.STAKING.APY_BASE + (level.bonus * 0.001) // Convertir % a decimal
}
