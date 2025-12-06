import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { GameCatalogComponent } from './components/game-catalog/game-catalog.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { ContactoComponent } from './components/about/contacto.component';


// Define las RUTAS de tu aplicación
export const routes: Routes = [
  { path: '', component: HeroComponent, title: 'Inicio - Portal Gamer' },
  { path: 'catalogo', component: GameCatalogComponent, title: 'Catálogo - Portal Gamer' },
  { path: 'destacados', component: FeaturedComponent, title: 'Destacados - Portal Gamer' },
  { path: 'contacto', component: ContactoComponent, title: 'Contacto - Portal Gamer' }
];