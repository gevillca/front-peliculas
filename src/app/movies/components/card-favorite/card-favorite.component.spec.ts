import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFavoriteComponent } from './card-favorite.component';

describe('CardFavoriteComponent', () => {
  let component: CardFavoriteComponent;
  let fixture: ComponentFixture<CardFavoriteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardFavoriteComponent]
    });
    fixture = TestBed.createComponent(CardFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
