/*
 * This duck contains a list of questions to be answered by the users
 */

import values from 'lodash/values';

import {questionsData} from './sampleData';
import {normalizeById} from './util';

export const MULTICHOICE_QUESTION = 'MULTICHOICE_QUESTION';
export const SCALE_QUESTION = 'SCALE_QUESTION';
export const TEXT_ONLY_QUESTION = 'TEXT_ONLY_QUESTION';

// normalizing to make the lookups more efficient
const initialState = normalizeById(questionsData);

export const reducer = (state = initialState, _action) => state;

export const selectQuestion = id => state => state.questions[id];

export const selectAllQuestions = state => values(state.questions);

export const selectQuestionAnswerIds = questionId => state =>
  state.questions[questionId].answerOptions;

export const selectTotalQuestionCount = state =>
  selectAllQuestions(state).length;
