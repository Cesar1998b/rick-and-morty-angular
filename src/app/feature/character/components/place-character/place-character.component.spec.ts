import {
  ComponentFixture,
  TestBed,
  tick,
  fakeAsync,
} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PlaceCharacterComponent } from './place-character.component';
import { CharacterService } from './../../shared/services/character.service';
import { CharacterServiceMock } from './../../shared/mocks/character-service.mock';

describe('PlaceCharacterComponent', () => {
  let component: PlaceCharacterComponent;
  let fixture: ComponentFixture<PlaceCharacterComponent>;
  let service: CharacterService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlaceCharacterComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        { provide: CharacterService, useClass: CharacterServiceMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceCharacterComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(CharacterService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getLocation', fakeAsync(() => {
    const getEpisodesSpy = spyOn(service, 'getLocation').and.callThrough();

    component.ngOnInit();
    tick(1000);

    expect(getEpisodesSpy).toHaveBeenCalled();
  }));
});
