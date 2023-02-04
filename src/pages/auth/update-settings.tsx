import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { DateTimePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import Link from 'next/link';
import { useState } from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function UpdateSettingsPage() {
  const [date, setDate] = useState(() => dayjs());
  const handleChange = (newDueDate: Dayjs | null): void => {
    if (newDueDate === null) return;
    setDate(newDueDate);
  };

  return (
    <Layout>
      <Seo templateTitle='Update Settings' />
      <main className='flex-grow overflow-auto'>
        <div className='layout h-full'>
          <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            flexDirection='column'
            height='100%'
          >
            <Typography variant='h1'>Update Settings</Typography>
            <TextField
              id='filled-basic'
              sx={{ width: '100%', mt: '1rem' }}
              label='username'
              variant='filled'
            />
            <TextField
              id='filled-basic'
              sx={{ width: '100%', mt: '1rem' }}
              label='Name'
              variant='filled'
            />
            <DateTimePicker
              renderInput={(props) => (
                <TextField sx={{ width: '100%', mt: '1rem' }} {...props} />
              )}
              label='DateTimePicker'
              value={date}
              onChange={(newValue) => {
                handleChange(newValue);
              }}
            />
            <TextField
              id='filled-basic'
              sx={{ width: '100%', mt: '1rem' }}
              label='Gender'
              variant='filled'
            />
            <Button
              className='bg-primary-500'
              variant='contained'
              LinkComponent={Link}
              sx={{ width: '100%', mt: '1rem' }}
              href='/'
            >
              Register
            </Button>
          </Box>
        </div>
      </main>
    </Layout>
  );
}
