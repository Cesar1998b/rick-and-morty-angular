import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceCharacterComponent } from './place-character.component';

describe('PlaceCharacterComponent', () => {
  let component: PlaceCharacterComponent;
  let fixture: ComponentFixture<PlaceCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceCharacterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
