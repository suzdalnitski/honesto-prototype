import values from 'lodash/values';

import {usersData} from './sampleData';

import {normalizeById} from './util';

// id of the currently logged in user
const meId = 0;

// normalizing to make the lookups more efficient
const initialState = normalizeById(usersData);

export const reducer = (state = initialState, _action) => state;

export const selectAllUsers = state => values(state.users);

export const selectNotMeUsers = state =>
  selectAllUsers(state).filter(user => user.id !== meId);

export const selectMeUser = state =>
  selectAllUsers(state).filter(user => user.id === meId)[0];

export const selectUser = id => state => state.users[id];
