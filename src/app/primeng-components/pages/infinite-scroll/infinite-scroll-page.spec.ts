import { InfiniteScrollPage } from './infinite-scroll-page';

describe('InfiniteScrollPage', () => {
  it('loads only the requested lesson range', () => {
    const component = new InfiniteScrollPage();

    component.loadLessons({ first: 10, last: 11 });

    expect(component.lessons[9]).toBeUndefined();
    expect(component.lessons[10]?.title).toBe('Lesson 11');
    expect(component.lessons[11]?.title).toBe('Lesson 12');
  });
});
