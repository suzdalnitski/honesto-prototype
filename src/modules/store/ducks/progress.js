import {normalizeByField} from './util';

const initialProgress = [{userId: 1, answersGiven: 7, feedbackSubmitted: true

},
  {userId: 2, 

  
  }
];

const initialState = normalizeByField('userId')(initialProgress);

export const reducer = (state = initialState, _action) => state;
