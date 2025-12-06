export interface Game {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  rating: number;
  releaseDate: string;
  developer: string;
  publisher: string;
  categories: string[];
  platforms: string[];
  imageUrl: string;        // 📷 IMAGEN PRINCIPAL
  gallery: string[];       // 📷 GALERÍA DE IMÁGENES
  featured: boolean;
  discount?: number;
  
  // NUEVAS PROPIEDADES AÑADIDAS
  playerCount?: string;    // 👥 Número de jugadores (ej: "1-4", "Single Player", "Multiplayer")
  ageRating?: string;      // 🔞 Clasificación por edades (ej: "PEGI 18", "ESRB M")
  languages?: string[];    // 🌍 Idiomas soportados
  size?: string;          // 💾 Tamaño de descarga (ej: "45 GB")
  duration?: string;      // ⏱️ Duración estimada (ej: "40-60 horas")
  tags?: string[];       // 🏷️ Etiquetas adicionales para búsqueda
  videoUrl?: string;     // 🎬 URL de trailer en YouTube
  website?: string;      // 🌐 Sitio web oficial
  metacritic?: number;   // 📊 Puntuación en Metacritic
  isNew?: boolean;       // 🆚 Lanzamiento reciente
  isEarlyAccess?: boolean; // 🚗 Acceso anticipado
  isPreOrder?: boolean;  // 📦 Pre-orden disponible
  releaseStatus?: string; // 📅 Estado de lanzamiento
  achievements?: number;  // 🏆 Número de logros
  cloudSaves?: boolean;  // ☁️ Guardado en la nube
  crossPlatform?: boolean; // 🔄 Compatibilidad cruzada
  dlcAvailable?: boolean; // 📦 DLC disponible
  modSupport?: boolean;  // 🛠️ Soporte para mods
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description?: string;   // 📝 Descripción de la categoría
  color?: string;        // 🎨 Color representativo
  gameCount?: number;    // 🔢 Número de juegos en esta categoría
}

// NUEVAS INTERFACES AÑADIDAS
export interface Review {
  id: number;
  gameId: number;
  user: string;
  rating: number;
  comment: string;
  date: string;
  helpful: number;
}

export interface SystemRequirements {
  os: string;
  processor: string;
  memory: string;
  graphics: string;
  storage: string;
  directX?: string;
  notes?: string;
}

export interface DLC {
  id: number;
  gameId: number;
  name: string;
  description: string;
  price: number;
  releaseDate: string;
}

export interface Bundle {
  id: number;
  name: string;
  description: string;
  games: number[]; // IDs de juegos incluidos
  price: number;
  discount: number;
  imageUrl: string;
}