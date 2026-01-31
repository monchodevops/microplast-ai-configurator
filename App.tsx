
import React from 'react';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center p-4 selection:bg-stone-900 selection:text-white">
      <div className="w-full max-w-4xl">
        <header className="text-center mb-8">
          <div className="flex justify-center items-center mb-6">
            <div className="relative group">
              {/* Usando el nuevo logo roboto2 de Microplast con tamaño optimizado y efecto hover */}
              <img 
                src="https://i.ibb.co/LXZpcwkh/roboto2.png" 
                alt="Microplast Brand Identity" 
                className="w-full max-w-[160px] h-auto rounded-[1.5rem] shadow-2xl shadow-stone-300/50 transform hover:scale-110 transition-all duration-500 ease-out cursor-pointer"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/600x600/1c1917/ffffff?text=MICROPLAST";
                }}
              />
              <div className="absolute -inset-2 bg-gradient-to-tr from-stone-200 via-transparent to-stone-100 rounded-[1.5rem] blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 -z-10"></div>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-serif text-stone-900 font-bold tracking-tight">
            Asistente <span className="text-stone-400 font-light italic">Inteligente</span>
          </h1>
          <p className="text-stone-400 mt-2 font-medium text-xs uppercase tracking-[0.3em]">Te ayudamos a elegir la mejor maceta para tu hogar</p>
        </header>
        
        <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-stone-200/60 overflow-hidden border border-stone-100">
          <AIAssistant isWidget={true} />
        </div>
        
        <footer className="mt-8 text-center space-y-2">
          <p className="text-stone-400 text-[10px] font-bold uppercase tracking-[0.3em]">
            Calidad de Exportación • Industria Argentina
          </p>
          <p className="text-stone-300 text-[9px]">
            © 2026 - Microplast San Luis
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
