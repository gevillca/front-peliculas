import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreInformationMovieComponent } from './more-information-movie.component';

describe('MoreInformationMovieComponent', () => {
  let component: MoreInformationMovieComponent;
  let fixture: ComponentFixture<MoreInformationMovieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoreInformationMovieComponent]
    });
    fixture = TestBed.createComponent(MoreInformationMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
