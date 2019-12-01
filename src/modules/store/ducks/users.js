import values from 'lodash/values';

import {normalizeById} from './util';

const users = [
  {id: 0, name: 'Jane Smith', isMe: true},
  {id: 1, name: 'Sarah Johnson'},
  {id: 2, name: 'Samantha Parker'},
  {id: 3, name: 'Elizabeth Baker'},
  {id: 4, name: 'Mary Macleod'},
];

// normalizing to make the lookups more efficient
const initialState = normalizeById(users);

export const reducer = (state = initialState, _action) => state;

const selectAllUsers = state => values(state.users);

export const selectNotMeUsers = state =>
  selectAllUsers(state).filter(user => !user.isMe);

export const selectMeUser = state =>
  selectAllUsers(state).filter(user => user.isMe)[0];

export const selectUser = id => state => state.users[id];
