import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewQueries } from './view-queries';

describe('ViewQueries', () => {
  let fixture: ComponentFixture<ViewQueries>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewQueries],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewQueries);
    fixture.detectChanges();
  });

  it('clears the note and returns focus to the queried input', () => {
    const input = fixture.nativeElement.querySelector('#learning-note') as HTMLInputElement;
    input.value = 'Use viewChild';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    (fixture.nativeElement.querySelector('button.secondary') as HTMLButtonElement).click();
    fixture.detectChanges();

    expect(fixture.componentInstance.searchTerm()).toBe('');
    expect(document.activeElement).toBe(input);
  });
});
