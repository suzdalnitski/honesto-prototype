/*
 * This duck contains a list of questions to be answered by the users
 */

import values from 'lodash/values';

import {normalizeById} from './util';

const MULTICHOICE = 'MULTICHOICE';
const RATING_AND_TEXT = 'RATING_AND_TEXT';
const TEXT_ONLY = 'TEXT_ONLY';

const multiChoiceQuestions = [
  {
    id: 0,
    type: MULTICHOICE,
    question: 'How well did this person display courage?',
    // refers to the answers in the answers.js duck
    answerOptions: [0, 1, 2],
  },
  {
    id: 1,
    type: MULTICHOICE,
    question: 'How would you rate the quality of this person\'s code?',
    // refers to the answers in the answers.js duck
    answerOptions: [3, 4, 5],
  },
  {
    id: 2,
    type: MULTICHOICE,
    question: 'How reliable is this person?',
    // refers to the answers in the answers.js duck
    answerOptions: [6, 7, 8],
  },
]

const ratingAndTextQuestions = [
  {
    id: 3,
    type: RATING_AND_TEXT,
    question: 'How well does this person handle stress?'
  },
  {
    id: 4,
    type: RATING_AND_TEXT,
    question: 'Can you count on this person in a difficult situation?'
  },
  {
    id: 5,
    type: RATING_AND_TEXT,
    question: 'How well does this person interact with clients?'
  },
]

const textOnlyQuestions = [
  {
    id: 10000,
    type: TEXT_ONLY,
    question: 'Do you have any other feedback for this person?'
  }
]

const questions = [
  ...multiChoiceQuestions,
  ...ratingAndTextQuestions,
  ...textOnlyQuestions
];

// normalizing to make the lookups more efficient
const initialState = normalizeById(questions);

export const reducer = (state = initialState, _action) => state;

export const selectAllQuestions = state => values(state.questions);
