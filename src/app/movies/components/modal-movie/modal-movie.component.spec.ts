import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMovieComponent } from './modal-movie.component';

describe('ModalMovieComponent', () => {
  let component: ModalMovieComponent;
  let fixture: ComponentFixture<ModalMovieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalMovieComponent]
    });
    fixture = TestBed.createComponent(ModalMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
