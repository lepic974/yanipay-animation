// Mock data for YaniPay application

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'PARTICULIER' | 'PROFESSIONNEL' | 'EMPLOYE' | 'ADMIN';
  createdAt: Date;
  image?: string;
}

export interface Wallet {
  id: string;
  userId: string;
  type: 'EUROS' | 'EUROS_SAVINGS' | 'YANI_COIN' | 'BITCOIN';
  balance: number;
  isActive: boolean;
  createdAt: Date;
}

export interface Transaction {
  id: string;
  senderId?: string;
  receiverId?: string;
  senderWalletId?: string;
  receiverWalletId?: string;
  amount: number;
  type: 'DEPOSIT' | 'WITHDRAWAL' | 'TRANSFER_OUT' | 'TRANSFER_IN' | 'PAYMENT' | 'LOYALTY_REWARD' | 'CONVERSION';
  status: 'PENDING' | 'COMPLETED' | 'FAILED' | 'CANCELLED';
  description?: string;
  reference?: string;
  fees?: number;
  createdAt: Date;
}

export interface Business {
  id: string;
  userId: string;
  name: string;
  description?: string;
  website?: string;
  phone?: string;
  address?: string;
  siret?: string;
  isVerified: boolean;
  createdAt: Date;
}

export interface LoyaltyProgram {
  id: string;
  businessId: string;
  name: string;
  description?: string;
  pointsRatio: number; // Points earned per euro spent
  isActive: boolean;
  createdAt: Date;
}

export interface LoyaltyCard {
  id: string;
  userId: string;
  loyaltyProgramId: string;
  points: number;
  isActive: boolean;
  createdAt: Date;
}

// Mock data generators
export function generateMockUser(overrides?: Partial<User>): User {
  const defaultUser: User = {
    id: `user_${Math.random().toString(36).substr(2, 9)}`,
    name: `Utilisateur ${Math.floor(Math.random() * 1000)}`,
    email: `user${Math.floor(Math.random() * 1000)}@example.com`,
    role: 'PARTICULIER',
    createdAt: new Date(),
  };
  
  return { ...defaultUser, ...overrides };
}

export function generateMockWallet(userId: string, overrides?: Partial<Wallet>): Wallet {
  const types: Wallet['type'][] = ['EUROS', 'EUROS_SAVINGS', 'YANI_COIN', 'BITCOIN'];
  const defaultWallet: Wallet = {
    id: `wallet_${Math.random().toString(36).substr(2, 9)}`,
    userId,
    type: types[Math.floor(Math.random() * types.length)],
    balance: Math.random() * 10000,
    isActive: true,
    createdAt: new Date(),
  };
  
  return { ...defaultWallet, ...overrides };
}

