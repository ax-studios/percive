import BlogCard from '@/components/cards/BlogCard';
import FixedBottomNavigation from '@/components/layout/BottomNavigationBar';
import MenuAppBar from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function ArticlePage() {
  return (
    <Layout>
      <Seo templateTitle='Article' />
      <MenuAppBar title='Article' />
      <main className='flex-grow overflow-auto'>
        <section className=''>
          <div className='layout  space-y-3'>
            <BlogCard index={0} />
            <BlogCard index={1} />
            <BlogCard index={2} />
            <BlogCard index={3} />
            <BlogCard index={4} />
          </div>
        </section>
      </main>
      <FixedBottomNavigation />
    </Layout>
  );
}
