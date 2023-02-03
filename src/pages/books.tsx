import Typography from '@mui/material/Typography';

import BookCard from '@/components/cards/BookCard';
import MenuAppBar from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
export default function BooksPage() {
  return (
    <Layout>
      <Seo templateTitle='Books' />
      <MenuAppBar title='Books' />
      <main>
        <section className=''>
          <div className='px-4 pt-4'>
            <Typography variant='h2' className='text-3xl font-bold'>
              Recommended
            </Typography>
          </div>
          <div className='grid grid-cols-[max-content_max-content] gap-3 px-4 pt-4'>
            <BookCard />
            <BookCard />
          </div>
          <div className='px-4 pt-4'>
            <Typography variant='h2' className='text-3xl font-bold'>
              Continue Reading
            </Typography>
          </div>
          <div className='grid grid-cols-[max-content_max-content] gap-3 px-4 pt-4'>
            <BookCard pages={40} readed={10} />
            <BookCard pages={40} readed={10} />
            <BookCard pages={40} readed={10} />
            <BookCard pages={40} readed={10} />
          </div>
        </section>
      </main>
    </Layout>
  );
}
