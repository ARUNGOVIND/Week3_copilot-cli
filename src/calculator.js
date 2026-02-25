
/**
 * Node.js CLI Calculator App
 * 
 * Supported Operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (×)
 * - Division (÷)
 */

// Addition operation
function add(a, b) {
  return a + b;
}

// Subtraction operation
function subtract(a, b) {
  return a - b;
}

// Multiplication operation
function multiply(a, b) {
  return a * b;
}

// Division operation with error handling
function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

// Modulo operation - returns remainder of a divided by b
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Cannot perform modulo with zero');
  }
  return a % b;
}

// Exponentiation operation - returns base raised to the exponent
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// Square root operation with error handling for negative numbers
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Cannot calculate square root of negative number');
  }
  return Math.sqrt(n);
}

// CLI interface
function main() {
  const args = process.argv.slice(2);

  if (args.length < 2) {
    console.log('Usage: calculator.js <number1> <operator> <number2>');
    console.log('       calculator.js sqrt <number>');
    console.log('');
    console.log('Supported operators:');
    console.log('  +    : Addition');
    console.log('  -    : Subtraction');
    console.log('  *    : Multiplication');
    console.log('  /    : Division');
    console.log('  %    : Modulo (remainder)');
    console.log('  ^    : Exponentiation (power)');
    console.log('  sqrt : Square root');
    console.log('');
    console.log('Examples:');
    console.log('  node calculator.js 10 + 5');
    console.log('  node calculator.js 10 - 3');
    console.log('  node calculator.js 4 * 7');
    console.log('  node calculator.js 20 / 4');
    console.log('  node calculator.js 17 % 5');
    console.log('  node calculator.js 2 ^ 8');
    console.log('  node calculator.js sqrt 16');
    process.exit(1);
  }

  const first = args[0];
  const second = args[1];
  const third = args[2];

  // Handle sqrt special case
  if (first === 'sqrt' && second) {
    try {
      const num = parseFloat(second);
      if (isNaN(num)) {
        console.error('Error: Invalid number format');
        process.exit(1);
      }
      const result = squareRoot(num);
      console.log(`sqrt(${num}) = ${result}`);
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
    }
    return;
  }

  const num1 = parseFloat(first);
  const operator = second;
  const num2 = parseFloat(third);

  if (isNaN(num1) || isNaN(num2)) {
    console.error('Error: Invalid number format');
    process.exit(1);
  }

  let result;

  try {
    switch (operator) {
      case '+':
        result = add(num1, num2);
        break;
      case '-':
        result = subtract(num1, num2);
        break;
      case '*':
        result = multiply(num1, num2);
        break;
      case '/':
        result = divide(num1, num2);
        break;
      case '%':
        result = modulo(num1, num2);
        break;
      case '^':
        result = power(num1, num2);
        break;
      default:
        console.error(`Error: Unknown operator '${operator}'`);
        console.error('Supported operators: +, -, *, /, %, ^, sqrt');
        process.exit(1);
    }

    console.log(`${num1} ${operator} ${num2} = ${result}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

// Export functions for module usage
module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  squareRoot,
};

// Run CLI if this file is executed directly
if (require.main === module) {
  main();
}
