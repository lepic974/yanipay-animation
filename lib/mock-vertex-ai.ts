// Mock implementation for Vertex AI when API key is not available

export async function generateAIResponse(prompt: string): Promise<string> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const responses = [
    "Merci pour votre question ! En tant qu'assistant IA de YaniPay, je vous recommande de diversifier vos investissements et de maintenir un fonds d'urgence équivalent à 3-6 mois de dépenses.",
    "Votre profil financier semble équilibré. Considérez l'utilisation de nos YaniCoins pour bénéficier de frais réduits sur vos transactions internationales.",
    "Excellente gestion de votre portefeuille ! Pensez à utiliser notre programme de fidélité pour maximiser vos récompenses lors de vos achats quotidiens.",
    "Je remarque une augmentation de vos dépenses ce mois-ci. Voulez-vous que je vous aide à créer un budget personnalisé avec YaniPay ?",
    "Vos habitudes d'épargne sont remarquables ! Avez-vous considéré nos options d'investissement automatique pour faire fructifier votre épargne ?"
  ];
  
  return responses[Math.floor(Math.random() * responses.length)];
}

export async function generateFinancialAdvice(userContext: {
  balance: number;
  recentTransactions: any[];
  loyaltyPoints: number;
}): Promise<string> {
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  const { balance, recentTransactions, loyaltyPoints } = userContext;
  
  if (balance > 5000) {
    return `Avec un solde de ${balance}€, vous êtes dans une excellente position financière ! Je recommande de placer une partie de cette somme dans notre compte épargne YaniPay qui offre un taux avantageux. Vos ${loyaltyPoints} points de fidélité peuvent également être convertis en réductions chez nos partenaires.`;
  } else if (balance > 1000) {
    return `Votre solde de ${balance}€ est correct. Avec ${recentTransactions.length} transactions récentes, vous semblez avoir une activité financière régulière. Pensez à utiliser notre fonction d'épargne automatique pour constituer progressivement un fonds d'urgence.`;
  } else {
    return `Avec un solde de ${balance}€, il serait judicieux de surveiller vos dépenses. YaniPay propose des outils de budgétisation pour vous aider à mieux gérer vos finances. Vos ${loyaltyPoints} points de fidélité peuvent vous faire économiser sur vos prochains achats !`;
  }
}

export async function generateTransactionInsights(transactions: any[]): Promise<string> {
  await new Promise(resolve => setTimeout(resolve, 1200));
  
  if (transactions.length === 0) {
    return "Aucune transaction récente à analyser. Commencez à utiliser YaniPay pour obtenir des insights personnalisés sur vos habitudes de dépenses !";
  }
  
  const totalAmount = transactions.reduce((sum, tx) => sum + Math.abs(tx.amount || 0), 0);
  const avgTransaction = totalAmount / transactions.length;
  
  return `Analyse de vos ${transactions.length} dernières transactions :

• Montant total : ${totalAmount.toFixed(2)}€
• Transaction moyenne : ${avgTransaction.toFixed(2)}€
• Tendance : ${transactions.length > 10 ? 'Activité élevée' : 'Activité modérée'}

Recommandation : Continuez à utiliser YaniPay pour bénéficier de nos récompenses de fidélité et de nos taux de change avantageux !`;
}