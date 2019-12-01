/*
 * This duck contains the feedback given to the questions defined in the question.js duck
 */

import reject from 'lodash/fp/reject';
import difference from 'lodash/fp/difference';

import {feedbackData} from './sampleData';

import {
  selectQuestion,
  selectAllQuestions,
  selectTotalQuestionCount,
  MULTICHOICE_QUESTION,
  SCALE_QUESTION,
  TEXT_ONLY_QUESTION,
} from './questions';
import {selectAnswer} from './answers';
import {selectAllUsers} from './users';


// I think it is a good convention to have the Redux actions start with 'DO_' to differentiate the m from other constants
const DO_SUBMIT_MULTICHOICE_FEEDBACK = 'DO_SUBMIT_MULTICHOICE_FEEDBACK';
const DO_SUBMIT_SCALE_FEEDBACK = 'DO_SUBMIT_SCALE_FEEDBACK';
const DO_SUBMIT_TEXT_ONLY_FEEDBACK = 'DO_SUBMIT_TEXT_ONLY_FEEDBACK';

export const doSubmitMultichoiceFeedback = ({
  toUser,
  fromUser,
  questionId,
  answerId,
}) => ({
  type: DO_SUBMIT_MULTICHOICE_FEEDBACK,
  payload: {
    toUser,
    fromUser,
    questionId,
    answerId,
  },
});

export const doSubmitScaleFeedback = ({
  toUser,
  fromUser,
  questionId,
  rating,
}) => ({
  type: DO_SUBMIT_SCALE_FEEDBACK,
  payload: {
    toUser,
    fromUser,
    questionId,
    rating,
  },
});

export const doSubmitTextOnlyFeedback = ({
  toUser,
  fromUser,
  questionId,
  answerText,
}) => ({
  type: DO_SUBMIT_TEXT_ONLY_FEEDBACK,
  payload: {
    toUser,
    fromUser,
    questionId,
    answerText,
  },
});

const filterOutExistingFeedback = ({fromUser, toUser, questionId}) => state =>
  reject(
    feedback =>
      feedback.fromUser === fromUser &&
      feedback.toUser === toUser &&
      feedback.questionId === questionId,
  )(state);

export const reducer = (state = feedbackData, {type, payload}) => {
  // partially applying the function here to make future calls cleaner
  const _filterOutExistingFeedback = filterOutExistingFeedback({
    fromUser: payload && payload.fromUser,
    toUser: payload && payload.toUser,
    questionId: payload && payload.questionId,
  });

  switch (type) {
    case DO_SUBMIT_MULTICHOICE_FEEDBACK:
      return [
        // ensure that we won't have duplicate feedback for the same question between two users
        ..._filterOutExistingFeedback(state),
        // append new feedback
        {
          type: MULTICHOICE_QUESTION,
          scale: 3,
          toUser: payload.toUser,
          fromUser: payload.fromUser,
          questionId: payload.questionId,
          answerId: payload.answerId,
        },
      ];

    case DO_SUBMIT_SCALE_FEEDBACK:
      return [
        ..._filterOutExistingFeedback(state),
        {
          type: SCALE_QUESTION,
          scale: 10,
          toUser: payload.toUser,
          fromUser: payload.fromUser,
          questionId: payload.questionId,
          rating: payload.rating,
        },
      ];

    case DO_SUBMIT_TEXT_ONLY_FEEDBACK:
      return [
        ..._filterOutExistingFeedback(state),
        {
          type: TEXT_ONLY_QUESTION,
          toUser: payload.toUser,
          fromUser: payload.fromUser,
          questionId: payload.questionId,
          answerText: payload.answerText,
        },
      ];

    default:
      return state;
  }
};

// in production, I would definitely memoize such heavy selectors for performance reasons
export const selectFeedbackForUser = ({fromUser, toUser}) => state => {
  const relevantFeedback = state.feedback.filter(
    feedback => feedback.toUser === toUser && feedback.fromUser === fromUser,
  );

  const feedbackWithQuestion = relevantFeedback.map(feedback => ({
    question: selectQuestion(feedback.questionId)(state),
    answer: selectAnswer(feedback.answerId)(state),
    ...feedback,
  }));

  return feedbackWithQuestion;
};

export const selectUnansweredQuestionIds = ({fromUser, toUser}) => state => {
  const allQuestions = selectAllQuestions(state);
  const allQuestionIds = allQuestions.map(({id}) => id);

  const userFeedback = selectFeedbackForUser({fromUser, toUser})(state);
  const answeredQuestionIds = userFeedback.map(({questionId}) => questionId);

  return difference(allQuestionIds)(answeredQuestionIds);
};

export const selectAnsweredQuestionCount = ({fromUser, toUser}) => state =>
  selectFeedbackForUser({fromUser, toUser})(state).length;

/*
 * @description selects a map telling whether or not a user has unanswered questions
 */
export const selectHasUnansweredQuestions = ({fromUser}) => state => {
  const allUsers = selectAllUsers(state);

  const hasUnansweredQuestionsArray = allUsers.map(user => {
    const answeredQuestionsCount = selectAnsweredQuestionCount({
      fromUser,
      toUser: user.id,
    })(state);

    const totalQuestionCount = selectTotalQuestionCount(state);

    return {
      toUser: user.id,
      value: answeredQuestionsCount < totalQuestionCount,
    };
  });

  const hasUnansweredQuestionsMap = hasUnansweredQuestionsArray.reduce(
    (acc, val) => ({...acc, [val.toUser]: val.value}),
    {},
  );
  return hasUnansweredQuestionsMap;
};
