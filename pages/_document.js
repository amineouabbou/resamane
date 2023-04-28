import clsx from 'clsx'
import { Html, Head, Main, NextScript } from 'next/document'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { useEffect } from 'react'

export default function Document(props) {
  return (
    <Html>
      <Head></Head>
      <body>
        <Main />
        <NextScript />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SXPE494SYZ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-SXPE494SYZ');
        `}
        </Script>
      </body>
    </Html>
  )
}

export const getInitialProps = async (ctx) => {
  const initialProps = await Document.getInitialProps(ctx)

  return { ...initialProps, locale: ctx?.locale || 'es' }
}
