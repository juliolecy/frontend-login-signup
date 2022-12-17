/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-document-import-in-page */
import Document, {Html, Head, Main, NextScript, DocumentInitialProps, DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
    static async getInitialProps(
      ctx: DocumentContext
    ): Promise<DocumentInitialProps> {
      const sheet = new ServerStyleSheet()
      const originalRenderPage = ctx.renderPage
  
      try {
        ctx.renderPage = () =>
          originalRenderPage({
            enhanceApp: (App) =>
              function enhance(props) {
                return sheet.collectStyles(<App {...props} />)
              }
          })
  
        const initialProps = await Document.getInitialProps(ctx)
        return {
          ...initialProps,
          styles: (
            <>
              {initialProps.styles}
              {sheet.getStyleElement()}
            </>
          )
        }
      } finally {
        sheet.seal()
      }
    }
  
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Lobster&family=Montserrat+Alternates:ital,wght@0,100;0,300;0,700;1,400&family=Montserrat:ital,wght@0,400;1,100&family=Nunito:wght@400;800&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&display=swap"
            rel="stylesheet"
          />
              <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet"/>

              <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet"/>
          
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
}
}