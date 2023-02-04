import { CssBaseline, ThemeProvider } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AppProps } from 'next/app';

import '@/styles/globals.css';

import { createTheme } from '@/lib/theme';

function MyApp({ Component, pageProps }: AppProps) {
  const muiTheme = createTheme('dark');

  // const user = void validateAuth();
  // logger({ user });
  // React.useEffect(() => {
  //   if (!user) {
  //     router.replace('/auth/login');
  //   }
  // }, [user]);

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
