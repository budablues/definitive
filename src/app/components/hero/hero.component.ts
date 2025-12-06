import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // ← AGREGAR

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule], // ← AGREGAR RouterModule
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  @Output() scrollToSection = new EventEmitter<string>();

  onScrollToSection(sectionId: string) {
    this.scrollToSection.emit(sectionId);
  }

  // Método para navegar a otras páginas
  navigateToCatalog() {
    // Esto ahora se manejará con routerLink en el template
  }
}