// TypeScript unit tests for the Counter component and its signal behavior.
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Counter } from './counter';

describe('Counter', () => {
  let component: Counter;
  let fixture: ComponentFixture<Counter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Counter],
    }).compileComponents();

    fixture = TestBed.createComponent(Counter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment the signal count', () => {
    component.increment();
    component.increment();

    expect(component.count()).toBe(2);
  });
});
