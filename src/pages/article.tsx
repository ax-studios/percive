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
            <BlogCard
              index={0}
              title='4 Easy Steps to Start Practicing Self-Validation'
              description='What Is Self-Validation?  Showing yourself kindness after experiencing an event that brought about negative emotions can be difficult. If you struggle with silencing your inner critic, your self-talk may sound like, “I did a terrible job on that test–I’m not smart enough to be in college;” or “I can’t believe I forgot my line–no amount'
              href='https://oasisapp.com/4-steps-to-start-practicing-self-validation/'
            />
            <BlogCard
              index={1}
              title='5 Simple Tips for Managing Holiday Stress'
              description='There are many reasons why you may feel stressed, worried, anxious, sad, or even depressed during the holiday season. Consider these 5 effective strategies that you can use to stay emotionally balanced and maintain your wellbeing, during the holidays.'
              href='https://oasisapp.com/5-tips-for-managing-holiday-stress/'
            />
            <BlogCard
              index={2}
              href='https://oasisapp.com/how-to-practice-media-literacy/'
              title='How to Practice Media Literacy: 5 Helpful Questions'
              description='Sometimes, we fall into the trap of just accepting what we are seeing and hearing without engaging in much critical thinking. The tools we use to fight back against blindly accepting messages from the media are called media literacy skills. Media literacy skills involve consciously taking time to analyze and evaluate the content you consume.'
            />
            <BlogCard
              index={3}
              title='4 Strategies For Managing Microaggressions in an Online Class Environment'
              description='Microaggressions are derogatory, dismissive, or demeaning communications that can be so subtle that they go unnoticed by those directly affected and viewing them. It can be challenging to address microaggressions between students in an asynchronous online class environment. Here are 4 strategies that can help!'
              href='https://oasisapp.com/managing-microaggressions-in-an-online-class/'
            />
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
