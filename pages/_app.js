/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
// import '../styles/globals.css'
import { ThemeProvider } from 'theme-ui';
import theme from '../theme';
import Header from '../src/Components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
