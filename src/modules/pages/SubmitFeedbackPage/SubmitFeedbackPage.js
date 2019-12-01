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

const SubmitFeedbackPage = () => {
  // in production, I would handle edge condition, eg parsing failing
  const userid = parseInt(useParams().userid);

  const user = useSelector(state => selectUser(state)(userid));
  const meUser = useSelector(selectMeUser);

  const questionId = 0;

  const question = useSelector(state => selectQuestion(state)(questionId));

  const [feedbackState, setFeedbackState] = useState(null);
  const dispatch = useDispatch();

  const onNext = () => {
    dispatch(
      doSubmitMultichoiceFeedback({
        toUser: userid,
        fromUser: meUser.id,
        questionId: feedbackState.questionId,
        answerId: feedbackState.answerId,
      }),
    );
  };

  return (
    <Page>
      <BackButton />
      <PageHeader username={user.name} question={question.text} />
      <div style={boxStyle}>
        <MultichoiceFeedback
          questionId={questionId}
          onSelect={({questionId, answerId}) => {
            setFeedbackState({
              questionId,
              answerId,
            });
          }}
        />
        <Buttons onNext={onNext} nextEnabled={feedbackState !== null} />
        <Progress completed={5} outOf={17} />
      </div>
    </Page>
  );
};

export default SubmitFeedbackPage;
