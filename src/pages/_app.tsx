import '../styles/index.scss';
import SEO from '../components/_seo';
import Preload from '../components/_preload';

export default function App({ Component, pageProps }) {
  return (
    <>
      <SEO />
      <Preload />
      <Component {...pageProps} />
    </>
  );
}
