import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function LoginPage() {
  return (
    <Layout>
      <Seo templateTitle='Login' />
      <main className='flex-grow overflow-auto'>
        <div className='layout h-full'>
          <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            flexDirection='column'
            height='100%'
          >
            <Typography variant='h1'>Login</Typography>
            <TextField
              id='filled-basic'
              sx={{ width: '100%', mt: '1rem' }}
              label='Email'
              variant='filled'
            />
            <TextField
              id='filled-basic'
              sx={{ width: '100%', mt: '1rem' }}
              label='Password'
              variant='filled'
            />
            <Button
              className='bg-primary-500'
              variant='contained'
              LinkComponent={Link}
              sx={{ width: '100%', mt: '1rem' }}
              href='/'
            >
              Login
            </Button>
          </Box>
        </div>
      </main>
    </Layout>
  );
}
