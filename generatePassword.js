function generatePassword(length, strength) {
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()_+-=[]{}|;:",.<>/?';

  let allChars = '';

  switch (strength) {
    case 'low':
      allChars = lowercaseChars + numberChars;
      break;
    case 'medium':
      allChars = lowercaseChars + uppercaseChars + numberChars;
      break;
    case 'high':
      allChars = lowercaseChars + uppercaseChars + numberChars + symbolChars;
      break;
    default:
      throw new Error('Invalid strength level provided.');
  }

  if (length <= 0) {
    throw new Error('Password length must be a positive number.');
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  return password;
}

// Export the function for testing
module.exports = generatePassword;
