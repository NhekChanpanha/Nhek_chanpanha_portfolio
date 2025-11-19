import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="VANN Seavlong - Software Engineer & Full Stack Developer Portfolio" />
        {/* Inline transparent SVG favicon to ensure no tab icon is shown (bypasses cached /favicon.ico) */}
        <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16'%3E%3C/svg%3E" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
