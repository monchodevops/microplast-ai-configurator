
import { GoogleGenAI, Type } from "@google/genai";
import { RecommendationRequest, RecommendationResponse } from "../types";
import { MICROPLAST_CATALOG } from "../catalog";

export const getPotRecommendation = async (req: RecommendationRequest): Promise<RecommendationResponse> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const catalogContext = MICROPLAST_CATALOG.map(m => 
    `- NOMBRE: ${m.fullName}. FORMA: ${m.shape}. DIMENSIONES: ${m.dimensions}. DESCRIPCIÓN: ${m.description}. URL: ${m.url}`
  ).join("\n");

  const prompt = `Actúa como el experto en paisajismo de la fábrica Microplast (Argentina). 
  
  TU MISIÓN:
  Sugerir la maceta ideal de nuestro catálogo para una planta específica.

  REGLA CRÍTICA DE VALIDACIÓN:
  - Si el usuario ingresa algo que claramente NO es una planta (ej: "Auto", "Celular", "Pizza", "Mesa", etc.), NO debes recomendar ninguna maceta.
  - En este caso, el campo "potName" DEBE ser exactamente: "Consulta fuera de alcance".
  - En el campo "reasoning", explica amablemente que eres un asistente especializado exclusivamente en botánica y macetas de diseño Microplast, e invita al usuario a consultar sobre una planta real.

  CATÁLOGO MICROPLAST (ORIGINAL):
  ${catalogContext}
  
  CONSULTA DEL CLIENTE:
  - Planta/Objeto: ${req.plantName}
  - Lugar: ${req.environment}
  - Estilo preferido: ${req.style}

  REGLAS PARA PLANTAS VÁLIDAS:
  1. El campo "potName" DEBE ser el "NOMBRE" exacto del catálogo.
  2. Justifica mencionando ventajas de Microplast (liviano, irrompible, filtro UV).
  3. Informa que NO es necesario el uso de plato interno por diseño de drenaje eficiente.

  RESPUESTA JSON:
  {
    "potName": "...",
    "reasoning": "...",
    "url": "...",
    "dimensions": "..."
  }`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
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

    const result = JSON.parse(response.text || "{}");
    return result as RecommendationResponse;
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    const fallback = MICROPLAST_CATALOG[0];
    return {
      potName: fallback.fullName,
      reasoning: "Este modelo es extremadamente versátil y resistente. Gracias a la tecnología de Microplast, NO requiere plato interno, facilitando el cuidado de tus plantas.",
      url: fallback.url,
      dimensions: fallback.dimensions
    };
  }
};
