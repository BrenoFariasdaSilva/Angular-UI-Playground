import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  ActivatedRouteSnapshot,
  convertToParamMap,
  provideRouter,
  RedirectCommand,
  RouterStateSnapshot,
} from '@angular/router';
import { UserDetails } from './user-details';
import { userResolver } from './user.resolver';

describe('UserDetails', () => {
  let fixture: ComponentFixture<UserDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDetails],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(UserDetails);
  });

  it('renders the profile resolved for a route', () => {
    fixture.componentRef.setInput('id', 'ada');
    fixture.componentRef.setInput('user', {
      id: 'ada',
      name: 'Ada Lovelace',
      role: 'Frontend Engineer',
      location: 'London, UK',
      bio: 'Builds thoughtful interfaces and enjoys exploring new browser capabilities.',
    });
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Ada Lovelace');
    expect(fixture.nativeElement.textContent).toContain('Current route: /users/ada');
  });

  it('redirects an unknown route user to the home page', () => {
    const result = TestBed.runInInjectionContext(() =>
      userResolver(
        { paramMap: convertToParamMap({ id: 'unknown' }) } as ActivatedRouteSnapshot,
        {} as RouterStateSnapshot,
      ),
    );

    expect(result).toBeInstanceOf(RedirectCommand);
  });
});
