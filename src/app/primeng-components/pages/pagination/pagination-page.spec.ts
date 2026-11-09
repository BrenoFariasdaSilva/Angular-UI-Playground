import { PaginationPage } from './pagination-page';

describe('PaginationPage', () => {
  it('shows the selected page of lessons', () => {
    const component = new PaginationPage();

    component.changePage({ first: 4, rows: 4 });

    expect(component.visibleLessons).toEqual(['Control flow', 'Pipes', 'Route guards', 'RxJS streams']);
  });
});
