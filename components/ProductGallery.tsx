
import React, { useState } from 'react';
import { PRODUCTS } from '../constants';

const ProductGallery: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'Modern', 'Classic', 'Giant', 'Minimalist'];

  const filteredProducts = filter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  return (
    <section id="catalogo" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div>
            <h2 className="text-4xl font-serif text-stone-900 mb-4">Colección de Macetas</h2>
            <p className="text-stone-500">Diseños pensados para integrarse en cualquier arquitectura.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  filter === cat 
                    ? 'bg-stone-900 text-white shadow-lg' 
                    : 'bg-white text-stone-600 border border-stone-200 hover:border-stone-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group bg-white rounded-3xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-stone-800 shadow-sm">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-stone-900 mb-2">{product.name}</h3>
                <p className="text-sm text-stone-500 mb-4 line-clamp-2">{product.description}</p>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xl font-bold text-stone-900">${product.price.toLocaleString()}</span>
                  <div className="flex gap-1">
                    {product.colors.map((color, i) => (
                      <div key={i} className="w-4 h-4 rounded-full border border-stone-200" style={{ backgroundColor: color }} />
                    ))}
                  </div>
                </div>
                <button className="w-full py-3 border-2 border-stone-900 rounded-xl font-bold text-stone-900 hover:bg-stone-900 hover:text-white transition-all">
                  Personalizar Maceta
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
