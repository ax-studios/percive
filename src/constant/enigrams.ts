import { AnswersType } from '@/constant/personality_test_questions';

export type EnigramType = {
  name: string;
  description: string;
  strengths: string;
  faults: string;
  basicFear: string;
  basicDesire: string;
};

const Enigrams: Record<AnswersType, EnigramType> = {
  A: {
    name: 'The Perfectionist',
    description:
      'Type Ones focus on following the rules and doing things the right way. They are motivated by their desire to live the “right” way and to always avoid fault and blame. They are so intent on being perfect that it can backfire, and they can often be too hard on themselves and on others.',
    strengths:
      'Ethical, dedicated, reliable, strives to help themselves and others be the best they can be',
    faults:
      'Very critical, especially to themselves; tends to see things in black and white',
    basicFear: 'To be bad or corrupt',
    basicDesire: 'To be good or have integrity',
  },
  B: {
    name: 'The Helper',
    description:
      'As the name suggests, Type Twos are always there to lend a hand and act as a support system for family and friends. They are motivated by their need to be loved and needed at all times. They’re extremely giving—to the point of ignoring their own needs. They really want to be liked and have a strong fear of being disliked by others, so they will do anything to ensure that they fit in. They tend to ignore their own boundaries for the sake of others.',
    strengths:
      'Caring, interpersonal, warm, giving, values relationships and service',
    faults:
      'Focuses so much on what others need that they don’t acknowledge their own needs; sometimes thinks they know best about the needs of others',
    basicFear: 'Being unworthy of being loved; being unwanted',
    basicDesire: 'To be loved',
  },
  C: {
    name: 'The Achiever',
    description:
      'Type Threes are success-oriented and extremely driven. They are motivated by their constant need to be successful—or at least to look successful to others. They do everything they can to avoid failure. They never want to look like they don’t know what they’re doing, and they put a little too much focus on what others think of them.',
    strengths:
      'Adaptable and able to succeed in almost any situation; productive and image-conscious',
    faults:
      'Feels their worth lies in what they can do and accomplish rather than who they are',
    basicFear: 'To be worthless or insignificant; to disappoint others',
    basicDesire: 'To be valuable and accepted',
  },
  D: {
    name: 'The Individualist',
    description:
      'Type Fours are motivated by the need to be as unique as possible—they never want to be ordinary. They are also very focused on feeling all of their emotions. Their moodiness can hinder them, and they have a fear of being flawed.',
    strengths:
      'Creative, sensitive, introspective, unique, understanding, empathetic',
    faults:
      'Desires to be seen and understood at all times; tends to be jealous and moody',
    basicFear: 'To have no identity or personal significance',
    basicDesire: 'To be meaningful based on their inner experience',
  },
  E: {
    name: 'The Investigator',
    description:
      'Also known as scientists or professors, Type Fives love to learn. They are constantly striving to conserve energy and learn more about the world, and this tends to make them very private and detached. They can be secretive and not very social.',
    strengths: 'Knowledgeable, curious, insightful, analytical',
    faults:
      'Struggles to connect with their emotions; very detached and tends to be a loner',
    basicFear: 'To be useless, helpless or incapable',
    basicDesire: 'To be capable and competent',
  },
  F: {
    name: 'The Loyalist',
    description:
      'Motivated by fear and the need for security, loyalists are the most common type. They value friendship and loyalty, but they are also worst-case-scenario thinkers. They like to be prepared for the worst and feel anxious if they don’t think they’re prepared.',
    strengths:
      'Committed, practical, witty, great in a crisis, always prepared',
    faults: 'Can be anxious and sometimes struggles with self-doubt',
    basicFear: 'To be without security and support',
    basicDesire: 'To have security and support',
  },
  G: {
    name: 'The Enthusiast',
    description:
      'A positive, fun-loving type, Type Sevens are spontaneous and motivated by a need to be happy. They never want to be tied down and are almost always full of energy. They never want to feel any kind of emotional pain or discomfort, so they do everything they can to keep themselves busy and having a good time.',
    strengths:
      'Adventurous, always planning something fun, loves having new experiences',
    faults:
      'Struggles with recognizing limits and tends to overexert themselves; can struggle with doing fun things in order to avoid internal pain',
    basicFear: 'To be bored or unhappy',
    basicDesire: 'To be happy and satisfied',
  },
  H: {
    name: 'The Challenger',
    description:
      'Type Eights are motivated by their need to be in control. They are very confident and assertive, and they don’t like to be told what to do. They are also very protective of themselves and others. They are very direct and don’t like to beat around the bush. They are also very competitive and don’t like to lose.',
    strengths: 'Strong, confident, decisive, protective, assertive',
    faults: 'Can be very confrontational and struggle with being vulnerable',
    basicFear: 'To be controlled or dominated',
    basicDesire: 'To be in control and protect self and others',
  },
  I: {
    name: 'The Peacemaker',
    description:
      'Type Nines are motivated by their need to be at peace. They are very laid-back and don’t like to cause any kind of conflict. They are also very accepting of others and don’t like to judge. They are very good at seeing the best in people and situations, and they are very good at making others feel comfortable.',
    strengths:
      'Very accepting of others; very good at making others feel comfortable',
    faults: 'Can be too passive and struggle with speaking up for themselves',
    basicFear: 'To be without peace or harmony',
    basicDesire: 'To be in control and protect self and others',
  },
};

export default Enigrams;
