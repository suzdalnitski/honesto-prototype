import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import {Button} from 'modules/components';
import {Page} from 'modules/layout';
import {
  selectUser,
  selectMeUser,
  selectQuestion,
  selectTotalQuestionCount,
  selectAnsweredQuestionCount,
  selectUnansweredQuestionIds,
  doSubmitMultichoiceFeedback,
} from 'modules/store';

import PageHeader from './PageHeader';
import BackButton from './BackButton';
import Progress from './Progress';

import MultichoiceFeedback from './MultichoiceFeedback';

const boxStyle = {
  borderRadius: '4px',
  boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
  padding: '25px',
};

const buttonStyle = {
  width: '150px',
  height: '50px',
};

const buttonsStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '30px',
};

const Buttons = ({onPrevious, onSkip, onNext, nextEnabled}) => (
  <div style={buttonsStyle}>
    <Button style={buttonStyle} outline text="Previous" onClick={onPrevious} />
    <Button style={buttonStyle} outline text="Skip" onClick={onSkip} />
    <Button
      style={buttonStyle}
      disabled={!nextEnabled}
      primary={nextEnabled}
      text="Next"
      onClick={onNext}
    />
  </div>
);

Buttons.propTypes = {
  onPrevious: PropTypes.func,
  onSkip: PropTypes.func,
  onNext: PropTypes.func,
  nextEnabled: PropTypes.bool,
};

const useCurrentQuestion = ({toUser, fromUser}) => {
  const unansweredQuestions = useSelector(
    selectUnansweredQuestionIds({toUser, fromUser}),
  );

  const currentQuestionId = unansweredQuestions[0];

  const currentQuestion = useSelector(selectQuestion(currentQuestionId));

  return currentQuestion;
};

const useFeedbackDirection = (userid) => {
  const meUser = useSelector(selectMeUser);

  const feedbackDirection = {
    toUser: userid,
    fromUser: meUser.id,
  };

  return feedbackDirection;
};

const useFeedbackProgress = ({fromUser, toUser}) => {
  const answeredQuestionCount = useSelector(
    selectAnsweredQuestionCount({fromUser, toUser}),
  );
  const totalQuestionCount = useSelector(selectTotalQuestionCount);

  return [answeredQuestionCount, totalQuestionCount];
};

const useFeedbackState = ({fromUser, toUser}) => {
  const [feedbackState, setFeedbackState] = useState(null);
  const dispatch = useDispatch();

  const onNext = () => {
    dispatch(
      doSubmitMultichoiceFeedback({
        fromUser,
        toUser,
        questionId: feedbackState.questionId,
        answerId: feedbackState.answerId,
      }),
    );

    setFeedbackState(null);
  };

  return {onNext, nextButtonEnabled: feedbackState !== null, setFeedbackState};
};

const SubmitFeedbackPage = () => {
  // in production, I would handle edge condition, eg parsing failing
  const userid = parseInt(useParams().userid);

  const feedbackDirection = useFeedbackDirection(userid);
  const currentQuestion = useCurrentQuestion(feedbackDirection);
  const user = useSelector(selectUser(userid));

  const [answeredQuestionCount, totalQuestionCount] = useFeedbackProgress(
    feedbackDirection,
  );

  const {onNext, nextButtonEnabled, setFeedbackState} = useFeedbackState(
    feedbackDirection,
  );

  return (
    <Page>
      <BackButton />
      <PageHeader username={user.name} question={currentQuestion.text} />
      <div style={boxStyle}>
        <MultichoiceFeedback
          questionId={currentQuestion.id}
          onSelect={({questionId, answerId}) => {
            setFeedbackState({
              questionId,
              answerId,
            });
          }}
        />
        <Buttons onNext={onNext} nextEnabled={nextButtonEnabled} />
        <Progress
          completed={answeredQuestionCount}
          outOf={totalQuestionCount}
        />
      </div>
    </Page>
  );
};

export default SubmitFeedbackPage;
