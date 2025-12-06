import { Injectable } from '@angular/core';
import { Game, Category } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private games: Game[] = [
    // Tus juegos existentes...
    {
      id: 1,
      name: 'Blasphemous',
      description: 'Acción y plataformas con arte pixel único.',
      longDescription: 'Blasphemous es un juego de acción y plataformas no lineal con una estética pixel art inspirada en el arte religioso español del barroco.',
      rating: 4.7,
      releaseDate: '2019-09-10',
      developer: 'The Game Kitchen',
      publisher: 'Team17',
      categories: ['Metroidvania', 'Acción', 'Pixel Art'],
      platforms: ['PC', 'PS4', 'XBOX', 'Switch'],
      imageUrl: 'blasphemous.jpeg',
      gallery: [],
      featured: true,
    },
    {
      id: 2,
      name: 'Hollow Knight',
      description: 'Aventura épica en un reino de insectos.',
      longDescription: 'Forja tu camino en Hollow Knight! Una aventura épica a través de un vasto reino de insectos y héroes caídos.',
      rating: 4.8,
      releaseDate: '2017-02-24',
      developer: 'Team Cherry',
      publisher: 'Team Cherry',
      categories: ['Metroidvania', 'Aventura', 'Exploración'],
      platforms: ['PC', 'PS4', 'XBOX', 'Switch'],
      imageUrl: 'hollow-knight.jpeg',
      gallery: [],
      featured: false
    },
    {
      id: 3,
      name: 'Elden Ring',
      description: 'RPG de acción de mundo abierto de FromSoftware.',
      longDescription: 'Un RPG de acción de mundo abierto donde explorarás las Tierras Intermedias y desvelarás los misterios del Círculo de Elden.',
      rating: 4.9,
      releaseDate: '2022-02-25',
      developer: 'FromSoftware',
      publisher: 'Bandai Namco',
      categories: ['RPG', 'Mundo Abierto', 'Souls-like'],
      platforms: ['PC', 'PS4', 'PS5', 'XBOX'],
      imageUrl: 'elden-ring.jpg',
      gallery: [],
      featured: true,
      discount: 10
    },
    {
      id: 4,
      name: 'The Witcher 3: Wild Hunt',
      description: 'RPG de mundo abierto épico como cazador de monstruos.',
      longDescription: 'Eres Geralt de Rivia, mercenario cazador de monstruos. En un continente devastado por la guerra, cumple tu destino.',
      rating: 4.9,
      releaseDate: '2015-05-19',
      developer: 'CD Projekt Red',
      publisher: 'CD Projekt',
      categories: ['RPG', 'Mundo Abierto', 'Aventura'],
      platforms: ['PC', 'PS4', 'XBOX', 'Switch'],
      imageUrl: 'witcher3.jpg',
      gallery: [],
      featured: true
    },
    {
      id: 5,
      name: 'Minecraft',
      description: 'Sandbox de construcción y aventura infinito.',
      longDescription: 'Construye, explora y sobrevive en un mundo generado proceduralmente hecho completamente de bloques.',
      rating: 4.8,
      releaseDate: '2011-11-18',
      developer: 'Mojang Studios',
      publisher: 'Mojang Studios',
      categories: ['Sandbox', 'Supervivencia', 'Aventura'],
      platforms: ['PC', 'PS4', 'XBOX', 'Switch', 'Mobile'],
      imageUrl: 'mincraft.jpg',
      gallery: [],
      featured: false
    },
    {
      id: 6,
      name: 'Cyberpunk 2077',
      description: 'RPG de acción en la metrópolis de Night City.',
      longDescription: 'Sumérgete en el mundo oscuro del futuro donde la tecnología ha transformado la sociedad pero la humanidad se ha perdido.',
      rating: 4.3,
      releaseDate: '2020-12-10',
      developer: 'CD Projekt Red',
      publisher: 'CD Projekt',
      categories: ['RPG', 'Ciberpunk', 'Mundo Abierto'],
      platforms: ['PC', 'PS4', 'PS5', 'XBOX'],
      imageUrl: 'cyberpunk2077.jpg',
      gallery: [],
      featured: true,
      discount: 30
    },
    {
      id: 7,
      name: 'God of War',
      description: 'Viaje épico a través de los reinos nórdicos.',
      longDescription: 'Kratos ha dejado atrás su venganza contra los dioses del Olimpo y se aventura en los brutales páramos nórdicos.',
      rating: 4.9,
      releaseDate: '2018-04-20',
      developer: 'Santa Monica Studio',
      publisher: 'Sony Interactive Entertainment',
      categories: ['Acción', 'Aventura', 'Mitología'],
      platforms: ['PC', 'PS4', 'PS5'],
      imageUrl: 'god-of-war.jpg',
      gallery: [],
      featured: true
    },
    {
      id: 8,
      name: 'Red Dead Redemption 2',
      description: 'Historia épica de forajidos en América.',
      longDescription: 'América, 1899. La era del salvaje oeste llega a su fin mientras las fuerzas de la ley cazan a las últimas bandas de forajidos.',
      rating: 4.9,
      releaseDate: '2018-10-26',
      developer: 'Rockstar Games',
      publisher: 'Rockstar Games',
      categories: ['Mundo Abierto', 'Aventura', 'Acción'],
      platforms: ['PC', 'PS4', 'XBOX'],
      imageUrl: 'red-dead-redemption2.jpg',
      gallery: [],
      featured: true
    },
    {
      id: 9,
      name: 'Portal 2',
      description: 'Puzzles revolucionarios con la pistola de portales.',
      longDescription: 'La secuela del galardonado Portal, con una campaña para un jugador, modo cooperativo y nuevos personajes.',
      rating: 4.9,
      releaseDate: '2011-04-19',
      developer: 'Valve',
      publisher: 'Valve',
      categories: ['Puzzle', 'Ciencia Ficción', 'Cooperativo'],
      platforms: ['PC', 'PS3', 'XBOX 360'],
      imageUrl: 'portal2.jpg',
      gallery: [],
      featured: false
    },
    {
      id: 10,
      name: 'Doom Eternal',
      description: 'Combate intenso contra hordas demoníacas.',
      longDescription: 'Conviértete en el Slayer en una épica campaña para un jugador donde destrozas demonios a través de dimensiones.',
      rating: 4.7,
      releaseDate: '2020-03-20',
      developer: 'id Software',
      publisher: 'Bethesda',
      categories: ['Shooter', 'Acción', 'Ciencia Ficción'],
      platforms: ['PC', 'PS4', 'XBOX', 'Switch'],
      imageUrl: 'doom-eternal.jpg',
      gallery: [],
      featured: true
    },
    {
  id: 11,
  name: 'The Legend of Zelda: Breath of the Wild',
  description: 'Explora un vasto reino de Hyrule en esta aventura épica.',
  longDescription: 'Despierta en un mundo que ya no recuerdas y descubre los secretos del Reino de Hyrule en esta aventura de mundo abierto.',
  rating: 4.9,
  releaseDate: '2017-03-03',
  developer: 'Nintendo',
  publisher: 'Nintendo',
  categories: ['Aventura', 'Mundo Abierto', 'RPG'],
  platforms: ['Switch', 'Wii U'],
  imageUrl: 'zelda-botw.jpg',
  gallery: [],
  featured: true
},
{
  id: 12,
  name: 'Horizon Zero Dawn',
  description: 'Caza máquinas en un mundo post-apocalíptico.',
  longDescription: 'En un mundo dominado por máquinas, una joven cazadora named Aloy descubre su destino en esta épica aventura.',
  rating: 4.7,
  releaseDate: '2017-02-28',
  developer: 'Guerrilla Games',
  publisher: 'Sony Interactive Entertainment',
  categories: ['Aventura', 'Mundo Abierto', 'RPG'],
  platforms: ['PC', 'PS4', 'PS5'],
  imageUrl: 'horizon-zero-dawn.jpg',
  gallery: [],
  featured: true
},
{
  id: 13,
  name: 'Assassin\'s Creed Valhalla',
  description: 'Conquista Inglaterra como un vikingo legendario.',
  longDescription: 'Conviértete en Eivor, un legendario saqueador vikingo, y lidera a tu clan desde los duros páramos de Noruega hasta un nuevo hogar en la Inglaterra del siglo IX.',
  rating: 4.5,
  releaseDate: '2020-11-10',
  developer: 'Ubisoft Montreal',
  publisher: 'Ubisoft',
  categories: ['Aventura', 'Mundo Abierto', 'RPG', 'Acción'],
  platforms: ['PC', 'PS4', 'PS5', 'XBOX'],
  imageUrl: 'ac-valhalla.jpg',
  gallery: [],
  featured: false,
  discount: 15
  },
  {
  id: 14,
  name: 'Civilization VI',
  description: 'Construye un imperio que perdure en el tiempo.',
  longDescription: 'Construye un imperio para resistir el paso del tiempo en el galardonado juego de estrategia por turnos.',
  rating: 4.6,
  releaseDate: '2016-10-21',
  developer: 'Firaxis Games',
  publisher: '2K Games',
  categories: ['Estrategia', 'Simulación', 'Por Turnos'],
  platforms: ['PC', 'PS4', 'XBOX', 'Switch', 'Mobile'],
  imageUrl: 'civ6.jpg',
  gallery: [],
  featured: false
},
  {
  id: 15,
  name: 'Hades',
  description: 'Roguelike mitológico con combate intenso.',
  longDescription: 'Desafía al dios de los muertos en este rogue-like dungeon crawler de los creadores de Bastion, Transistor y Pyre.',
  rating: 4.8,
  releaseDate: '2020-09-17',
  developer: 'Supergiant Games',
  publisher: 'Supergiant Games',
  categories: ['Roguelike', 'Acción', 'Mitología', 'Indie'],
  platforms: ['PC', 'PS4', 'PS5', 'XBOX', 'Switch'],
  imageUrl: 'Video Game_ Hades.jpeg',
  gallery: [],
  featured: true,
  discount: 10
},
  {
  id: 16,
  name: 'Resident Evil 2 Remake',
  description: 'Terror de supervivencia en Raccoon City.',
  longDescription: 'Revive el clásico de terror con gráficos modernos y jugabilidad actualizada en esta reimaginación completa.',
  rating: 4.8,
  releaseDate: '2019-01-25',
  developer: 'Capcom',
  publisher: 'Capcom',
  categories: ['Terror', 'Supervivencia', 'Acción'],
  platforms: ['PC', 'PS4', 'PS5', 'XBOX'],
  imageUrl: 're2-remake.jpg',
  gallery: [],
  featured: true,
  discount: 20
},
  {
  id: 17,
  name: 'Overwatch 2',
  description: 'Shooter por equipos con héroes únicos.',
  longDescription: 'Únete a los héroes de Overwatch en el campo de batalla en este shooter por equipos gratuito.',
  rating: 4.2,
  releaseDate: '2022-10-04',
  developer: 'Blizzard Entertainment',
  publisher: 'Blizzard Entertainment',
  categories: ['Shooter', 'Multijugador', 'Acción'],
  platforms: ['PC', 'PS4', 'PS5', 'XBOX', 'Switch'],
  imageUrl: 'overwatch2.jpg',
  gallery: [],
  featured: true
},
{
  id: 18,
  name: 'Rocket League',
  description: 'Fútbol con coches rocket.',
  longDescription: 'Combina fútbol con coches rocket en este emocionante juego multijugador que ha cautivado a millones.',
  rating: 4.5,
  releaseDate: '2015-07-07',
  developer: 'Psyonix',
  publisher: 'Psyonix',
  categories: ['Deportes', 'Multijugador', 'Coches'],
  platforms: ['PC', 'PS4', 'PS5', 'XBOX', 'Switch'],
  imageUrl: 'rocket-league.jpg',
  gallery: [],
  featured: false
},
{
  id: 19,
  name: 'Valorant',
  description: 'Shooter táctico 5v5 con agentes con habilidades.',
  longDescription: 'Demuestra tu estilo de juego en un shooter táctico 5v5 con personajes únicos y disparos precisos.',
  rating: 4.4,
  releaseDate: '2020-06-02',
  developer: 'Riot Games',
  publisher: 'Riot Games',
  categories: ['Shooter', 'Táctico', 'Multijugador', 'Acción'],
  platforms: ['PC'],
  imageUrl: 'valorant.jpg',
  gallery: [],
  featured: true
  },
{
  id: 20,
  name: 'Baldur\'s Gate 3',
  description: 'RPG épico basado en Dungeons & Dragons.',
  longDescription: 'Reúne a tu grupo y adéntrate en el olvidado reino de Faerûn en este RPG basado en Dungeons & Dragons.',
  rating: 4.9,
  releaseDate: '2023-08-03',
  developer: 'Larian Studios',
  publisher: 'Larian Studios',
  categories: ['RPG', 'Por Turnos', 'Fantasy'],
  platforms: ['PC', 'PS5', 'XBOX'],
  imageUrl: 'baldurs-gate3.jpg',
  gallery: [],
  featured: true
},
{
  id: 21,
  name: 'Final Fantasy VII Remake',
  description: 'Reimaginación del clásico RPG de Square Enix.',
  longDescription: 'Revive la historia de Cloud Strife y Avalancha en esta reimaginación completa del clásico de 1997.',
  rating: 4.8,
  releaseDate: '2020-04-10',
  developer: 'Square Enix',
  publisher: 'Square Enix',
  categories: ['RPG', 'Acción', 'Fantasy'],
  platforms: ['PC', 'PS4', 'PS5'],
  imageUrl: 'ff7-remake.jpg',
  gallery: [],
  featured: true,
  discount: 30
},
{
  id: 22,
  name: 'Persona 5 Royal',
  description: 'RPG japonés sobre estudiantes con poderes.',
  longDescription: 'Vive un año escolar inolvidable en Tokio mientras luchas contra la corrupción como el ladrón fantasma.',
  rating: 4.9,
  releaseDate: '2019-10-31',
  developer: 'Atlus',
  publisher: 'Atlus',
  categories: ['RPG', 'Simulación'],
  platforms: ['PC', 'PS4', 'PS5', 'XBOX', 'Switch'],
  imageUrl: 'persona5-royal.jpg',
  gallery: [],
  featured: true
},
  
  ];

  private categories: Category[] = [
  { id: 'all', name: 'Todos los Juegos', icon: '🎮' },
  { id: 'metroidvania', name: 'Metroidvania', icon: '🗺️' },
  { id: 'roguelike', name: 'Roguelike', icon: '🔄' },
  { id: 'accion', name: 'Acción', icon: '⚔️' },
  { id: 'aventura', name: 'Aventura', icon: '🧭' },
  { id: 'rpg', name: 'RPG', icon: '🛡️' },
  { id: 'plataformas', name: 'Plataformas', icon: '👟' },
  { id: 'simulacion', name: 'Simulación', icon: '🏡' },
  { id: 'mundo-abierto', name: 'Mundo Abierto', icon: '🌍' },
  { id: 'souls-like', name: 'Souls-like', icon: '💀' },
  { id: 'shooter', name: 'Shooter', icon: '🔫' },
  { id: 'puzzle', name: 'Puzzle', icon: '🧩' },
  { id: 'sandbox', name: 'Sandbox', icon: '🔄' },
  { id: 'estrategia', name: 'Estrategia', icon: '♟️' },
  { id: 'terror', name: 'Terror', icon: '👻' },
  { id: 'deportes', name: 'Deportes', icon: '⚽' },
  { id: 'carreras', name: 'Carreras', icon: '🏎️' },
  { id: 'multijugador', name: 'Multijugador', icon: '👥' },
  { id: 'indie', name: 'Indie', icon: '🌟' },
  { id: 'fantasy', name: 'Fantasy', icon: '🐉' },
  { id: 'ciencia-ficcion', name: 'Ciencia Ficción', icon: '🚀' },
  { id: 'destacados', name: 'Destacados', icon: '⭐' },
  { id: 'ofertas', name: 'En Oferta', icon: '💰' }
  ];

  getGames(): Game[] {
    return this.games;
  }

  getGameById(id: number): Game | undefined {
    return this.games.find(game => game.id === id);
  }

  getFeaturedGames(): Game[] {
    return this.games.filter(game => game.featured);
  }

  getGamesOnSale(): Game[] {
    return this.games.filter(game => game.discount && game.discount > 0);
  }

  getGamesByCategory(categoryId: string): Game[] {
    if (categoryId === 'all') {
      return this.games;
    }
    
    if (categoryId === 'destacados') {
      return this.getFeaturedGames();
    }
    
    if (categoryId === 'ofertas') {
      return this.getGamesOnSale();
    }

    return this.games.filter(game => 
      game.categories.some(cat => 
        this.normalizeCategory(cat) === categoryId
      )
    );
  }

  getCategories(): Category[] {
    return this.categories;
  }

  searchGames(term: string): Game[] {
    if (!term) return this.games;
    return this.games.filter(game => 
      game.name.toLowerCase().includes(term.toLowerCase()) ||
      game.description.toLowerCase().includes(term.toLowerCase()) ||
      game.developer.toLowerCase().includes(term.toLowerCase()) ||
      game.categories.some(cat => cat.toLowerCase().includes(term.toLowerCase()))
    );
  }

  private normalizeCategory(category: string): string {
    return category.toLowerCase()
      .replace(/\s+/g, '-')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }
}