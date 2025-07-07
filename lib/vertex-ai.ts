import { GoogleGenerativeAI } from '@google/genai';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY || '');

export async function generateAIResponse(prompt: string): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating AI response:', error);
    throw new Error('Failed to generate AI response');
  }
}

export async function generateFinancialAdvice(userContext: {
  balance: number;
  recentTransactions: any[];
  loyaltyPoints: number;
}): Promise<string> {
  const prompt = `
    En tant qu'assistant financier IA de YaniPay, analysez la situation financière suivante et donnez des conseils personnalisés :
    
    Solde actuel : ${userContext.balance}€
    Nombre de transactions récentes : ${userContext.recentTransactions.length}
    Points de fidélité : ${userContext.loyaltyPoints}
    
    Donnez des conseils financiers personnalisés, des recommandations d'épargne, et des suggestions pour optimiser l'utilisation de YaniPay.
    Répondez en français, de manière claire et bienveillante.
  `;
  
  return generateAIResponse(prompt);
}

export async function generateTransactionInsights(transactions: any[]): Promise<string> {
  const prompt = `
    Analysez ces transactions financières et fournissez des insights :
    
    ${JSON.stringify(transactions, null, 2)}
    
    Identifiez les tendances de dépenses, les catégories principales, et donnez des recommandations pour une meilleure gestion financière.
    Répondez en français.
  `;
  
  return generateAIResponse(prompt);
}