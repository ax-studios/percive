import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function DemoPage() {
  return (
    <Layout>
      <Seo templateTitle='Demo' />

      <main>
        <section className=''>
          <div className='layout min-h-screen py-20'>
            <div></div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
