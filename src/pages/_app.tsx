import { CssBaseline, ThemeProvider } from '@mui/material';
import { AppProps } from 'next/app';

import '@/styles/globals.css';

import { createTheme } from '@/lib/theme';

function MyApp({ Component, pageProps }: AppProps) {
  const muiTheme = createTheme('dark');
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
