import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Output() scrollToSection = new EventEmitter<string>();
  @Output() scrollToTop = new EventEmitter<void>();

  currentYear = new Date().getFullYear();

  onScrollToSection(sectionId: string, event: Event) {
    event.preventDefault();
    this.scrollToSection.emit(sectionId);
  }

  onScrollToTop(event: Event) {
    event.preventDefault();
    this.scrollToTop.emit();
  }
}