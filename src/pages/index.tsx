import Head from 'next/head';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Think Procedural</title>
      </Head>

      <main>
        <a href="https://discord.gg/b8U5Hdy" className="card">
          <h1>Think Procedural</h1>
          <p>Houdini Discord Community</p>
        </a>
      </main>

      <style jsx>
        {`
          .container {
            align-items: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            min-height: 100vh;
            padding: 0;
          }

          main {
            align-items: center;
            display: flex;
            flex-direction: column;
            flex: 1;
            justify-content: center;
            padding: 0;
          }

          .card {
            border-radius: 10px;
            color: #ffffff;
            flex-basis: 45%;
            margin: 1rem;
            padding: 3rem;
            text-align: center;
            text-decoration: none;
            transition: color 200ms ease-in-out;
          }

          .card:hover,
          .card:focus,
          .card:active {
            color: #7f7f7f;
          }

          .card h1 {
            font-size: 5rem;
            font-weight: 600;
            margin: 0 0 1rem 0;
          }

          .card p {
            color: #7f7f7f;
            margin: 0;
            padding: 0;
          }
        `}
      </style>
    </div>
  );
}
