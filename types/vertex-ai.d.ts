declare module '@google/genai' {
  export interface GenerativeModel {
    generateContent(prompt: string): Promise<{
      response: {
        text(): string;
      };
    }>;
  }
  
  export interface GoogleGenerativeAI {
    getGenerativeModel(config: { model: string }): GenerativeModel;
  }
  
  export class GoogleGenerativeAI {
    constructor(apiKey: string);
  }
}