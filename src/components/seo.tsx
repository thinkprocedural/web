import Head from 'next/head';
import { NextSeo } from 'next-seo';

export default function SEO() {
  return (
    <>
      <NextSeo
        title="Think Procedural Discord Community"
        canonical="https://thinkprocedural.netlify.app"
        description="Houdini Discord Community"
        openGraph={{
          description: 'Houdini Discord Community',
          title: 'thinkprocedural',
          type: 'website',
          url: 'https://thinkprocedural.netlify.app',
        }}
        twitter={{
          cardType: 'summary_large_image',
          handle: '@thinkprocedural',
          site: '@thinkprocedural',
        }}
      />

      <Head>
        <link rel="amphtml" href="https://thinkprocedural.netlify.app/" />
        <link rel="canonical" href="https://thinkprocedural.netlify.app/" />
        <link rel="index" href="https://thinkprocedural.netlify.app/" />
      </Head>
    </>
  );
}
