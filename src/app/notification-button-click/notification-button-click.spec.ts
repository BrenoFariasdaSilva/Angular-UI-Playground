// TypeScript unit tests for the NotificationButtonClick component.
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationButtonClick } from './notification-button-click';

describe('NotificationButtonClick', () => {
  let component: NotificationButtonClick;
  let fixture: ComponentFixture<NotificationButtonClick>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationButtonClick],
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationButtonClick);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
