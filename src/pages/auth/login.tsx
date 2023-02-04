import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { emailAuth } from '@/lib/appwrite';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function LoginPage() {
  const [formValue, setFormValue] = useState({
    email: 'team@appwrite.io',
    password: 'password',
  });
  const router = useRouter();
  return (
    <Layout>
      <Seo templateTitle='Login' />
      <main className='flex-grow overflow-auto'>
        <div className='layout h-full'>
          <Box
            component='form'
            onSubmit={(e) => {
              e.preventDefault();
              emailAuth(formValue.email, formValue.password);
              router.replace('/');
            }}
            display='flex'
            justifyContent='center'
            alignItems='center'
            flexDirection='column'
            height='100%'
          >
            <Typography variant='h1'>Login</Typography>
            <TextField
              sx={{ width: '100%', mt: '1rem' }}
              label='Email'
              value={formValue.email}
              variant='filled'
              onChange={(e) => {
                setFormValue({ ...formValue, email: e.target.value });
              }}
            />
            <TextField
              sx={{ width: '100%', mt: '1rem' }}
              label='Password'
              variant='filled'
              value={formValue.password}
              type='password'
              onChange={(e) => {
                setFormValue({ ...formValue, password: e.target.value });
              }}
            />
            <Button
              className='bg-primary-500'
              variant='contained'
              type='submit'
              sx={{ width: '100%', mt: '1rem' }}
            >
              Login
            </Button>
          </Box>
        </div>
      </main>
    </Layout>
  );
}
