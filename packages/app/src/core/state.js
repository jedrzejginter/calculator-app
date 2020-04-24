import { add, subtract, divide, multiply } from "./operations";

export const initialState = Object.freeze({
  error: undefined,
  input: "",
  operator: undefined,
  result: 0,
});

export function cleanVal(v) {
  return v
    .replace(/^0{2,}$/, "0")
    .replace(/^0+([1-9])/, "$1")
    .replace(/\.{2,}/g, ".")
    .replace(/^\./, "0.");
}

export function onClear(state) {
  return {
    ...state,
    ...initialState,
  };
}

export function onCharacter(state, char) {
  return {
    ...state,
    input: cleanVal(`${state.input}${char}`),
  };
}

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

export function onSubmit(state) {
  const { operator, input, result } = state;

  let newError;
  let newResult = result;

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
      return state;
    }
  }

  return {
    ...state,
    ...initialState,
    error: newError,
    result: newResult,
  };
}
