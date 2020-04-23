import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>McKinsey Demo App</title>
        <meta name="description" content="Demo app for McKinsey" />
      </Head>
      <main data-testid="Home_Main">Hello, world!</main>
    </>
  );
}
