import Head from "next/head";

import Calculator from "@/components/Calculator";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>McKinsey Demo</title>
        <meta name="description" content="Demo app for McKinsey" />
      </Head>
      <main data-testid="Home_Main">
        <Calculator
          accumulator="0"
          onSubmit={() => {}}
          onReset={() => {}}
          onOperationCall={() => {}}
        />
      </main>
    </>
  );
}
