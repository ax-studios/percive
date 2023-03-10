export type AnswersType = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I';
export type QuesstionType = {
  Question: string;
  Answer: {
    type: AnswersType;
    text: string;
  }[];
};

const Questions: QuesstionType[] = [
  {
    Answer: [
      {
        type: 'A',
        text: 'honest in what I say or do..',
      },
      {
        type: 'F',
        text: 'loyal to people close to me.',
      },
    ],
    Question: 'It means a lot to me to be',
  },
  {
    Answer: [
      {
        type: 'G',
        text: 'to be admired by others or',
      },
      {
        type: 'C',
        text: 'for ways to get ahead in life.',
      },
    ],
    Question: 'I tend to look',
  },
  {
    Answer: [
      {
        type: 'D',
        text: 'listen to what my feelings are saying to me. or',
      },
      {
        type: 'H',
        text: 'to be self reliant and get the job done the way I want',
      },
    ],
    Question: 'I am inclined to',
  },
  {
    Answer: [
      {
        type: 'E',
        text: 'to be loved and needed by others. Or',
      },
      {
        type: 'B',
        text: 'to understand people and situations.',
      },
    ],
    Question: 'I like',
  },
  {
    Answer: [
      {
        type: 'G',
        text: 'fun-loving person who does interesting and novel thing or',
      },
      {
        type: 'H',
        text: 'strong person with courage to fight for justice.',
      },
    ],
    Question: 'I see myself as a',
  },
  {
    Answer: [
      {
        type: 'D',
        text: 'sensitive person who is aware of my feelings or',
      },
      {
        type: 'F',
        text: 'trustworthy person who is loyal to people close to me.',
      },
    ],
    Question: 'I experience myself as a',
  },
  {
    Answer: [
      {
        type: 'A',
        text: 'do things accurately and precisely or',
      },
      {
        type: 'C',
        text: 'To accomplish things and achieve good results',
      },
    ],
    Question: 'I like to',
  },
  {
    Answer: [
      {
        type: 'F',
        text: 'carry out my duties and responsibilities well or',
      },
      {
        type: 'C',
        text: 'To distinguish oneself and achieve in lite',
      },
    ],
    Question: 'it is important to me to',
  },
  {
    Answer: [
      {
        type: 'I',
        text: 'be relaxed and have peace of mind',
      },
      {
        type: 'B',
        text: 'help people in need',
      },
    ],
    Question: 'it means a lot to me to',
  },
  {
    Answer: [
      {
        type: 'D',
        text: 'authentic and creative in whatever Ido',
      },
      {
        type: 'G',
        text: 'positive and optimistic about life.',
      },
    ],
    Question: 'I like to be',
  },
  {
    Answer: [
      {
        type: 'A',
        text: 'be honest and far with people of',
      },
      {
        type: 'H',
        text: 'to stay in control of my life oven in the face of opposition.',
      },
    ],
    Question: 'It is important to me to',
  },
  {
    Answer: [
      {
        type: 'F',
        text: 'keep my commitments. or',
      },
      {
        type: 'C',
        text: 'to impress people and to be held high in their esteem',
      },
    ],
    Question: 'it is important to me to',
  },
  {
    Answer: [
      {
        type: 'I',
        text: 'harmony and emotional stability',
      },
      {
        type: 'E',
        text: 'knowledge and insight into situations',
      },
    ],
    Question: 'I value',
  },
  {
    Answer: [
      {
        type: 'F',
        text: 'people following rules and regulations, or',
      },
      {
        type: 'G',
        text: 'to live a happy and free life.',
      },
    ],
    Question: 'I like',
  },
  {
    Answer: [
      {
        type: 'D',
        text: 'finding significance in the joys and sadness of fe',
      },
      {
        type: 'B',
        text: 'to be liked by people',
      },
    ],
    Question: 'I value',
  },
  {
    Answer: [
      {
        type: 'A',
        text: 'correcting and improving myself constantly',
      },
      {
        type: 'E',
        text: 'to be capable and competent..',
      },
    ],
    Question: 'I like',
  },
  {
    Answer: [
      {
        type: 'I',
        text: 'an easy-going person or',
      },
      {
        type: 'C',
        text: 'an ambitious person.',
      },
    ],
    Question: 'I look at myself as',
  },
  {
    Answer: [
      {
        type: 'F',
        text: "do what I'm told by people in authority or",
      },
      {
        type: 'B',
        text: 'comfort or advise people who are close to me.',
      },
    ],
    Question: 'I tend to',
  },
  {
    Answer: [
      {
        type: 'H',
        text: 'exercising authority and giving orders. or',
      },
      {
        type: 'E',
        text: 'stepping back and observing what is happening',
      },
    ],
    Question: 'I enjoy',
  },
  {
    Answer: [
      {
        type: 'A',
        text: 'careful to do a perfect job. or',
      },
      {
        type: 'G',
        text: 'glad to have a good time with friends',
      },
    ],
    Question: 'I am',
  },
  {
    Answer: [
      {
        type: 'D',
        text: 'in touch with my personal feelings about things or',
      },
      {
        type: 'C',
        text: 'determined to achieve my goals in life.',
      },
    ],
    Question: 'I am',
  },
  {
    Answer: [
      {
        type: 'F',
        text: 'following orders and having limits within which to work',
      },
      {
        type: 'I',
        text: 'to take things easy and not to be in hurry.',
      },
    ],
    Question: 'I am comfortable',
  },
  {
    Answer: [
      {
        type: 'E',
        text: 'things by myself and learning about things, or',
      },
      {
        type: 'G',
        text: 'a variety of things and enjoying myself.',
      },
    ],
    Question: 'I like doing',
  },
  {
    Answer: [
      {
        type: 'H',
        text: 'being my own boss and doing what I want to do. or',
      },
      {
        type: 'B',
        text: 'being concerned about the welfare of others.',
      },
    ],
    Question: 'I find satisfaction in',
  },
  {
    Answer: [
      {
        type: 'A',
        text: 'live up to my standards and do things well. Or',
      },
      {
        type: 'D',
        text: 'have elegance everywhere and be treated as special',
      },
    ],
    Question: 'I like to',
  },
  {
    Answer: [
      {
        type: 'C',
        text: 'be considered a winner. Or',
      },
      {
        type: 'E',
        text: 'have time and space for myself so I can leam more',
      },
    ],
    Question: 'It is important to me to',
  },
  {
    Answer: [
      {
        type: 'F',
        text: 'loyal individual who is committed or',
      },
      {
        type: 'H',
        text: 'confident person who enjoys doing things my way',
      },
    ],
    Question: 'I consider myself as a',
  },
  {
    Answer: [
      {
        type: 'G',
        text: 'to plan ways to enjoy life.',
      },
      {
        type: 'B',
        text: 'a relaxed style of life.',
      },
    ],
    Question: 'I like',
  },
  {
    Answer: [
      {
        type: 'A',
        text: 'constantly strive to improve myself or',
      },
      {
        type: 'B',
        text: 'experience many people depending on my help.',
      },
    ],
    Question: 'I',
  },
  {
    Answer: [
      {
        type: 'D',
        text: 'works of art. Or',
      },
      {
        type: 'E',
        text: 'putting ideas together into meaningful relationships.',
      },
    ],
    Question: 'I enjoy',
  },
  {
    Answer: [
      {
        type: 'H',
        text: 'find it easy to express my anger and dissatisfaction, or',
      },
      {
        type: 'I',
        text: 'remain untroubled about most things in life.',
      },
    ],
    Question: 'I enjoy',
  },
  {
    Answer: [
      {
        type: 'G',
        text: 'People to enjoy themselves and be happy, or',
      },
      {
        type: 'B',
        text: 'to feel close to my friends',
      },
    ],
    Question: 'I want',
  },
  {
    Answer: [
      {
        type: 'H',
        text: 'confront people to change their minds',
      },
      {
        type: 'C',
        text: 'compete with people in order to succeed.',
      },
    ],
    Question: 'I am inclined to',
  },
  {
    Answer: [
      {
        type: 'B',
        text: 'be of service to others.',
      },
      {
        type: 'E',
        text: 'of understand the ideas and says of thinking of other people',
      },
    ],
    Question: 'It is important to me to',
  },
  {
    Answer: [
      {
        type: 'D',
        text: 'feel deeply about events in life. or',
      },
      {
        type: 'G',
        text: 'day-dream about the future.',
      },
    ],
    Question: 'It is easy for me to',
  },
  {
    Answer: [
      {
        type: 'E',
        text: 'concentrate and become immersed in my interests, or',
      },
      {
        type: 'B',
        text: 'show that I care for my friends.',
      },
    ],
    Question: 'I want to',
  },
  {
    Answer: [
      {
        type: 'H',
        text: 'confronting people with whom I disagree or',
      },
      {
        type: 'C',
        text: 'acquiring prestige and status.',
      },
    ],
    Question: 'I am comfortable',
  },
  {
    Answer: [
      {
        type: 'F',
        text: 'loyal in relationships with people.',
      },
      {
        type: 'I',
        text: 'in harmony and at ease with people I meet.',
      },
    ],
    Question: 'I like to be',
  },
  {
    Answer: [
      {
        type: 'A',
        text: 'of doing better by living up to my ideals. or',
      },
      {
        type: 'D',
        text: 'sentimentally of the way things used to be.',
      },
    ],
    Question: 'I dream',
  },
  {
    Answer: [
      {
        type: 'E',
        text: 'and discussing concepts and theories.or',
      },
      {
        type: 'G',
        text: 'and doing different things',
      },
    ],
    Question: 'I enjoy leaming',
  },
  {
    Answer: [
      {
        type: 'H',
        text: 'taking charge and directing other people to get things done.',
      },
      {
        type: 'B',
        text: "putting other people's needs before my own.",
      },
    ],
    Question: 'I like',
  },
  {
    Answer: [
      {
        type: 'A',
        text: 'use my time conscientiously to do things well.',
      },
      {
        type: 'C',
        text: 'do things efficiently so I can get results.',
      },
    ],
    Question: 'I like to',
  },
  {
    Answer: [
      {
        type: 'F',
        text: 'feel safe and secure with friends I trust',
      },
      {
        type: 'G',
        text: 'be busy and doing things I enjoy.',
      },
    ],
    Question: 'I want to',
  },
  {
    Answer: [
      {
        type: 'D',
        text: 'others do not follow my instructions more carefully or',
      },
      {
        type: 'I',
        text: "others take for granted what I've done for them.",
      },
    ],
    Question: 'I get mad when',
  },
  {
    Answer: [
      {
        type: 'A',
        text: 'live up to my perfect standards. Or',
      },
      {
        type: 'E',
        text: 'know what is happening in situations',
      },
    ],
    Question: 'It is important to me to',
  },
  {
    Answer: [
      {
        type: 'F',
        text: 'feel that I belong to a person or group   or',
      },
      {
        type: 'C',
        text: 'impress people in a favorable way.',
      },
    ],
    Question: 'It is important to me to',
  },
  {
    Answer: [
      {
        type: 'A',
        text: 'be careful about saying and doing the right thing  or',
      },
      {
        type: 'G',
        text: 'see the bright side of the future.',
      },
    ],
    Question: 'It is important to me to',
  },
  {
    Answer: [
      {
        type: 'H',
        text: 'forceful in stating my mind in a disagreement.',
      },
      {
        type: 'I',
        text: 'cool and collected in a disagreement.',
      },
    ],
    Question: 'I find it easy to be',
  },
  {
    Answer: [
      {
        type: 'B',
        text: 'to be concerned about the welfare of people.',
      },
      {
        type: 'C',
        text: 'that my efforts make a difference in accomplishment',
      },
    ],
    Question: 'It is important for me',
  },
  {
    Answer: [
      {
        type: 'A',
        text: 'right-minded, motivated by principles and ideals. Or',
      },
      {
        type: 'H',
        text: 'confident, with the strength to take on challenging tasks.',
      },
    ],
    Question: 'I like to see myself as a person who is',
  },
  {
    Answer: [
      {
        type: 'G',
        text: 'optimistic and hopeful about tomorrow',
      },
      {
        type: 'I',
        text: 'calm and discussing things without arguing',
      },
    ],
    Question: 'I like to see people',
  },
  {
    Answer: [
      {
        type: 'A',
        text: 'be morally right in my thoughts and actions. or',
      },
      {
        type: 'B',
        text: 'support people by lending them a helping hand',
      },
    ],
    Question: 'I like to',
  },
  {
    Answer: [
      {
        type: 'D',
        text: "sensitive to my own and other people's feelings or",
      },
      {
        type: 'F',
        text: 'respectful of tradition and authority.',
      },
    ],
    Question: 'I experience myself as',
  },
  {
    Answer: [
      {
        type: 'I',
        text: 'feel relaxed and at ease in my work, or',
      },
      {
        type: 'C',
        text: 'succeed in my work.',
      },
    ],
    Question: 'It is important to me to',
  },
  {
    Answer: [
      {
        type: 'G',
        text: 'talented and good at doing different things, or',
      },
      {
        type: 'B',
        text: 'caring and close to people I love.',
      },
    ],
    Question: 'I believe I am',
  },
  {
    Answer: [
      {
        type: 'H',
        text: 'being tough with a person for his or her own good,',
      },
      {
        type: 'F',
        text: 'with traditional ways of doing things.',
      },
    ],
    Question: 'I am comfortable',
  },
  {
    Answer: [
      {
        type: 'F',
        text: 'accept one another and live together in peace.',
      },
      {
        type: 'E',
        text: 'reflect on their ideas so that the thinking is clear.',
      },
    ],
    Question: 'I like people who',
  },
  {
    Answer: [
      {
        type: 'D',
        text: 'Experience unique up and down times in life.',
      },
      {
        type: 'C',
        text: 'work at getting result.',
      },
    ],
    Question: 'I tend to',
  },
  {
    Answer: [
      {
        type: 'F',
        text: 'dependable in doing the work assigned to me.',
      },
      {
        type: 'B',
        text: 'available to assist people in need',
      },
    ],
    Question: 'I am inclined to be',
  },
  {
    Answer: [
      {
        type: 'D',
        text: 'truly aware of my pleasant or painful feeling',
      },
      {
        type: 'H',
        text: 'strong in making hard decisions',
      },
    ],
    Question: 'It is important for me to be',
  },
];
export default Questions;
