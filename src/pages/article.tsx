import BlogCard from '@/components/cards/BlogCard';
import MenuAppBar from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function ArticlePage() {
  return (
    <Layout>
      <Seo templateTitle='Article' />
      <MenuAppBar title='Article' />
      <main>
        <section className=''>
          <div className='layout min-h-screen  space-y-3'>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </section>
      </main>
    </Layout>
  );
}
