
export interface RecommendationRequest {
  plantName: string;
  environment: 'interior' | 'exterior';
  style: 'moderno' | 'rustico' | 'minimalista';
}

export interface RecommendationResponse {
  potName: string;
  reasoning: string;
  url: string;
  dimensions: string;
}

// Fix: Added Product interface to satisfy the import in constants.tsx
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  colors: string[];
}
