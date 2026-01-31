
export interface MicroplastProduct {
  id: string;
  shape: string;
  modelName: string;
  fullName: string;
  url: string;
  description: string;
  dimensions: string;
}

export const MICROPLAST_CATALOG: MicroplastProduct[] = [
  {
    id: "gota_perla",
    shape: "Gota",
    modelName: "Perla",
    fullName: "Maceta Gota | Perla",
    url: "https://tienda.microplast.com.ar/productos/maceta-gota-perla/",
    description: "Diseño de curvas suaves tipo lágrima. Balance ideal entre altura y ancho.",
    dimensions: "Altura: 50cm, Boca: 35cm, Base: 53cm"
  },
  {
    id: "gota_hipolita",
    shape: "Gota",
    modelName: "Hipólita",
    fullName: "Maceta Gota | Hipólita",
    url: "https://tienda.microplast.com.ar/productos/maceta-gota-hipolita/",
    description: "Modelo de gran porte. Base muy ancha para estabilidad visual y gran volumen de sustrato (160L).",
    dimensions: "Altura: 70cm, Boca: 38cm, Base: 60cm"
  },
  {
    id: "gota_rosa",
    shape: "Gota (Baja)",
    modelName: "Rosa",
    fullName: "Maceta Gota | Rosa",
    url: "https://tienda.microplast.com.ar/productos/maceta-gota-rosa/",
    description: "Formato tipo 'Gota chata' o palangana de diseño. Ideal para arreglos florales o suculentas.",
    dimensions: "Altura: 26cm, Boca: 51cm, Base: 70cm"
  },
  {
    id: "cilindro_choli",
    shape: "Cilíndrica",
    modelName: "Choli",
    fullName: "Maceta Cilindro | Choli",
    url: "https://tienda.microplast.com.ar/productos/maceta-cilindro-choli/",
    description: "Cilindro alto y esbelto. Mantiene el mismo diámetro en toda su estructura. Ideal para minimalismo.",
    dimensions: "Altura: 50cm, Diámetro: 30cm"
  },
  {
    id: "cilindro_ermida",
    shape: "Cilíndrica",
    modelName: "Ermida",
    fullName: "Maceta Cilindro | Ermida",
    url: "https://tienda.microplast.com.ar/productos/maceta-cilindro-ermida/",
    description: "Versión compacta. Formato 1:1, ideal para mesas o rincones bajos.",
    dimensions: "Altura: 30cm, Diámetro: 30cm"
  },
  {
    id: "cantero_isolina",
    shape: "Cantero",
    modelName: "Isolina",
    fullName: "Maceta Cantero | Isolina",
    url: "https://tienda.microplast.com.ar/productos/maceta-cantero-isolina/",
    description: "Jardinera rectangular de perfil bajo y largo. Ideal para ventanas o bordes.",
    dimensions: "Altura: 20cm, Largo: 70cm, Ancho: 20cm"
  },
  {
    id: "cantero_constantina",
    shape: "Cantero",
    modelName: "Constantina",
    fullName: "Maceta Cantero | Constantina",
    url: "https://tienda.microplast.com.ar/productos/maceta-cantero-constantina/",
    description: "Cantero de mayor volumen y robustez. Paredes rectas y mayor capacidad.",
    dimensions: "Altura: 30cm, Largo: 80cm, Ancho: 30cm"
  },
  {
    id: "conica_ernestina",
    shape: "Cónica",
    modelName: "Ernestina",
    fullName: "Maceta Cónica | Ernestina",
    url: "https://tienda.microplast.com.ar/productos/maceta-conica-ernestina/",
    description: "Cónica clásica de tamaño intermedio. Muy versátil.",
    dimensions: "Altura: 40cm, Boca: 40cm"
  },
  {
    id: "conica_antolina",
    shape: "Cónica",
    modelName: "Antolina",
    fullName: "Maceta Cónica | Antolina",
    url: "https://tienda.microplast.com.ar/productos/maceta-conica-antolina/",
    description: "Variante cónica más alta, aporta verticalidad a la planta.",
    dimensions: "Altura: 50cm, Boca: 35cm"
  },
  {
    id: "conica_emilia",
    shape: "Cónica",
    modelName: "Emilia",
    fullName: "Maceta Cónica | Emilia",
    url: "https://tienda.microplast.com.ar/productos/maceta-conica-emilia/",
    description: "La más pequeña del set cónico, ideal para escritorios o estantes.",
    dimensions: "Altura: 30cm, Boca: 30cm"
  },
  {
    id: "piramidal_fanny",
    shape: "Piramidal",
    modelName: "Fanny",
    fullName: "Maceta Piramidal | Fanny",
    url: "https://tienda.microplast.com.ar/productos/maceta-piramidal-fanny/",
    description: "Piramidal cuadrada alta. Gran impacto visual.",
    dimensions: "Altura: 70cm, Boca: 37cm"
  },
  {
    id: "piramidal_luisa",
    shape: "Piramidal",
    modelName: "Luisa",
    fullName: "Maceta Piramidal | Luisa",
    url: "https://tienda.microplast.com.ar/productos/maceta-piramidal-luisa/",
    description: "Piramidal cuadrada estándar. Equilibrio y diseño industrial.",
    dimensions: "Altura: 50cm, Boca: 40cm"
  }
];
