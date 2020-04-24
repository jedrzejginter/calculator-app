import Head from "next/head";

import Calculator from "@/components/Calculator";
import useCalculator from "@/core/hook";

function CalculatorWithState() {
  const { state, ...callbacks } = useCalculator();

  return (
    <Calculator
      display={state.display}
      error={state.error}
      onDigit={callbacks.onDigit}
      onDot={callbacks.onDot}
      onOperator={callbacks.onOperator}
      onClear={callbacks.onClear}
      onSubmit={callbacks.onSubmit}
    />
  );
}

export default function HomePage() {
  return (
    <>
      <Head>
        <title>McKinsey Demo</title>
        <meta name="description" content="Simple calculator" />
      </Head>
      <main css={{ padding: "1rem" }} data-testid="Home_Main">
        <CalculatorWithState />
      </main>
    </>
  );
}
