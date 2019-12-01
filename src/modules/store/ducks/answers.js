/*
 * This duck contains predefined question answers for the multi-choice type feedback.
 */
import {answersData} from './sampleData';

import {normalizeById} from './util';
// normalizing to make the lookups more efficient
const initialState = normalizeById(answersData);

export const reducer = (state = initialState, _action) => state;

export const selectAnswer = id => state => state.answers[id];
