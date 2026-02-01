
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:flex lg:items-center lg:gap-16">
          <div className="lg:w-1/2">
            <h1 className="text-5xl lg:text-7xl font-serif leading-tight text-stone-900 mb-6">
              Macetas que <span className="italic text-stone-500 underline decoration-stone-200">resisten</span> el paso del tiempo.
            </h1>
            <p className="text-lg text-stone-600 mb-8 max-w-xl leading-relaxed">
              Diseño contemporáneo fabricado mediante rotomoldeo. Ligeras para mover, irrompibles para durar y con protección UV para brillar siempre.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#catalogo" className="bg-stone-900 text-white px-8 py-4 rounded-full font-semibold text-center hover:bg-stone-800 transition-all shadow-xl">
                Ver Catálogo 2024
              </a>
              <a href="#asistente" className="bg-white text-stone-900 border border-stone-200 px-8 py-4 rounded-full font-semibold text-center hover:bg-stone-50 transition-all">
                Asistente de Diseño AI
              </a>
            </div>
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img key={i} className="w-10 h-10 rounded-full border-2 border-white" src={`https://picsum.photos/seed/${i+20}/100/100`} alt="Client" />
                ))}
              </div>
              <p className="text-sm text-stone-500 font-medium">
                +2,500 jardines renovados con TerraNova.
              </p>
            </div>
          </div>
          <div className="mt-16 lg:mt-0 lg:w-1/2 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1583321500900-82807e458f3c?auto=format&fit=crop&q=80&w=1200" 
                alt="Maceta Moderna" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-stone-200 rounded-full -z-10 blur-3xl opacity-50"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-orange-100 rounded-full -z-10 blur-3xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
