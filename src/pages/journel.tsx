import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import { DateTimePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';

import clsxm from '@/lib/clsxm';
import logger from '@/lib/logger';

import FixedBottomNavigation from '@/components/layout/BottomNavigationBar';
import MenuAppBar from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function JournelPage() {
  // list of dates of current week
  const dates = [];
  for (let i = 6; i > -1; i--) {
    dates.push(dayjs().subtract(i, 'day'));
  }

  const [day, setDay] = useState(dayjs());

  logger({ day });

  const mood = ['happy', 'sad', 'angry', 'bored', 'tired', 'anxious'] as const;
  const moodEmoji = ['😀', '😢', '😡', '😴', '😴', '😰'] as const;
  const [currentMood, setCurrentMood] = useState<typeof mood[number]>(mood[0]);

  const sleep = ['terible', 'bad', 'ok', 'good', 'great'] as const;
  const emoji = ['😴', '😪', '😐', '😊', '😁'];
  const [currentSleep, setCurrentSleep] = useState<typeof sleep[number]>(
    sleep[0]
  );

  const [glassWater, setGlassWater] = useState(0);

  const [note, setNote] = useState('');

  const [date, setDate] = useState(() => dayjs());
  const handleChange = (newDueDate: Dayjs | null): void => {
    if (newDueDate === null) return;
    setDate(newDueDate);
  };

  return (
    <Layout>
      <Seo templateTitle='Journel' />
      <MenuAppBar title='Journel' />
      <main className='flex-grow overflow-auto'>
        <section className=''>
          <div className='layout'>
            <div className='flex gap-3 overflow-x-auto'>
              {dates.map((date) => (
                <Card
                  key={date.day()}
                  variant='outlined'
                  className={clsxm(
                    'flex flex-shrink-0 flex-col items-center justify-center gap-1 rounded-lg text-center font-bold',
                    date.day() === day.day()
                      ? 'bg-primary-500 text-white'
                      : 'bg-white text-primary-500'
                  )}
                  onClick={() => setDay(date)}
                >
                  <CardActionArea className='py-3 px-4'>
                    {date.toString().slice(0, 3)}
                    <span className='block text-2xl'>{date?.date()}</span>
                  </CardActionArea>
                </Card>
              ))}
            </div>
            <div>
              <p className='font-xl py-2 font-bold'>Mood</p>
              <div className='flex gap-3 overflow-x-auto'>
                {mood.map((m, i) => (
                  <Card
                    key={m}
                    variant='outlined'
                    className={clsxm(
                      'flex flex-shrink-0 flex-col items-center justify-center gap-1 rounded-lg text-center font-bold',
                      m === currentMood
                        ? 'bg-primary-500 text-white'
                        : 'bg-white text-primary-500'
                    )}
                    onClick={() => setCurrentMood(m)}
                  >
                    <CardActionArea className='py-3 px-4'>
                      <span className='text-3xl'>{moodEmoji[i]}</span>
                      <span className='block text-sm capitalize'>{m}</span>
                    </CardActionArea>
                  </Card>
                ))}
              </div>
              <div>
                <p className='font-xl py-2 font-bold'>Sleep</p>
                <div className='flex gap-3'>
                  {sleep.map((m, i) => (
                    <Card
                      key={m}
                      variant='outlined'
                      className={clsxm(
                        'flex flex-col items-center justify-center gap-1 rounded-lg text-center font-bold',
                        m === currentSleep
                          ? 'bg-primary-500 text-white'
                          : 'bg-white text-primary-500'
                      )}
                      onClick={() => setCurrentSleep(m)}
                    >
                      <CardActionArea className='py-3 px-4'>
                        <span className='text-3xl'>{emoji[i]}</span>
                        <span className='block text-sm capitalize'>{m}</span>
                      </CardActionArea>
                    </Card>
                  ))}
                </div>
              </div>
              <DateTimePicker
                renderInput={(props) => (
                  <TextField sx={{ width: '100%', mt: '1.5rem' }} {...props} />
                )}
                label='You Wake Up At'
                value={date}
                onChange={(newValue) => {
                  handleChange(newValue);
                }}
              />
              <div>
                <p className='font-xl py-2 font-bold'>Glass of Waters</p>
                <div className='flex gap-3'>
                  <IconButton onClick={() => setGlassWater((p) => p - 1)}>
                    <RemoveIcon />
                  </IconButton>
                  <TextField
                    variant='outlined'
                    className='max-w-[5rem]'
                    type='number'
                    value={glassWater}
                    onChange={(e) => setGlassWater(Number(e.target.value))}
                  />
                  <IconButton onClick={() => setGlassWater((p) => p + 1)}>
                    <AddIcon />
                  </IconButton>
                </div>
              </div>
              <TextField
                id='filled-multiline-static'
                label='Daily Notes'
                multiline
                value={note}
                onChange={(e) => setNote(e.target.value)}
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
