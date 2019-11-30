/*
 * This duck contains predefined question answers for the multi-choice type feedback.
 */

import {normalizeById} from './util';

const question0Answers = [
  {
    id: 0,
    title: 'Please Improve',
    text:
      'You may have done one or the following: Maybe you were mostly quiet in meetings and when you had something on your mind, you brought it to the team afterward. Or, you had feedback that would be valuable to go, but you found it too difficult. Or, you had an opportunity to grow by doing something uncomfortable but you didn’t.',
    rating: 1,
  },
  {
    id: 1,
    title: 'You Were Good',
    text:
      'You sometimes participate in meetings but you feel that they don’t always bring up important things when they should.',
    rating: 2,
  },
  {
    id: 2,
    title: 'You Were Great',
    text:
      'I and others can count on your courage to help the team do what is right',
    rating: 3,
  },
]

const question1Answers = [
  {
    id: 3,
    title: 'Please Improve',
    text:
      'Your code could be cleaner, refer to Robert C. Martin\'s book.',
    rating: 1,
  },
  {
    id: 4,
    title: 'You Were Good',
    text:
      'Not terrible, but your code needs some work.',
    rating: 2,
  },
  {
    id: 5,
    title: 'You Were Great',
    text:
      'Your code is amazing, you make the team proud.',
    rating: 3,
  },
]

const question2Answers = [
  {
    id: 6,
    title: 'Please Improve',
    text:
    'Completely unreliable, I wouldn\t trust this person anything.',
    rating: 1,
  },
  {
    id: 7,
    title: 'You Were Good',
    text:
      'Somewhat raliable, working with this person is fine.',
    rating: 2,
  },
  {
    id: 8,
    title: 'You Were Great',
    text:
      'Working with this person is amazing, keep up the good work!',
    rating: 3,
  },
]

const answers = [
  ...question0Answers,
  ...question1Answers,
  ...question2Answers,
];

// normalizing to make the lookups more efficient
const initialState = normalizeById(answers);

export const reducer = (state = initialState, _action) => state;

export const selectAnswer = state => (id) => state.answers[id];
