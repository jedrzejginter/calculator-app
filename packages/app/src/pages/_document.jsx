import { css, Global } from "@emotion/core";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class NextDocument extends Document {
  static getInitialProps = Document.getInitialProps;

  render() {
    return (
      <Html lang="en">
        <Head>
          <Global
            styles={css`
              html {
                font-size: 62.5%;
              }

              body {
                -webkit-font-smoothing: antialiased;
                font-family: sans-serif;
                margin: 0;
              }

              *,
              *:before,
              *:after {
                box-sizing: border-box;
              }
            `}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
