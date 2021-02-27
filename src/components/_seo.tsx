import Head from 'next/head';
import { NextSeo } from 'next-seo';

export default function SEO() {
  return (
    <>
      <NextSeo
        title="Think Procedural Discord Community"
        canonical="https://thinkprocedural.com"
        description="Houdini Discord Community"
        openGraph={{
          description: 'Houdini Discord Community',
          title: 'thinkprocedural',
          type: 'website',
          url: 'https://thinkprocedural.com',
        }}
        twitter={{
          cardType: 'summary_large_image',
          handle: '@thinkprocedural',
          site: '@thinkprocedural',
        }}
      />

      <Head>
        <link rel="amphtml" href="https://thinkprocedural.com/" />
        <link rel="canonical" href="https://thinkprocedural.com/" />
        <link rel="index" href="https://thinkprocedural.com/" />
        <link rel="shortlink" href="https://thinkprocedural.com/" />

        <meta name="author" content="Think Procedural Discord Community" />
        <meta name="copyright" content="Public Domain" />
        <link rel="license" href="https://creativecommons.org/publicdomain/zero/1.0" />

        <link rel="apple-touch-icon" href="./apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png" />
        <link rel="manifest" href="./site.webmanifest" />
        <link rel="mask-icon" href="./safari-pinned-tab.svg" color="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#000000" />
        <meta name="apple-mobile-web-app-title" content="Think Procedural Discord Community" />
        <meta name="application-name" content="Think Procedural Discord Community" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-navbutton-color" content="#000000" />
        <meta name="msapplication-starturl" content="https://thinkprocedural.com/" />
        <meta name="msapplication-tilecolor" content="#000000" />
        <meta name="msapplication-tileimage" content="/mstile-144x144.png" />
        <meta name="msapplication-tooltip" content="Think Procedural Discord Community" />
        <meta name="theme-color" content="#000000" />
      </Head>
    </>
  );
}
