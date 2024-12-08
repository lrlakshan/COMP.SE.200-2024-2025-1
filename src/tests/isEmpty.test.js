import isEmpty from '../isEmpty';

describe('isEmpty function with clothing and prices', () => {
  test('returns true for null and undefined', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  test('returns true for an empty clothing array', () => {
    const clothing = [];
    expect(isEmpty(clothing)).toBe(true);
  });

  test('returns false for a non-empty clothing array', () => {
    const clothing = [
      { type: 'T-shirt', price: 20 },
      { type: 'Jeans', price: 50 },
    ];
    expect(isEmpty(clothing)).toBe(false);
  });

  test('returns true for an empty clothing object', () => {
    const clothing = {};
    expect(isEmpty(clothing)).toBe(true);
  });

  test('returns false for a clothing object with entries', () => {
    const clothing = { type: 'Jacket', price: 100 };
    expect(isEmpty(clothing)).toBe(false);
  });

  test('returns false for a clothing Map with entries', () => {
    const clothingMap = new Map();
    clothingMap.set('T-shirt', 25);
    clothingMap.set('Shoes', 60);
    expect(isEmpty(clothingMap)).toBe(false);
  });

  test('returns true for an empty clothing Map', () => {
    const clothingMap = new Map();
    expect(isEmpty(clothingMap)).toBe(true);
  });

  test('returns false for a clothing Set with entries', () => {
    const clothingSet = new Set(['Hat', 'Scarf', 'Gloves']);
    expect(isEmpty(clothingSet)).toBe(false);
  });

  test('returns true for an empty clothing Set', () => {
    const clothingSet = new Set();
    expect(isEmpty(clothingSet)).toBe(true);
  });

  test('handles empty and non-empty nested structures', () => {
    const clothing = {
      items: [],
      details: { type: 'Sweater', price: 45 },
    };
    expect(isEmpty(clothing)).toBe(false);
  });

  test('handles an empty arguments object', () => {
    const emptyArguments = (function () {
      return arguments;
    })();
    expect(isEmpty(emptyArguments)).toBe(true);
  });

  test('handles non-empty arguments object with clothing items', () => {
    const nonEmptyArguments = (function () {
      return arguments;
    })({ type: 'Shirt', price: 30 }, { type: 'Pants', price: 60 });
    expect(isEmpty(nonEmptyArguments)).toBe(false);
  });

  test('handles empty and non-empty typed arrays with clothing prices', () => {
    const emptyTypedArray = new Uint8Array([]);
    const nonEmptyTypedArray = new Uint8Array([10, 20, 30]); // Example prices
    expect(isEmpty(emptyTypedArray)).toBe(true);
    expect(isEmpty(nonEmptyTypedArray)).toBe(false);
  });

  test('returns true for a buffer with no data', () => {
    const buffer = Buffer.alloc(0);
    expect(isEmpty(buffer)).toBe(true);
  });

  test('returns false for a buffer with clothing prices', () => {
    const buffer = Buffer.from([10, 20, 30]); // Example prices
    expect(isEmpty(buffer)).toBe(false);
  });

  test('does not consider a non-empty string as empty', () => {
    expect(isEmpty('Clothing Inventory')).toBe(false);
  });

  test('considers an empty string as empty', () => {
    expect(isEmpty('')).toBe(true);
  });
});
