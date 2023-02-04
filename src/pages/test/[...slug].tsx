import { Button, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useRouter } from 'next/router';
import { useState } from 'react';

import logger from '@/lib/logger';

import MenuAppBar from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';

import Enigrams from '@/constant/enigrams';
import Questions, { AnswersType } from '@/constant/personality_test_questions';

const TestPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [answers, setAnswers] = useState<Record<AnswersType, number>>({
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
    F: 0,
    G: 0,
    H: 0,
    I: 0,
  });
  const [currentQuestion, setCurrentQuestion] = useState(0);
  logger(answers);

  const getHighestAnswer = (): AnswersType => {
    return Object.entries(answers).sort(
      (a, b) => b[1] - a[1]
    )[0][0] as AnswersType;
  };

  return (
    <Layout>
      <MenuAppBar title={slug?.toString() || ''} />
      <main className='layout flex-grow overflow-auto'>
        {currentQuestion < Questions.length - 1 && (
          <>
            <Typography variant='h1'>
              {currentQuestion + 1} / {Questions.length}
            </Typography>
            <Typography variant='h2' sx={{ my: 4 }}>
              {Questions[currentQuestion].Question}
            </Typography>
            <div className='flex flex-col gap-2'>
              {Questions[currentQuestion].Answer.map((answer, i) => (
                <div key={answer.text}>
                  <Typography variant='h6'>
                    {i + 1} {answer.text}
                  </Typography>
                  <Button
                    onClick={() => {
                      setAnswers((p) => ({
                        ...p,
                        [answer.type]: p[answer.type] + 1,
                      }));
                      if (currentQuestion < Questions.length - 1)
                        setCurrentQuestion((p) => p + 1);
                    }}
                  >
                    Less
                  </Button>
                  <Button
                    onClick={() => {
                      setAnswers((p) => ({
                        ...p,
                        [answer.type]: p[answer.type] + 2,
                      }));
                      if (currentQuestion < Questions.length - 1)
                        setCurrentQuestion((p) => p + 1);
                    }}
                  >
                    Medium
                  </Button>
                  <Button
                    onClick={() => {
                      setAnswers((p) => ({
                        ...p,
                        [answer.type]: p[answer.type] + 3,
                      }));
                      if (currentQuestion < Questions.length - 1)
                        setCurrentQuestion((p) => p + 1);
                    }}
                  >
                    More
                  </Button>
                </div>
              ))}
            </div>
          </>
        )}
        {currentQuestion === Questions.length - 1 && (
          <Card>
            <CardMedia
              component='img'
              height='140'
              className='aspect-video'
              image='https://source.unsplash.com/random/?nature&'
              alt='green iguana'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                {Enigrams[getHighestAnswer()].name}
              </Typography>
              <Typography variant='body2' gutterBottom color='text.secondary'>
                {Enigrams[getHighestAnswer()].description}
              </Typography>
              <Typography variant='body2' gutterBottom color='text.secondary'>
                <strong>Strengths:</strong>{' '}
                {Enigrams[getHighestAnswer()].strengths}
              </Typography>
              <Typography variant='body2' gutterBottom color='text.secondary'>
                <strong>Faults:</strong> {Enigrams[getHighestAnswer()].faults}
              </Typography>
              <Typography variant='body2' gutterBottom color='text.secondary'>
                <strong>Basic Fear:</strong>{' '}
                {Enigrams[getHighestAnswer()].basicFear}
              </Typography>
              <Typography variant='body2' gutterBottom color='text.secondary'>
                <strong>Basic Desire:</strong>{' '}
                {Enigrams[getHighestAnswer()].basicDesire}
              </Typography>
            </CardContent>
          </Card>
        )}
      </main>
    </Layout>
  );
};

export default TestPage;
