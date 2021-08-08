/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
// import '../styles/globals.css'
import { ThemeProvider } from 'theme-ui';
import theme from '../theme';
import Nav from '../src/Components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Nav />
        <div sx={{ variant: 'containers.main' }}>
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
