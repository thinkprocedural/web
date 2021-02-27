import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Think Procedural</title>
      </Head>

      <main>
        <div className="content">
          <Link href="https://discord.gg/b8U5Hdy">
            <a>
              <h1 className="title">Think Procedural</h1>
              <p className="subtitle">Houdini Discord Community</p>
            </a>
          </Link>
        </div>
      </main>
    </>
  );
}
