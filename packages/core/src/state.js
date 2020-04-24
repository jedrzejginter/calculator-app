import { add, subtract, divide, multiply } from "./operations";

/**
 * @typedef {("+"|"-"|"*"|"/")} BinaryOperator
 *
 * @typedef {Object} CalculatorState
 * @property {(string|undefined)} error
 * @property {string} input
 * @property {(BinaryOperator|undefined)} operator
 */

/**
 * Initial, non-mutable initial state for calculator.
 * @type {CalculatorState}
 */
export const initialState = Object.freeze({
  error: undefined,
  input: "",
  operator: undefined,
  result: 0,
});

/**
 * Parse and clean up user input.
 * @param {string} value User input.
 * @returns {string} Modified input.
 */
export function cleanVal(value) {
  return value
    .replace(/^0{2,}$/, "0")
    .replace(/^0+([1-9])/, "$1")
    .replace(/\.{2,}/g, ".")
    .replace(/^\./, "0.");
}

/**
 * Handles operation of clearing calculator state.
 * @param {CalculatorState} state Current calculator state
 * @returns {CalculatorState} New calculator state (reset to initial one)
 */
export function onClear(state) {
  return {
    ...state,
    ...initialState,
  };
}

/**
 * Called when user wants to modify input by appending a new character to it.
 * @param {CalculatorState} state Current calculator state
 * @param {string} char Character to append
 * @returns {CalculatorState} New calculator state with updated input
 */
export function onCharacter(state, char) {
  return {
    ...state,
    input: cleanVal(`${state.input}${char}`),
  };
}

/**
 * Sets operator for binary operation that will be performed on calculator submit.
 * When operator is set when input is non empty, it also copies its value to result,
 * so user can type value for right-hand side of binary operation.
 * @param {CalculatorState} state Current calculator state
 * @param {BinaryOperator} operator Character to append
 * @returns {CalculatorState} New calculator state with updated input, result and input.
 */
export function onOperator(state, operator) {
  const hasEmptyInput = state.input === "";

  return {
    ...state,
    operator,
    error: undefined,
    input: hasEmptyInput ? state.input : "",
    result: hasEmptyInput ? state.result : parseFloat(state.input),
  };
}

/**
 * Handles calculator submit by performing calculation represented by current state.
 * Also resets the state of the calculator after operation has been made.
 * @param {CalculatorState} state Current calculator state
 * @returns {CalculatorState} New calculator state with result of operation.
 */
export function onSubmit(state) {
  const { operator, input, result } = state;

  let newError;
  let newResult = result;

  // If user types something into calculator input, selects the operator and right after that
  // it requests the result, we treat result (left-hand side) as input (right-hand side).
  //
  // Example:
  // 1. Input is 42
  // 2. Operator is set to "+" (addition).
  // 3. Calculator is submitted with empty input.
  // 4. The operation will be performed as input would be current result (so "42 + 42")
  const inputValue = parseFloat(input || result.toString());

  switch (operator) {
    case "+": {
      newResult = add(result, inputValue);
      break;
    }
    case "-": {
      newResult = subtract(result, inputValue);
      break;
    }
    case "*": {
      newResult = multiply(result, inputValue);
      break;
    }
    case "/": {
      try {
        newResult = divide(result, inputValue);
      } catch (e) {
        newError = e.message;
        newResult = 0;
      }
      break;
    }
    default: {
      // Do nothing if we don't recognize the operator or it's not set yet.
      return state;
    }
  }

  // Update result and set error message if some error occured.
  return {
    ...state,
    ...initialState,
    error: newError,
    result: newResult,
  };
}
