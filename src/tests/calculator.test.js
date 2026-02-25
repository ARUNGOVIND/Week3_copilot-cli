/**
 * Unit Tests for Calculator Functions
 * 
 * Tests cover:
 * - Addition
 * - Subtraction
 * - Multiplication
 * - Division (including edge cases)
 * - Modulo
 * - Exponentiation (Power)
 * - Square Root
 */

const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

// Simple test runner using assert
const assert = require('assert');

function test(description, fn) {
  try {
    fn();
    console.log(`✓ ${description}`);
  } catch (error) {
    console.error(`✗ ${description}`);
    console.error(`  ${error.message}`);
    process.exit(1);
  }
}

// ============================================
// ADDITION TESTS
// ============================================

test('Addition: 2 + 3 = 5', () => {
  assert.strictEqual(add(2, 3), 5);
});

test('Addition: 10 + 0 = 10', () => {
  assert.strictEqual(add(10, 0), 10);
});

test('Addition: -5 + 10 = 5', () => {
  assert.strictEqual(add(-5, 10), 5);
});

test('Addition: -3 + (-2) = -5', () => {
  assert.strictEqual(add(-3, -2), -5);
});

test('Addition: 0.5 + 0.5 = 1', () => {
  assert.strictEqual(add(0.5, 0.5), 1);
});

test('Addition: 100 + 200 = 300', () => {
  assert.strictEqual(add(100, 200), 300);
});

// ============================================
// SUBTRACTION TESTS
// ============================================

test('Subtraction: 10 - 4 = 6', () => {
  assert.strictEqual(subtract(10, 4), 6);
});

test('Subtraction: 5 - 5 = 0', () => {
  assert.strictEqual(subtract(5, 5), 0);
});

test('Subtraction: 3 - 10 = -7', () => {
  assert.strictEqual(subtract(3, 10), -7);
});

test('Subtraction: -5 - (-3) = -2', () => {
  assert.strictEqual(subtract(-5, -3), -2);
});

test('Subtraction: 10.5 - 0.5 = 10', () => {
  assert.strictEqual(subtract(10.5, 0.5), 10);
});

test('Subtraction: 0 - 100 = -100', () => {
  assert.strictEqual(subtract(0, 100), -100);
});

// ============================================
// MULTIPLICATION TESTS
// ============================================

test('Multiplication: 45 * 2 = 90', () => {
  assert.strictEqual(multiply(45, 2), 90);
});

test('Multiplication: 5 * 0 = 0', () => {
  assert.strictEqual(multiply(5, 0), 0);
});

test('Multiplication: -3 * 4 = -12', () => {
  assert.strictEqual(multiply(-3, 4), -12);
});

test('Multiplication: -2 * -5 = 10', () => {
  assert.strictEqual(multiply(-2, -5), 10);
});

test('Multiplication: 2.5 * 4 = 10', () => {
  assert.strictEqual(multiply(2.5, 4), 10);
});

test('Multiplication: 7 * 8 = 56', () => {
  assert.strictEqual(multiply(7, 8), 56);
});

test('Multiplication: 1 * 100 = 100', () => {
  assert.strictEqual(multiply(1, 100), 100);
});

// ============================================
// DIVISION TESTS
// ============================================

test('Division: 20 / 5 = 4', () => {
  assert.strictEqual(divide(20, 5), 4);
});

test('Division: 10 / 2 = 5', () => {
  assert.strictEqual(divide(10, 2), 5);
});

test('Division: 7 / 2 = 3.5', () => {
  assert.strictEqual(divide(7, 2), 3.5);
});

test('Division: -10 / 2 = -5', () => {
  assert.strictEqual(divide(-10, 2), -5);
});

test('Division: -20 / -4 = 5', () => {
  assert.strictEqual(divide(-20, -4), 5);
});

test('Division: 0 / 5 = 0', () => {
  assert.strictEqual(divide(0, 5), 0);
});

test('Division: 100 / 1 = 100', () => {
  assert.strictEqual(divide(100, 1), 100);
});

// ============================================
// DIVISION BY ZERO TESTS (Edge Cases)
// ============================================

test('Division by Zero: 10 / 0 throws error', () => {
  assert.throws(
    () => divide(10, 0),
    (error) => {
      return error.message === 'Cannot divide by zero';
    }
  );
});

test('Division by Zero: 0 / 0 throws error', () => {
  assert.throws(
    () => divide(0, 0),
    (error) => {
      return error.message === 'Cannot divide by zero';
    }
  );
});

test('Division by Zero: -5 / 0 throws error', () => {
  assert.throws(
    () => divide(-5, 0),
    (error) => {
      return error.message === 'Cannot divide by zero';
    }
  );
});

