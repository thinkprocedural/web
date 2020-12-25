import React from 'react';
import Head from 'next/head';

const Home: React.FC = () => (
  <div className="container">
    <Head>
      <title>Think Procedural</title>
    </Head>

    <main>
      <a href="https://discord.gg/b8U5Hdy" className="card">
        <h2>Think Procedural</h2>
        <p>Discord Server</p>
      </a>
    </main>

    <footer>
      <a
        href="https://github.com/thinkprocedural/web"
        target="_blank"
        rel="noopener noreferrer"
      >
        Source
      </a>
    </footer>

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
          border: 1px solid #0a0a0a;
          color: inherit;
          flex-basis: 45%;
          margin: 1rem;
          padding: 3rem;
          text-align: center;
          text-decoration: none;

          transition: color 200ms ease-in-out, border-color 200ms ease-in-out,
            background-color 200ms ease-in-out;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #f5f5f5;
          background-color: #0a0a0a;
        }

        .card h2 {
          margin: 0 0 1rem 0;
        }

        .card p {
          margin: 0;
          padding: 0;
        }

        footer {
          align-items: center;
          border-top: 1px solid #f5f5f5;
          display: flex;
          height: 100px;
          justify-content: center;
          width: 100%;
        }
      `}
    </style>
  </div>
);

export default Home;
