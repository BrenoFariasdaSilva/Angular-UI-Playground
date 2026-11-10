import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RemoteDataExplorer } from './remote-data-explorer';

describe('RemoteDataExplorer', () => {
  let fixture: ComponentFixture<RemoteDataExplorer>;
  let httpTesting: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoteDataExplorer],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(RemoteDataExplorer);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpTesting.verify());

  it('loads and filters the local learning topics', () => {
    fixture.detectChanges();
    httpTesting.expectOne('data/angular-learning-topics.json').flush([
      { id: 1, title: 'Signals', category: 'State', description: 'Reactive values.' },
      { id: 2, title: 'Route guards', category: 'Routing', description: 'Navigation control.' },
    ]);

    fixture.componentInstance.search.set('routing');

    expect(fixture.componentInstance.filteredTopics()).toEqual([
      { id: 2, title: 'Route guards', category: 'Routing', description: 'Navigation control.' },
    ]);
  });
});
