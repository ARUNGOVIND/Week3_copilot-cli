

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

// CLI interface
function main() {
  const args = process.argv.slice(2);

  if (args.length < 3) {
    console.log('Usage: calculator.js <number1> <operator> <number2>');
    console.log('');
    console.log('Supported operators:');
    console.log('  +  : Addition');
    console.log('  -  : Subtraction');
    console.log('  *  : Multiplication');
    console.log('  /  : Division');
    console.log('');
    console.log('Examples:');
    console.log('  node calculator.js 10 + 5');
    console.log('  node calculator.js 10 - 3');
    console.log('  node calculator.js 4 * 7');
    console.log('  node calculator.js 20 / 4');
    process.exit(1);
  }

  const num1 = parseFloat(args[0]);
  const operator = args[1];
  const num2 = parseFloat(args[2]);

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
      default:
        console.error(`Error: Unknown operator '${operator}'`);
        console.error('Supported operators: +, -, *, /');
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
};

// Run CLI if this file is executed directly
if (require.main === module) {
  main();
}
