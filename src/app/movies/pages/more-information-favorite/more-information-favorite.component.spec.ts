import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreInformationFavoriteComponent } from './more-information-favorite.component';

describe('MoreInformationFavoriteComponent', () => {
  let component: MoreInformationFavoriteComponent;
  let fixture: ComponentFixture<MoreInformationFavoriteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoreInformationFavoriteComponent]
    });
    fixture = TestBed.createComponent(MoreInformationFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
