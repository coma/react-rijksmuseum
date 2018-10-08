import dots from './dots';

describe('the dots util', () => {
  it('should add some dots to the pagination', () => {
    expect(dots(0, 4)).toBe('0,1,2,3');
    expect(dots(0, 20)).toBe('0,1,2,3,4,5,...,19');
    expect(dots(1, 20)).toBe('0,1,2,3,4,5,...,19');
    expect(dots(2, 20)).toBe('0,1,2,3,4,5,...,19');
    expect(dots(3, 20)).toBe('0,1,2,3,4,5,...,19');
    expect(dots(4, 20)).toBe('0,...,3,4,5,6,7,...,19');
    expect(dots(5, 20)).toBe('0,...,4,5,6,7,8,...,19');
    expect(dots(6, 20)).toBe('0,...,5,6,7,8,9,...,19');
    expect(dots(7, 20)).toBe('0,...,6,7,8,9,10,...,19');
    expect(dots(8, 20)).toBe('0,...,7,8,9,10,11,...,19');
    expect(dots(9, 20)).toBe('0,...,8,9,10,11,12,...,19');
    expect(dots(10, 20)).toBe('0,...,9,10,11,12,13,...,19');
    expect(dots(11, 20)).toBe('0,...,10,11,12,13,14,...,19');
    expect(dots(12, 20)).toBe('0,...,11,12,13,14,15,...,19');
    expect(dots(13, 20)).toBe('0,...,12,13,14,15,16,...,19');
    expect(dots(14, 20)).toBe('0,...,13,14,15,16,17,...,19');
    expect(dots(15, 20)).toBe('0,...,14,15,16,17,18,19');
    expect(dots(16, 20)).toBe('0,...,14,15,16,17,18,19');
    expect(dots(17, 20)).toBe('0,...,14,15,16,17,18,19');
    expect(dots(18, 20)).toBe('0,...,14,15,16,17,18,19');
    expect(dots(19, 20)).toBe('0,...,14,15,16,17,18,19');
  });
});
