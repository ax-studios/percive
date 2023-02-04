import { Avatar, Box, Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';

import { logout } from '@/lib/appwrite';

import FixedBottomNavigation from '@/components/layout/BottomNavigationBar';
import MenuAppBar from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function ProfilePage() {
  const router = useRouter();
  return (
    <Layout>
      <Seo templateTitle='Profile' />
      <MenuAppBar title='Profile' />
      <main className='flex-grow overflow-auto p-4'>
        <Box
          py={2}
          justifyContent='center'
          flexDirection='column'
          alignItems='center'
          display='flex'
        >
          <Avatar
            alt='Remy Sharp'
            sx={{
              width: '10rem',
              height: '10rem',
            }}
            src='/images/contemplative-reptile.jpg'
          />
          <Typography variant='h4' gutterBottom sx={{ mt: '1rem' }}>
            John Doe
          </Typography>
          <Typography variant='subtitle1'>Aligmity god</Typography>
          <Button
            className='bg-primary-500'
            variant='contained'
            sx={{ width: '100%', mt: '1rem' }}
            onClick={() => {
              logout();
              router.replace('/auth/login');
            }}
          >
            Logout{' '}
          </Button>
        </Box>
      </main>
      <FixedBottomNavigation />
    </Layout>
  );
}
