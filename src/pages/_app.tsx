import { CssBaseline, ThemeProvider } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import * as React from 'react';

import '@/styles/globals.css';

import { validateAuth } from '@/lib/appwrite';
import logger from '@/lib/logger';
import { createTheme } from '@/lib/theme';

// storyblokInit({
//   accessToken: 'DVoOsmwXTrIlCGQOxMjgDAtt',
//   use: [apiPlugin],
// });

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
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default MyApp;
