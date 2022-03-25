import {
  ComponentFixture,
  TestBed,
  tick,
  fakeAsync,
} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ListEpisodesComponent } from './list-episodes.component';
import { EpisodesService } from './../../shared/services/episodes.service';
import { EpisodesServiceMock } from './../../shared/mocks/episodes-service.mock';

describe('ListEpisodesComponent', () => {
  let component: ListEpisodesComponent;
  let fixture: ComponentFixture<ListEpisodesComponent>;
  let service: EpisodesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListEpisodesComponent],
      imports: [HttpClientTestingModule],
      providers: [
        { provide: EpisodesService, useClass: EpisodesServiceMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEpisodesComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(EpisodesService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getAllEpisodes', fakeAsync(() => {
    const getEpisodesSpy = spyOn(service, 'getAllEpisodes').and.callThrough();

    component.ngOnInit();
    tick(1000);

    expect(getEpisodesSpy).toHaveBeenCalled();
  }));

  it('should call getEpisodesPerPage', () => {
    const getEpisodesSpy = spyOn(service, 'getEpisodesPerPage').and.callThrough();

    component.loadNextPage();

    expect(getEpisodesSpy).toHaveBeenCalled();
  });
});
