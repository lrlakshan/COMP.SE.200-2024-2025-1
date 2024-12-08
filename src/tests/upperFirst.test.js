import upperFirst from '../upperFirst';

describe('upperFirst function', () => {
  test('capitalizes the first character of a lowercase string', () => {
    const input = 't-shirt';
    const output = upperFirst(input);
    expect(output).toBe('T-shirt');
  });

  test('returns the same string if the first character is already uppercase', () => {
    const input = 'Jeans';
    const output = upperFirst(input);
    expect(output).toBe('Jeans');
  });

  test('works with single-character strings', () => {
    const input = 's';
    const output = upperFirst(input);
    expect(output).toBe('S');
  });

  test('handles an empty string gracefully', () => {
    const input = '';
    const output = upperFirst(input);
    expect(output).toBe('');
  });

  test('does not affect the rest of the string', () => {
    const input = 'hat is $25';
    const output = upperFirst(input);
    expect(output).toBe('Hat is $25');
  });

  test('handles strings with special characters at the start', () => {
    const input = '!special offer';
    const output = upperFirst(input);
    expect(output).toBe('!special offer');
  });

  test('handles strings with numbers at the start', () => {
    const input = '1st place';
    const output = upperFirst(input);
    expect(output).toBe('1st place');
  });

  test('handles strings with spaces at the start', () => {
    const input = '   trousers';
    const output = upperFirst(input);
    expect(output).toBe('   trousers'); // Leading spaces remain unchanged
  });

  test('works with multi-word strings', () => {
    const input = 'jackets and coats';
    const output = upperFirst(input);
    expect(output).toBe('Jackets and coats');
  });

  test('handles strings in uppercase', () => {
    const input = 'JACKET';
    const output = upperFirst(input);
    expect(output).toBe('JACKET');
  });

  test('handles non-alphabetic first characters in Unicode strings', () => {
    const input = '帽子 is a hat in Chinese';
    const output = upperFirst(input);
    expect(output).toBe('帽子 is a hat in Chinese');
  });
});
