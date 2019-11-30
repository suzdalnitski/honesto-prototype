import values from 'lodash/values';

import {normalizeById} from './util';

const users = [
  {id: 0, name: 'Jane Smith', feedbackSubmitted: false, isMe: true},
  {id: 1, name: 'Sarah Johnson', feedbackSubmitted: false},
  {id: 2, name: 'Samantha Parker', feedbackSubmitted: false},
  {id: 3, name: 'Elizabeth Baker', feedbackSubmitted: false},
  {id: 4, name: 'Mary Macleod', feedbackSubmitted: true},
];

// normalizing to make the lookups more efficient
const initialState = normalizeById(users);

export const reducer = (state = initialState, _action) => state;

const selectAllUsers = state => values(state.users);

export const selectNotMeUsers = state => selectAllUsers(state).filter(user => !user.isMe);
export const selectMeUser = state => selectAllUsers(state).filter(user => user.isMe)[0];
export const selectUser = state => id => state.users[id];
