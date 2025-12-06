import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GameService } from '../../services/game.service';
import { Game, Category } from '../../models/game.model';

@Component({
  selector: 'app-game-catalog',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './game-catalog.component.html',
  styleUrls: ['./game-catalog.component.css']
})
export class GameCatalogComponent implements OnInit {
  games: Game[] = [];
  filteredGames: Game[] = [];
  categories: Category[] = [];
  selectedCategory: string = 'all';
  searchTerm: string = '';
  
  // NUEVAS PROPIEDADES PARA CATEGORÍAS COLAPSABLES
  categoriesExpanded: boolean = false;
  private initialVisibleCategories = 6;

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.games = this.gameService.getGames();
    this.filteredGames = this.games;
    this.categories = this.gameService.getCategories();
  }

  // MÉTODOS PARA CATEGORÍAS COLAPSABLES
  getVisibleCategories(): Category[] {
    if (this.categoriesExpanded) {
      return this.categories;
    }
    return this.categories.slice(0, this.initialVisibleCategories);
  }

  toggleCategoriesExpanded() {
    this.categoriesExpanded = !this.categoriesExpanded;
  }

  getCategoryCount(categoryId: string): number {
    if (categoryId === 'all') {
      return this.games.length;
    }
    return this.gameService.getGamesByCategory(categoryId).length;
  }

  getCategoryName(categoryId: string): string {
    const category = this.categories.find(c => c.id === categoryId);
    return category ? category.name : 'Categoría';
  }

  // MÉTODOS EXISTENTES
  onCategorySelect(categoryId: string) {
    this.selectedCategory = categoryId;
    this.filterGames();
  }

  onSearchInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchTerm = input.value;
    this.filterGames();
  }

  private filterGames() {
    let filtered = this.games;

    if (this.selectedCategory !== 'all') {
      filtered = this.gameService.getGamesByCategory(this.selectedCategory);
    }

    if (this.searchTerm) {
      filtered = this.gameService.searchGames(this.searchTerm);
    }

    this.filteredGames = filtered;
  }

  getDiscountPrice(price: number, discount?: number): string {
    if (!discount) return price.toFixed(2);
    const discountedPrice = price * (1 - discount / 100);
    return discountedPrice.toFixed(2);
  }

  addToCart(game: Game) {
    console.log('Añadiendo al carrito:', game.name);
  }

  clearFilters() {
    this.selectedCategory = 'all';
    this.searchTerm = '';
    this.filteredGames = this.games;
  }
}