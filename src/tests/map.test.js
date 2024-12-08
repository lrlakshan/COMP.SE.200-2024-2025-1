import map from '../map';

describe('map function', () => {
  test('maps clothing items to their prices', () => {
    const clothing = [
      { type: 'Shirt', price: 20 },
      { type: 'Pants', price: 40 },
      { type: 'Shoes', price: 60 },
    ];
    const getPrice = (item) => item.price;
    const output = map(clothing, getPrice);
    expect(output).toEqual([20, 40, 60]);
  });

  test('maps clothing items to uppercase type names', () => {
    const clothing = [
      { type: 'Shirt', price: 20 },
      { type: 'Pants', price: 40 },
      { type: 'Shoes', price: 60 },
    ];
    const toUpperCaseType = (item) => item.type.toUpperCase();
    const output = map(clothing, toUpperCaseType);
    expect(output).toEqual(['SHIRT', 'PANTS', 'SHOES']);
  });

  test('handles empty array of clothing items', () => {
    const clothing = [];
    const iteratee = jest.fn();
    const output = map(clothing, iteratee);
    expect(output).toEqual([]);
    expect(iteratee).not.toHaveBeenCalled();
  });

  test('passes value, index, and array to the iteratee', () => {
    const clothing = [
      { type: 'Shirt', price: 20 },
      { type: 'Pants', price: 40 },
      { type: 'Shoes', price: 60 },
    ];
    const mockIteratee = jest.fn((item, index, array) => `${item.type} is $${item.price + index}`);
    const output = map(clothing, mockIteratee);

    expect(output).toEqual(['Shirt is $20', 'Pants is $41', 'Shoes is $62']);
    expect(mockIteratee).toHaveBeenCalledTimes(3);
    expect(mockIteratee).toHaveBeenCalledWith({ type: 'Shirt', price: 20 }, 0, clothing);
    expect(mockIteratee).toHaveBeenCalledWith({ type: 'Pants', price: 40 }, 1, clothing);
    expect(mockIteratee).toHaveBeenCalledWith({ type: 'Shoes', price: 60 }, 2, clothing);
  });

  test('returns an empty array when input is null or undefined', () => {
    const iteratee = jest.fn();
    expect(map(null, iteratee)).toEqual([]);
    expect(map(undefined, iteratee)).toEqual([]);
    expect(iteratee).not.toHaveBeenCalled();
  });

  test('does not mutate the original clothing array', () => {
    const clothing = [
      { type: 'Shirt', price: 20 },
      { type: 'Pants', price: 40 },
      { type: 'Shoes', price: 60 },
    ];
    const clothingCopy = [...clothing];
    map(clothing, (item) => item.price * 2);
    expect(clothing).toEqual(clothingCopy); 
  });

  test('maps nested clothing arrays correctly', () => {
    const clothing = [
      [{ type: 'Shirt', price: 20 }, { type: 'Hat', price: 10 }],
      [{ type: 'Pants', price: 40 }],
    ];
    const flatten = (arr) => arr.map((item) => item.type).join(', ');
    const output = map(clothing, flatten);
    expect(output).toEqual(['Shirt, Hat', 'Pants']);
  });

  test('works with an iteratee that depends on index', () => {
    const clothing = [
      { type: 'Shirt', price: 20 },
      { type: 'Pants', price: 40 },
      { type: 'Shoes', price: 60 },
    ];
    const addIndexToPrice = (item, index) => ({ ...item, price: item.price + index });
    const output = map(clothing, addIndexToPrice);
    expect(output).toEqual([
      { type: 'Shirt', price: 20 },
      { type: 'Pants', price: 41 },
      { type: 'Shoes', price: 62 },
    ]);
  });

  test('throws an error if iteratee is not a function', () => {
    const clothing = [
      { type: 'Shirt', price: 20 },
      { type: 'Pants', price: 40 },
    ];
    expect(() => map(clothing, null)).toThrow(TypeError);
    expect(() => map(clothing, undefined)).toThrow(TypeError);
    expect(() => map(clothing, 'not a function')).toThrow(TypeError);
  });
});