// ============================================
// MODULO TESTS
// ============================================

test('Modulo: 5 % 2 = 1', () => {
  assert.strictEqual(modulo(5, 2), 1);
});

test('Modulo: 17 % 5 = 2', () => {
  assert.strictEqual(modulo(17, 5), 2);
});

test('Modulo: 10 % 3 = 1', () => {
  assert.strictEqual(modulo(10, 3), 1);
});

test('Modulo: 20 % 6 = 2', () => {
  assert.strictEqual(modulo(20, 6), 2);
});

test('Modulo: 7 % 7 = 0', () => {
  assert.strictEqual(modulo(7, 7), 0);
});

test('Modulo: -10 % 3 = -1', () => {
  assert.strictEqual(modulo(-10, 3), -1);
});

test('Modulo: 10 % -3 = 1', () => {
  assert.strictEqual(modulo(10, -3), 1);
});

test('Modulo: 0 % 5 = 0', () => {
  assert.strictEqual(modulo(0, 5), 0);
});

// ============================================
// MODULO BY ZERO TESTS (Edge Cases)
// ============================================

test('Modulo by Zero: 10 % 0 throws error', () => {
  assert.throws(
    () => modulo(10, 0),
    (error) => {
      return error.message === 'Cannot perform modulo with zero';
    }
  );
});

test('Modulo by Zero: 5 % 0 throws error', () => {
  assert.throws(
    () => modulo(5, 0),
    (error) => {
      return error.message === 'Cannot perform modulo with zero';
    }
  );
});

// ============================================
// EXPONENTIATION/POWER TESTS
// ============================================

test('Power: 2 ^ 3 = 8', () => {
  assert.strictEqual(power(2, 3), 8);
});

test('Power: 2 ^ 8 = 256', () => {
  assert.strictEqual(power(2, 8), 256);
});

test('Power: 5 ^ 2 = 25', () => {
  assert.strictEqual(power(5, 2), 25);
});

test('Power: 10 ^ 0 = 1', () => {
  assert.strictEqual(power(10, 0), 1);
});

test('Power: 3 ^ 0 = 1', () => {
  assert.strictEqual(power(3, 0), 1);
});

test('Power: 2 ^ -1 = 0.5', () => {
  assert.strictEqual(power(2, -1), 0.5);
});

test('Power: 4 ^ 0.5 = 2', () => {
  assert.strictEqual(power(4, 0.5), 2);
});

test('Power: 27 ^ (1/3) = 3', () => {
  assert.strictEqual(power(27, 1/3), 3);
});

test('Power: -2 ^ 2 = 4', () => {
  assert.strictEqual(power(-2, 2), 4);
});

test('Power: -2 ^ 3 = -8', () => {
  assert.strictEqual(power(-2, 3), -8);
});

test('Power: 0 ^ 5 = 0', () => {
  assert.strictEqual(power(0, 5), 0);
});

// ============================================
// SQUARE ROOT TESTS
// ============================================

test('Square Root: √16 = 4', () => {
  assert.strictEqual(squareRoot(16), 4);
});

test('Square Root: √25 = 5', () => {
  assert.strictEqual(squareRoot(25), 5);
});

test('Square Root: √2 ≈ 1.414', () => {
  assert.strictEqual(squareRoot(2), Math.sqrt(2));
});

test('Square Root: √0 = 0', () => {
  assert.strictEqual(squareRoot(0), 0);
});

test('Square Root: √1 = 1', () => {
  assert.strictEqual(squareRoot(1), 1);
});

test('Square Root: √100 = 10', () => {
  assert.strictEqual(squareRoot(100), 10);
});

test('Square Root: √144 = 12', () => {
  assert.strictEqual(squareRoot(144), 12);
});

test('Square Root: √0.25 = 0.5', () => {
  assert.strictEqual(squareRoot(0.25), 0.5);
});

// ============================================
// SQUARE ROOT NEGATIVE NUMBER TESTS (Edge Cases)
// ============================================

test('Square Root Negative: √(-4) throws error', () => {
  assert.throws(
    () => squareRoot(-4),
    (error) => {
      return error.message === 'Cannot calculate square root of negative number';
    }
  );
});

test('Square Root Negative: √(-1) throws error', () => {
  assert.throws(
    () => squareRoot(-1),
    (error) => {
      return error.message === 'Cannot calculate square root of negative number';
    }
  );
});

test('Square Root Negative: √(-100) throws error', () => {
  assert.throws(
    () => squareRoot(-100),
    (error) => {
      return error.message === 'Cannot calculate square root of negative number';
    }
  );
});

// ============================================
// TEST COMPLETION
// ============================================

console.log('\n✓ All tests passed!');