export function generateMockTransaction(overrides?: Partial<Transaction>): Transaction {
  const types: Transaction['type'][] = ['DEPOSIT', 'WITHDRAWAL', 'TRANSFER_OUT', 'TRANSFER_IN', 'PAYMENT', 'LOYALTY_REWARD', 'CONVERSION'];
  const statuses: Transaction['status'][] = ['PENDING', 'COMPLETED', 'FAILED', 'CANCELLED'];
  
  const defaultTransaction: Transaction = {
    id: `tx_${Math.random().toString(36).substr(2, 9)}`,
    amount: Math.random() * 1000,
    type: types[Math.floor(Math.random() * types.length)],
    status: statuses[Math.floor(Math.random() * statuses.length)],
    description: `Transaction ${Math.floor(Math.random() * 1000)}`,
    reference: `REF_${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
    fees: Math.random() * 10,
    createdAt: new Date(),
  };
  
  return { ...defaultTransaction, ...overrides };
}

export function generateMockBusiness(userId: string, overrides?: Partial<Business>): Business {
  const businessNames = [
    'Café de la Place',
    'Boulangerie Martin',
    'Restaurant Le Gourmet',
    'Librairie du Centre',
    'Pharmacie Centrale',
    'Coiffeur Tendance',
    'Garage Auto Plus',
    'Fleuriste Belle Époque'
  ];
  
  const defaultBusiness: Business = {
    id: `business_${Math.random().toString(36).substr(2, 9)}`,
    userId,
    name: businessNames[Math.floor(Math.random() * businessNames.length)],
    description: 'Une entreprise partenaire de YaniPay',
    website: `https://example-business-${Math.floor(Math.random() * 1000)}.com`,
    phone: `+33 ${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)} ${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)} ${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)} ${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
    address: `${Math.floor(Math.random() * 200)} Rue de la République, 75001 Paris`,
    siret: `${Math.floor(Math.random() * 900000000) + 100000000}${Math.floor(Math.random() * 90000) + 10000}`,
    isVerified: Math.random() > 0.3,
    createdAt: new Date(),
  };
  
  return { ...defaultBusiness, ...overrides };
}

export function generateMockLoyaltyProgram(businessId: string, overrides?: Partial<LoyaltyProgram>): LoyaltyProgram {
  const programNames = [
    'Points Fidélité',
    'Club VIP',
    'Récompenses Plus',
    'Avantages Premium',
    'Carte de Fidélité'
  ];
  
  const defaultProgram: LoyaltyProgram = {
    id: `loyalty_${Math.random().toString(36).substr(2, 9)}`,
    businessId,
    name: programNames[Math.floor(Math.random() * programNames.length)],
    description: 'Gagnez des points à chaque achat et bénéficiez de récompenses exclusives',
    pointsRatio: Math.floor(Math.random() * 10) + 1, // 1-10 points per euro
    isActive: true,
    createdAt: new Date(),
  };
  
  return { ...defaultProgram, ...overrides };
}

export function generateMockLoyaltyCard(userId: string, loyaltyProgramId: string, overrides?: Partial<LoyaltyCard>): LoyaltyCard {
  const defaultCard: LoyaltyCard = {
    id: `card_${Math.random().toString(36).substr(2, 9)}`,
    userId,
    loyaltyProgramId,
    points: Math.floor(Math.random() * 1000),
    isActive: true,
    createdAt: new Date(),
  };
  
  return { ...defaultCard, ...overrides };
}

// Complete mock dataset
export function generateMockDataset() {
  const users: User[] = [];
  const wallets: Wallet[] = [];
  const transactions: Transaction[] = [];
  const businesses: Business[] = [];
  const loyaltyPrograms: LoyaltyProgram[] = [];
  const loyaltyCards: LoyaltyCard[] = [];
  
  // Generate users
  for (let i = 0; i < 50; i++) {
    users.push(generateMockUser());
  }
  
  // Generate wallets for each user
  users.forEach(user => {
    // Each user gets 2-4 wallets
    const walletCount = Math.floor(Math.random() * 3) + 2;
    for (let i = 0; i < walletCount; i++) {
      wallets.push(generateMockWallet(user.id));
    }
  });
  
  // Generate transactions
  for (let i = 0; i < 200; i++) {
    const randomWallet = wallets[Math.floor(Math.random() * wallets.length)];
    transactions.push(generateMockTransaction({
      senderWalletId: randomWallet.id,
      senderId: randomWallet.userId,
    }));
  }
  
  // Generate businesses
  const businessUsers = users.slice(0, 20); // First 20 users are business owners
  businessUsers.forEach(user => {
    businesses.push(generateMockBusiness(user.id));
  });
  
  // Generate loyalty programs
  businesses.forEach(business => {
    loyaltyPrograms.push(generateMockLoyaltyProgram(business.id));
  });
  
  // Generate loyalty cards
  users.forEach(user => {
    // Each user gets 1-3 loyalty cards
    const cardCount = Math.floor(Math.random() * 3) + 1;
    for (let i = 0; i < cardCount; i++) {
      const randomProgram = loyaltyPrograms[Math.floor(Math.random() * loyaltyPrograms.length)];
      loyaltyCards.push(generateMockLoyaltyCard(user.id, randomProgram.id));
    }
  });
  
  return {
    users,
    wallets,
    transactions,
    businesses,
    loyaltyPrograms,
    loyaltyCards,
  };
}