/** @__PURE__ */
export function add(a, b) {
  return a + b;
}

/** @__PURE__ */
export function subtract(a, b) {
  return a - b;
}

/** @__PURE__ */
export function multiply(a, b) {
  return a * b;
}

/** @__PURE__ */
export function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by 0");
  }

  return a / b;
}
