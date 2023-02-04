import Typography from '@mui/material/Typography';

import BookCard from '@/components/cards/BookCard';
import FixedBottomNavigation from '@/components/layout/BottomNavigationBar';
import MenuAppBar from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
export default function BooksPage() {
  return (
    <Layout>
      <Seo templateTitle='Books' />
      <MenuAppBar title='Books' />
      <main className='flex-grow overflow-auto p-4'>
        <section className=''>
          <Typography variant='h2' className='text-3xl font-bold'>
            Recommended
          </Typography>
          <div className='grid grid-cols-[max-content_max-content] gap-3 pt-4'>
            <BookCard i={5} />
            <BookCard i={6} />
          </div>
          <div className='pt-4'>
            <Typography variant='h2' className='text-3xl font-bold'>
              Continue Reading
            </Typography>
          </div>
          <div className='grid grid-cols-[max-content_max-content] gap-3 pt-4'>
            <BookCard
              pages={40}
              readed={Math.round(Math.random() * 40)}
              i={1}
            />
            <BookCard
              pages={40}
              readed={Math.round(Math.random() * 40)}
              i={2}
            />
            <BookCard
              pages={40}
              readed={Math.round(Math.random() * 40)}
              i={3}
            />
            <BookCard
              pages={40}
              readed={Math.round(Math.random() * 40)}
              i={4}
            />
          </div>
        </section>
      </main>
      <FixedBottomNavigation />
    </Layout>
  );
}
