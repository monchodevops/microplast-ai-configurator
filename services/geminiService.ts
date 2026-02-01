
import { GoogleGenAI, Type } from "@google/genai";
import { RecommendationRequest, RecommendationResponse } from "../types";
import { MICROPLAST_CATALOG } from "../catalog";

export const getPotRecommendation = async (req: RecommendationRequest): Promise<RecommendationResponse> => {
  const apiKey = process.env.API_KEY;

  // Validación robusta de la clave
  if (!apiKey || apiKey === "undefined" || apiKey === "" || apiKey === "null") {
    console.error("CRÍTICO: La API_KEY no está configurada en el entorno.");
    throw new Error("API_KEY_MISSING");
  }

  const ai = new GoogleGenAI({ apiKey });
  
  const catalogContext = MICROPLAST_CATALOG.map(m => 
    `- NOMBRE: ${m.fullName}. FORMA: ${m.shape}. DIMENSIONES: ${m.dimensions}. DESCRIPCIÓN: ${m.description}. URL: ${m.url}`
  ).join("\n");

  const prompt = `Actúa como el experto en paisajismo de la fábrica Microplast (Argentina). 
  
  TU MISIÓN:
  Sugerir la maceta ideal de nuestro catálogo para una planta específica.

  REGLA CRÍTICA DE VALIDACIÓN:
  - Si el usuario ingresa algo que claramente NO es una planta (ej: "Auto", "Celular", "Pizza", "Mesa", etc.), NO debes recomendar ninguna maceta.
  - En este caso, el campo "potName" DEBE ser exactamente: "Consulta fuera de alcance".
  - En el campo "reasoning", explica amablemente que eres un asistente especializado exclusivamente en botánica y macetas de diseño Microplast.

  CATÁLOGO MICROPLAST:
  ${catalogContext}
  
  CONSULTA:
  - Planta: ${req.plantName}
  - Lugar: ${req.environment}
  - Estilo: ${req.style}

  RESPUESTA JSON:
  {
    "potName": "...",
    "reasoning": "...",
    "url": "...",
    "dimensions": "..."
  }`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            potName: { type: Type.STRING },
            reasoning: { type: Type.STRING },
            url: { type: Type.STRING },
            dimensions: { type: Type.STRING }
          },
          required: ["potName", "reasoning", "url", "dimensions"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("Respuesta vacía del servidor de IA");
    
    return JSON.parse(text) as RecommendationResponse;
  } catch (error: any) {
    console.error("Error en la llamada a Gemini:", error);
    throw error;
  }
};
