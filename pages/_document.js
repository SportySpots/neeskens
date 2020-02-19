import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Rajdhani::400,500,600,700&display=swap"
          rel="stylesheet"
        />
        { process.env.NODE_ENV === 'production' && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.googleAnalyticsID}`}/>
            <script dangerouslySetInnerHTML={{ __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${process.env.googleAnalyticsID}');                  
`
            }} />
          </>
        )}
      </Head>
      <body>
      <div id="modal-container" />
      <Main/>
      <NextScript/>
      </body>
      </html>
    )
  }
}
