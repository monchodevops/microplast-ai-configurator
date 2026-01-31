
import React from 'react';
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Cilindro Urbano',
    description: 'Líneas puras para espacios contemporáneos. Ideal para oficinas y salas de estar.',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d445?auto=format&fit=crop&q=80&w=800',
    category: 'Modern',
    colors: ['#334155', '#F8FAFC', '#78350F']
  },
  {
    id: '2',
    name: 'Copa Toscana',
    description: 'Un clásico renovado con tecnología de rotomoldeo. Resistencia UV extrema.',
    price: 7200,
    image: 'https://images.unsplash.com/photo-1599335133614-f584e03d9692?auto=format&fit=crop&q=80&w=800',
    category: 'Classic',
    colors: ['#78350F', '#D1D5DB', '#1E293B']
  },
  {
    id: '3',
    name: 'Pirámide XL',
    description: 'Impacto visual garantizado. Perfecta para entradas y jardines amplios.',
    price: 12500,
    image: 'https://images.unsplash.com/photo-1517260911058-0fcfd733100c?auto=format&fit=crop&q=80&w=800',
    category: 'Giant',
    colors: ['#475569', '#F1F5F9', '#0F172A']
  },
  {
    id: '4',
    name: 'Cubo Zen',
    description: 'Simetría perfecta. Diseñada para durar décadas a la intemperie.',
    price: 5800,
    image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=800',
    category: 'Minimalist',
    colors: ['#111827', '#E5E7EB', '#713F12']
  }
];

export const Icons = {
  Shield: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
  ),
  Feather: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" y1="8" x2="2" y2="22"/><line x1="17.5" y1="15" x2="9" y2="15"/></svg>
  ),
  Sun: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
  ),
  Leaf: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C10.9 14.4 12 13.8 14 11.2"/><path d="M11 20c0-2.5-1-4.5-1-4.5"/></svg>
  )
};
