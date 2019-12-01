/*
 * This duck contains a list of questions to be answered by the users
 */

import values from 'lodash/values';

import {normalizeById} from './util';

export const MULTICHOICE_QUESTION = 'MULTICHOICE_QUESTION';
export const SCALE_QUESTION = 'SCALE_QUESTION';
export const TEXT_ONLY_QUESTION = 'TEXT_ONLY_QUESTION';

const multiChoiceQuestions = [
  {
    id: 0,
    type: MULTICHOICE_QUESTION,
    text: 'How well did this person display courage?',
    // refers to the answers in the answers.js duck
    answerOptions: [0, 1, 2],
  },
  {
    id: 1,
    type: MULTICHOICE_QUESTION,
    text: "How would you rate the quality of this person's code?",
    // refers to the answers in the answers.js duck
    answerOptions: [3, 4, 5],
  },
  {
    id: 2,
    type: MULTICHOICE_QUESTION,
    text: 'How reliable is this person?',
    // refers to the answers in the answers.js duck
    answerOptions: [6, 7, 8],
  },
];

const scaleQuestions = [
  {
    id: 3,
    type: SCALE_QUESTION,
    text: 'How well does this person handle stress?',
    details:
      'Amet maiores sit corporis beatae enim aliquam Ut iste voluptates fugit fuga suscipit. Non exercitationem sapiente accusamus molestiae sed Quis laboriosam cumque quaerat delectus quaerat aut placeat Consequatur corrupti saepe?',
  },
  {
    id: 4,
    type: SCALE_QUESTION,
    text: 'How much do you value working with this person?',
    details:
      'Amet nisi illo corporis dicta quod. Ipsam nisi corporis ex ipsa amet commodi impedit Voluptate quisquam accusantium iusto nesciunt culpa',
  },
  {
    id: 5,
    type: SCALE_QUESTION,
    text: 'How well does this person interact with clients?',
    details:
      'Adipisicing id explicabo aliquam iste iste Molestias ex voluptas debitis molestias cupiditate? Qui non nulla commodi ut quas impedit adipisci in Adipisci perferendis deleniti at non fuga odit. Aperiam doloribus voluptates minima voluptates quidem. Voluptatem molestias consequatur vitae saepe dolorem.',
  },
];

const textOnlyQuestions = [
  {
    id: 10000,
    type: TEXT_ONLY_QUESTION,
    text: 'Do you have any other feedback for this person?',
  },
];

const questions = [
  ...multiChoiceQuestions,
  ...scaleQuestions,
  ...textOnlyQuestions,
];

// normalizing to make the lookups more efficient
const initialState = normalizeById(questions);

export const reducer = (state = initialState, _action) => state;

export const selectQuestion = id => state => state.questions[id];

export const selectAllQuestions = state => values(state.questions);

export const selectQuestionAnswerIds = questionId => state =>
  state.questions[questionId].answerOptions;

export const selectTotalQuestionCount = state =>
  selectAllQuestions(state).length;
