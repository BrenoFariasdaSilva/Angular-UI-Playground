import { StarRating } from './star-rating';

describe('StarRating', () => {
  it('writes and propagates the selected rating', () => {
    const rating = new StarRating();
    let changedValue = 0;

    rating.writeValue(2);
    rating.registerOnChange((value) => (changedValue = value));
    rating.select(4);

    expect(rating.value).toBe(4);
    expect(changedValue).toBe(4);
  });

  it('does not change its value while disabled', () => {
    const rating = new StarRating();

    rating.writeValue(2);
    rating.setDisabledState(true);
    rating.select(4);

    expect(rating.value).toBe(2);
  });
});
