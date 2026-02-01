
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-stone-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">TN</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-stone-900">TERRANOVA</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#catalogo" className="text-stone-600 hover:text-stone-900 font-medium transition-colors">Catálogo</a>
            <a href="#beneficios" className="text-stone-600 hover:text-stone-900 font-medium transition-colors">Beneficios</a>
            <a href="#asistente" className="text-stone-600 hover:text-stone-900 font-medium transition-colors">Asistente AI</a>
            <button className="bg-stone-900 text-white px-5 py-2 rounded-full font-medium hover:bg-stone-800 transition-all shadow-lg hover:shadow-stone-200">
              Tienda Online
            </button>
          </div>
          <div className="md:hidden">
            <button className="text-stone-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
