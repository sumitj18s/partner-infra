import SortIcon from '.';

describe('SortIcon', () => {
  it('should get the icon', () => {
    const value = SortIcon('foo');

    expect(value).toBeDefined();
  });
});
