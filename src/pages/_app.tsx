import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { apiPlugin, storyblokInit } from '@storyblok/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import * as React from 'react';

import '@/styles/globals.css';

import { validateAuth } from '@/lib/appwrite';
import logger from '@/lib/logger';
import { createTheme } from '@/lib/theme';

storyblokInit({
  accessToken: 'DVoOsmwXTrIlCGQOxMjgDAtt',
  use: [apiPlugin],
});

function MyApp({ Component, pageProps }: AppProps) {
  const muiTheme = createTheme('light');
  const router = useRouter();

  const user = void validateAuth();
  React.useEffect(() => {
    logger({ user });
    if (!user) {
      router.replace('/auth/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StyledEngineProvider injectFirst>
        <Head>
          <meta
            name='viewport'
            content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
          />
        </Head>
        <ThemeProvider theme={muiTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </StyledEngineProvider>
    </LocalizationProvider>
  );
}

export default MyApp;
