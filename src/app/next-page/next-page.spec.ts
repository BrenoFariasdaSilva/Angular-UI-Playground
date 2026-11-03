// TypeScript unit tests for the NextPage component.
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { NextPage } from './next-page';

// Verify the standalone component can be instantiated in Angular's test environment.
describe('NextPage', () => {
  let component: NextPage;
  let fixture: ComponentFixture<NextPage>;

  // Configure the test module and create a component fixture before each test.
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextPage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(NextPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  // A basic smoke test confirming component creation succeeds.
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
