const generatePassword = require('./generatePassword');

describe('generatePassword', () => {

  // Password Length Validation
  test('should throw an error for a non-positive password length', () => {
    expect(() => generatePassword(0, 'high')).toThrow('Password length must be a positive number.');
    expect(() => generatePassword(-5, 'high')).toThrow('Password length must be a positive number.');
  });

  // Strength Validation
  test('should throw an error for an invalid strength level', () => {
    expect(() => generatePassword(10, 'invalid')).toThrow('Invalid strength level provided.');
  });

  // Low strength password check
  test('should generate a low-strength password of the correct length', () => {
    const password = generatePassword(8, 'low');
    expect(password.length).toBe(8);
  });

  // Medium strength password check
  test('should generate a medium-strength password of the correct length', () => {
    const password = generatePassword(12, 'medium');
    expect(password.length).toBe(12);
  });

  // High strength password check
  test('should generate a high-strength password of the correct length', () => {
    const password = generatePassword(16, 'high');
    expect(password.length).toBe(16);
  });
});
