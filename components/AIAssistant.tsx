
import React, { useState } from 'react';
import { getPotRecommendation } from '../services/geminiService';
import { RecommendationResponse } from '../types';

interface AIAssistantProps {
  isWidget?: boolean;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ isWidget = false }) => {
  const [plantName, setPlantName] = useState('');
  const [environment, setEnvironment] = useState<'interior' | 'exterior'>('interior');
  const [style, setStyle] = useState<'moderno' | 'rustico' | 'minimalista'>('moderno');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<RecommendationResponse | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!plantName) return;
    
    setIsLoading(true);
    const recommendation = await getPotRecommendation({ plantName, environment, style });
    setResult(recommendation);
    setIsLoading(false);
  };

  const shareToWhatsApp = () => {
    if (!result || result.potName === "Consulta fuera de alcance") return;
    const message = `Hola! Vi su asistente AI y me recomendó la "${result.potName}" para mi ${plantName}. ¿Tienen stock disponible?`;
    const url = `https://wa.me/5492604692255?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const isInvalid = result?.potName === "Consulta fuera de alcance";

  return (
    <div className={`w-full ${isWidget ? '' : 'py-24 bg-stone-900 text-white'}`}>
      <div className={`${isWidget ? 'p-6 md:p-12' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}`}>
        <div className={`grid ${isWidget ? 'grid-cols-1 lg:grid-cols-2' : 'lg:grid-cols-2'} gap-8 md:gap-20 items-center`}>
          
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-serif font-bold text-stone-900">Configurador Personalizado</h2>
              <p className="text-stone-500 text-sm">Nuestra IA analizará tu planta y seleccionará el modelo de fábrica que mejor le sienta.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-stone-400">¿Qué planta quieres colocar?</label>
                <input 
                  type="text" 
                  placeholder="Ej: Ficus Lyrata, Palmera, Sansevieria..."
                  className="w-full bg-stone-50 border-b-2 border-stone-100 px-0 py-3 text-stone-900 focus:outline-none focus:border-stone-900 transition-all placeholder:text-stone-300 font-medium"
                  value={plantName}
                  onChange={(e) => setPlantName(e.target.value)}
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-stone-400">Ubicación</label>
                  <select 
                    className="w-full bg-transparent border-b-2 border-stone-100 py-3 text-stone-900 focus:outline-none focus:border-stone-900 font-medium cursor-pointer"
                    value={environment}
                    onChange={(e) => setEnvironment(e.target.value as any)}
                  >
                    <option value="interior">Interior</option>
                    <option value="exterior">Exterior</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-stone-400">Estilo Deco</label>
                  <select 
                    className="w-full bg-transparent border-b-2 border-stone-100 py-3 text-stone-900 focus:outline-none focus:border-stone-900 font-medium cursor-pointer"
                    value={style}
                    onChange={(e) => setStyle(e.target.value as any)}
                  >
                    <option value="moderno">Moderno</option>
                    <option value="rustico">Rústico / Cálido</option>
                    <option value="minimalista">Minimalista</option>
                  </select>
                </div>
              </div>
              
              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-stone-900 text-white py-5 rounded-2xl font-bold text-sm hover:bg-stone-800 transition-all disabled:opacity-50 flex items-center justify-center gap-3 shadow-xl active:scale-[0.98] uppercase tracking-widest"
              >
                {isLoading ? 'Analizando Catálogo...' : 'Obtener Recomendación'}
              </button>
            </form>
          </div>
          
          <div className="min-h-[450px] flex items-center justify-center">
            {isLoading ? (
              <div className="flex flex-col items-center gap-6">
                <div className="w-16 h-16 border-4 border-stone-50 border-t-stone-900 rounded-full animate-spin"></div>
                <p className="text-stone-400 text-xs font-bold uppercase tracking-widest animate-pulse">Consultando stock disponible...</p>
              </div>
            ) : result ? (
              <div className={`bg-stone-900 text-white p-8 md:p-10 rounded-[2rem] w-full animate-fadeIn shadow-2xl relative overflow-hidden flex flex-col justify-between h-full border ${isInvalid ? 'border-orange-900/30' : 'border-stone-800'}`}>
                <div className="absolute top-0 right-0 p-4">
                  <div className={`backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-tighter ${isInvalid ? 'bg-orange-500/20 text-orange-200' : 'bg-white/10 text-white'}`}>
                    {isInvalid ? 'SISTEMA DE SEGURIDAD' : 'CATÁLOGO OFICIAL'}
                  </div>
                </div>
                
                <div>
                  <h3 className={`text-3xl font-serif font-bold mb-1 ${isInvalid ? 'text-orange-100' : 'text-white'}`}>
                    {isInvalid ? 'Consulta no Válida' : result.potName}
                  </h3>
                  {!isInvalid && <p className="text-stone-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">{result.dimensions}</p>}
                  <div className={`w-12 h-1 mb-8 ${isInvalid ? 'bg-orange-900/50' : 'bg-stone-700'}`}></div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-500 mb-2">Mensaje del Experto</h4>
                      <p className="text-stone-200 text-base leading-relaxed font-light">{result.reasoning}</p>
                    </div>
                  </div>
                </div>
                
                {!isInvalid ? (
                  <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a 
                      href={result.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white text-stone-900 py-4 rounded-xl font-bold text-xs hover:bg-stone-100 transition-all uppercase tracking-widest text-center"
                    >
                      Ver en Tienda
                    </a>
                    <button 
                      onClick={shareToWhatsApp} 
                      className="bg-white/10 text-white py-4 rounded-xl font-bold text-xs hover:bg-white/20 transition-all uppercase tracking-widest border border-white/10"
                    >
                      Consultar WhatsApp
                    </button>
                  </div>
                ) : (
                  <div className="mt-10 pt-8 border-t border-white/5 opacity-40">
                    <p className="text-[10px] text-stone-500 italic uppercase text-center">Por favor, intenta nuevamente con una especie vegetal.</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center p-12 border-2 border-dashed border-stone-100 rounded-[3rem] w-full opacity-50 flex flex-col items-center gap-4">
                <div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                </div>
                <p className="text-stone-400 text-sm font-medium">Completa el formulario para ver la maceta ideal</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
