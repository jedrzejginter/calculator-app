import { useCallback, useState } from "react";

import { initialState, onOperator, onSubmit, onClear, onCharacter } from "@project/core";

export default function useCalculator() {
  const [state, setState] = useState(initialState);

  const handleDigit = useCallback(
    (digit) => {
      setState(onCharacter(state, digit));
    },
    [state],
  );

  const handleDot = useCallback(() => {
    setState(onCharacter(state, "."));
  }, [state]);

  const handleOperator = useCallback(
    (operator) => {
      setState(onOperator(state, operator));
    },
    [state],
  );

  const handleSubmit = useCallback(() => {
    setState(onSubmit(state));
  }, [state]);

  const handleClear = useCallback(() => {
    setState(onClear(state));
  }, [state]);

  return {
    state: {
      display: state.input || state.result.toString(),
      error: state.error,
    },
    onOperator: handleOperator,
    onDot: handleDot,
    onSubmit: handleSubmit,
    onDigit: handleDigit,
    onClear: handleClear,
  };
}
