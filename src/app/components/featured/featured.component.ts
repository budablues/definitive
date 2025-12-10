import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GameService } from '../../services/game.service';
import { Game } from '../../models/game.model';

@Component({
  selector: 'app-featured',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {
  featuredGames: Game[] = [];
  currentSlide = 0;

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.featuredGames = this.gameService.getFeaturedGames();
  }

  onImageError(event: any, game: Game) {
    console.warn(`No se pudo cargar la imagen de ${game.name}: ${game.imageUrl}`);
  }
  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.featuredGames.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.featuredGames.length) % this.featuredGames.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  getDiscountPrice(price: number, discount?: number): number {
    if (!discount) return price;
    return price * (1 - discount / 100);
  }
}