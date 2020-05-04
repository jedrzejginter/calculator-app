import Head from "next/head";

import Calculator from "@/components/Calculator";
import useCalculator from "@/hooks/useCalculator";

function CalculatorWithState() {
  const { state, ...callbacks } = useCalculator();

  return (
    <Calculator
      display={state.display}
      error={state.error}
      onClear={callbacks.onClear}
      onDigit={callbacks.onDigit}
      onDot={callbacks.onDot}
      onOperator={callbacks.onOperator}
      onSubmit={callbacks.onSubmit}
    />
  );
}

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Calculator App</title>
        <meta name="description" content="Simple calculator" />
      </Head>
      <main css={{ padding: "1rem" }} data-testid="Home_Main">
        <CalculatorWithState />
      </main>
    </>
  );
}
