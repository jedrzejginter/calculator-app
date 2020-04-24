import { useCallback, useState } from "react";

import { initialState, onSetOperation, onSubmit, onClear, onCharacter } from "./manager";

export default function useCalculator() {
  const [state, setState] = useState(initialState);

  const handleSetOperation = useCallback(
    (operator) => {
      setState(onSetOperation(state, operator));
    },
    [state],
  );

  const handleSubmit = useCallback(() => {
    setState(onSubmit(state));
  }, [state]);

  const handleDigit = useCallback(
    (digit) => {
      setState(onCharacter(state, digit));
    },
    [state],
  );

  const handleDot = useCallback(() => {
    setState(onCharacter(state, "."));
  }, [state]);

  const handleClear = useCallback(() => {
    setState(onClear(state));
  }, [state]);

  return {
    state: {
      display: state.acc || state.result.toString(),
      error: state.err,
    },
    onOperator: handleSetOperation,
    onDot: handleDot,
    onSubmit: handleSubmit,
    onDigit: handleDigit,
    onClear: handleClear,
  };
}
