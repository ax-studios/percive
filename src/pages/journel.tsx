import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';

import logger from '@/lib/logger';

import FixedBottomNavigation from '@/components/layout/BottomNavigationBar';
import MenuAppBar from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function JournelPage() {
  logger(dayjs());
  // list of dates of current week
  const dates = [];
  for (let i = 0; i < 7; i++) {
    dates.push(dayjs().add(i, 'day'));
  }

  return (
    <Layout>
      <Seo templateTitle='Journel' />
      <MenuAppBar title='Journel' />
      <main className='flex-grow overflow-auto'>
        <section className=''>
          <div className='layout'>
            <div className='flex gap-3'>
              {dates.map((date) => (
                <Card
                  key={date.day()}
                  variant='outlined'
                  className='flex flex-col items-center justify-center gap-1 rounded-lg py-3 px-5 font-bold'
                >
                  {date.toString().slice(0, 3)}
                  <span className='block text-2xl'>{date?.day()}</span>
                </Card>
              ))}
            </div>
            <div>
              <p className='font-xl py-2 font-bold'>Mood</p>
              <div className='flex gap-3'>
                {dates.map((date) => (
                  <Card
                    key={date.day()}
                    variant='outlined'
                    className='flex flex-col items-center justify-center gap-1 rounded-lg py-3 px-5 font-bold'
                  >
                    {date.toString().slice(0, 3)}
                    <span className='block text-2xl'>{date?.day()}</span>
                  </Card>
                ))}
              </div>
              <div>
                <p className='font-xl py-2 font-bold'>Sleep</p>
                <div className='flex gap-3'>
                  {dates.map((date) => (
                    <Card
                      key={date.day()}
                      variant='outlined'
                      className='flex flex-col items-center justify-center gap-1 rounded-lg py-3 px-5 font-bold'
                    >
                      {date.toString().slice(0, 3)}
                      <span className='block text-2xl'>{date?.day()}</span>
                    </Card>
                  ))}
                </div>
              </div>
              <TextField
                id='filled-multiline-static'
                label='Daily Notes'
                multiline
                rows={6}
                variant='filled'
                className='mt-4 w-full'
              />
              <Button
                variant='contained'
                className='mt-4 w-full bg-primary-500'
              >
                Submit
              </Button>
            </div>
          </div>
        </section>
      </main>
      <FixedBottomNavigation />
    </Layout>
  );
}
