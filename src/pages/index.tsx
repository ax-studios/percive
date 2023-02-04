import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';

import quotes from '@/lib/quotes';

import BlogCard from '@/components/cards/BlogCard';
import FixedBottomNavigation from '@/components/layout/BottomNavigationBar';
import MenuAppBar from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';

export default function HomePage() {
  const [quote, setQuote] = useState<null | {
    quoteText: string;
    quoteAuthor: string;
  }>(null);

  // Function to generate random number
  function randomNumber(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }
  useEffect(() => {
    setQuote(quotes[Math.floor(randomNumber(0, quotes.length))]);
  }, []);
  return (
    <Layout>
      <Seo templateTitle='Home' />
      <MenuAppBar title='Home' />
      <main className='flex-grow overflow-auto'>
        <section className=''>
          <div className='layout'>
            <Card>
              <CardMedia
                component='img'
                className='aspect-video'
                image='https://source.unsplash.com/random/?nature'
                alt='green iguana'
              />
              <CardContent>
                <Typography variant='h5' component='div'>
                  {quote?.quoteText}
                </Typography>
                {quote && (
                  <Typography variant='subtitle1' component='p'>
                    - {quote?.quoteAuthor}
                  </Typography>
                )}
              </CardContent>
            </Card>
            <Typography sx={{ mt: '1rem' }} variant='h4'>
              Tests
            </Typography>
            <List
              sx={{
                width: '100%',
                mt: '1rem',
                bgcolor: 'background.paper',
                borderRadius: '1.3rem',
                overflow: 'hidden',
              }}
            >
              {tests.map((test, i) => (
                <ListItem alignItems='flex-start' key={test.title}>
                  <ListItemAvatar>
                    <CardMedia
                      component='img'
                      className='mr-3 aspect-video rounded-xl'
                      sx={{ width: '140px' }}
                      image={`https://source.unsplash.com/random/?nature&${i}&dpr=16/9`}
                      alt='green iguana'
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <UnstyledLink href={`/test/${test.href}`}>
                        {test.title}
                      </UnstyledLink>
                    }
                    secondary={test.description}
                  />
                </ListItem>
              ))}
            </List>
            <Typography sx={{ my: '1rem' }} variant='h4'>
              Today's Article
            </Typography>

            <BlogCard
              index={4}
              title='Creating Diversity and Inclusion at College: The C.A.R.E. Approach'
              description='The CARE approach is a teaching method designed to assist instructors in discussing race and racism with college students in the classroom setting. The four principles of the CARE approach include cultivate, acknowledge, recognize, and empower.'
              href='https://oasisapp.com/creating-diversity-and-inclusion-at-college/'
            />
          </div>
        </section>
      </main>
      <FixedBottomNavigation />
    </Layout>
  );
}

const tests = [
  {
    title: 'Presonality test',
    description: 'some description',
    href: 'presonality',
  },
  {
    title: 'trauma test',
    description: 'some description',
    href: 'trauma',
  },
  {
    title: 'Stress test',
    description: 'some description',
    href: 'stress',
  },
];
