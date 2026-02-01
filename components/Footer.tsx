
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-stone-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-stone-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">M</span>
                </div>
                <span className="text-xl font-bold tracking-tight text-stone-900 uppercase">Microplast</span>
              </div>
              <p className="text-stone-500 text-sm leading-relaxed mb-6">
                Líderes en fabricación de macetas rotomoldeadas para paisajismo profesional y residencial.
              </p>
          </div>
          
          <div>
            <h4 className="font-bold text-stone-900 mb-6">Explorar</h4>
            <ul className="space-y-4 text-sm text-stone-500">
              <li><a href="#" className="hover:text-stone-900">Catálogo Completo</a></li>
              <li><a href="#" className="hover:text-stone-900">Proyectos Especiales</a></li>
              <li><a href="#" className="hover:text-stone-900">Venta Mayorista</a></li>
              <li><a href="#" className="hover:text-stone-900">Showroom</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-stone-900 mb-6">Empresa</h4>
            <ul className="space-y-4 text-sm text-stone-500">
              <li><a href="#" className="hover:text-stone-900">Nuestra Historia</a></li>
              <li><a href="#" className="hover:text-stone-900">Proceso de Fabricación</a></li>
              <li><a href="#" className="hover:text-stone-900">Sostenibilidad</a></li>
              <li><a href="#" className="hover:text-stone-900">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-stone-900 mb-6">Suscríbete</h4>
            <p className="text-sm text-stone-500 mb-4">Recibe tips de paisajismo y ofertas exclusivas.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="tu@email.com" 
                className="bg-stone-50 border border-stone-200 rounded-lg px-4 py-2 text-sm flex-1 focus:outline-none focus:ring-1 focus:ring-stone-400"
              />
              <button className="bg-stone-900 text-white px-4 py-2 rounded-lg text-sm font-bold">Ok</button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-100 gap-4 text-stone-400 text-xs font-medium uppercase tracking-widest">
          <p>© 2026 - Microplast San Luis</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-stone-900">Privacidad</a>
            <a href="#" className="hover:text-stone-900">Términos</a>
            <a href="#" className="hover:text-stone-900">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
