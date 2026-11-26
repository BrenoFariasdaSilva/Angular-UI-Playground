import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectCard } from './project-card';

@Component({
  imports: [ProjectCard],
  template: `
    <app-project-card>
      <p card-kicker>Angular</p>
      <h2 card-title>Projected title</h2>
      <span card-action>Active</span>
      <p>Projected body</p>
      <span card-footer>Projected footer</span>
    </app-project-card>
  `,
})
class ProjectionHost {}

describe('ProjectCard', () => {
  let fixture: ComponentFixture<ProjectionHost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectionHost],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectionHost);
    fixture.detectChanges();
  });

  it('renders content in the named and default projection slots', () => {
    const text = fixture.nativeElement.textContent as string;

    expect(text).toContain('Angular');
    expect(text).toContain('Projected title');
    expect(text).toContain('Active');
    expect(text).toContain('Projected body');
    expect(text).toContain('Projected footer');
  });
});
