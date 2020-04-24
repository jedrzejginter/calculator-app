import { add, subtract, divide, multiply } from "./operations";

export const initialState = Object.freeze({
  err: undefined,
  op: undefined,
  result: 0,
  acc: "",
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

export function onAccUpdate(state, val) {
  return {
    ...state,
    acc: val,
  };
}

export function onCharacter(state, char) {
  const newAcc = cleanVal(`${state.acc}${char}`);
  return onAccUpdate(state, newAcc);
}

export function onSetOperation(state, op) {
  const hasEmptyAcc = state.acc === "";

  return {
    ...state,
    op,
    acc: hasEmptyAcc ? state.acc : "",
    err: undefined,
    result: hasEmptyAcc ? state.result : parseFloat(state.acc),
  };
}

export function onSubmit(state) {
  const { op, acc, result } = state;

  let newErr;
  let newResult = result;

  const x = result;
  const y = parseFloat(acc || result.toString());

  switch (op) {
    case "+": {
      newResult = add(x, y);
      break;
    }
    case "-": {
      newResult = subtract(x, y);
      break;
    }
    case "*": {
      newResult = multiply(x, y);
      break;
    }
    case "/": {
      try {
        newResult = divide(x, y);
      } catch (err) {
        newErr = err.message;
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
    acc: "",
    err: newErr,
    op: undefined,
    result: newResult,
  };
}
