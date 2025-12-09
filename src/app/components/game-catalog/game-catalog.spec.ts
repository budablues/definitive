import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCatalogComponent } from './game-catalog.component';

describe('GameCatalog', () => {
  let component: GameCatalogComponent;
  let fixture: ComponentFixture<GameCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameCatalogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameCatalogComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
