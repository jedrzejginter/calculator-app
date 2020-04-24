/**
 * Add two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number} Sum of two numbers
 */
export function add(a, b) {
  return a + b;
}

/**
 * Subtract two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number} Result of subtraction
 */
export function subtract(a, b) {
  return a - b;
}

/**
 * Multiply two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number} Result of multiplication
 */
export function multiply(a, b) {
  return a * b;
}

/**
 * Divide two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number} Result of division
 * @throws Will throw an error for division by 0.
 */
export function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by 0");
  }

  return a / b;
}
