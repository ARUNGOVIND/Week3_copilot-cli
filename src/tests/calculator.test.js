/**
 * Unit Tests for Calculator Functions
 * 
 * Tests cover:
 * - Addition
 * - Subtraction
 * - Multiplication
 * - Division (including edge cases)
 */

const { add, subtract, multiply, divide } = require('../calculator');

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
// TEST COMPLETION
// ============================================

console.log('\n✓ All tests passed!');
