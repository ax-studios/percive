import MenuAppBar from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function DemoPage() {
  return (
    <Layout>
      <Seo templateTitle='Demo' />
      <MenuAppBar title='In Development' />
      <main className='flex-grow overflow-auto'>
        <section className=''>
          <div className='layout py-20'>
            <div></div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
