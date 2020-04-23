import { useCallback, useState } from "react";

import { add, subtract, divide, multiply } from "./operations";

export default function useCalculator() {
  const [err, setErr] = useState(undefined);
  const [op, setOp] = useState(undefined);
  const [result, setResult] = useState(0);
  const [acc, setAcc] = useState(0);

  const handleReset = useCallback(() => {
    setResult(0);
    setAcc(0);
    setErr(undefined);
    setOp(undefined);
  }, []);

  const handleSubmit = useCallback(() => {
    let newErr;
    let newResult = result;

    switch (op) {
      case "+": {
        newResult = add(result, acc);
        break;
      }
      case "-": {
        newResult = subtract(result, acc);
        break;
      }
      case "*": {
        newResult = multiply(result, acc);
        break;
      }
      case "/": {
        try {
          newResult = divide(result, acc);
        } catch {
          newErr = "div0";
        }
        break;
      }
      default: {
        // Do nothing when some unknown operation has been requested.
        return;
      }
    }

    setResult(newResult);
    setAcc(0);

    if (newErr !== err) {
      setErr(newErr);
    }
  }, [acc, err, result, op]);

  return {
    err,
    acc,
    setAcc,
    result,
    setResult,
    submit: handleSubmit,
    op,
    setOp,
    reset: handleReset,
  };
}
