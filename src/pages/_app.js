import Theme from '../styles/theme';
import { MetaTags } from 'react-meta-tags';

export default function App({ Component, pageProps }) {
  return (
    <>
      <MetaTags>
        <meta id="meta-description" name="description" content="👋 Hi, welcome to my personal portfolio website!" />
        <meta id="og-title" property="og:title" content="Nehal Naeem" />
        <meta id="og-image" property="og:image" content="'/images/me.jpg" />
      </MetaTags>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 