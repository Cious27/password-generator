# Password Generator

This is a simple password generator built with JavaScript. It can create passwords of varying lengths and strengths (low, medium, and high).

## Features

- **Low Strength:** Includes lowercase letters and numbers.
- **Medium Strength:** Includes lowercase letters, uppercase letters, and numbers.
- **High Strength:** Includes lowercase letters, uppercase letters, numbers, and special symbols.

## Files

- **`generatePassword.js`**: The main function for generating passwords.
- **`generatePassword.test.js`**: Test cases for the `generatePassword` function using Jest.

## How to Use

The function `generatePassword(length, strength)` takes two arguments:

- **`length`**: The desired length of the password (a positive number).
- **`strength`**: The desired strength level, which can be `'low'`, `'medium'`, or `'high'`.

**Example:**

```javascript
const generatePassword = require('./generatePassword');

const weakPassword = generatePassword(8, 'low');
console.log(weakPassword); // Example: "a3b4c5d6"

const strongPassword = generatePassword(16, 'high');
console.log(strongPassword); // Example: "P@55w0rd!sStr0ng"
