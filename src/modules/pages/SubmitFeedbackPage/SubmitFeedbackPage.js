import React from 'react';
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';

import {Button} from 'modules/components';
import {Page} from 'modules/layout';
import {selectUser, selectQuestion} from 'modules/store';

import PageHeader from './PageHeader';
import BackButton from './BackButton';
import Progress from './Progress';

import MultichoiceFeedback from './MultichoiceFeedback'

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

const Buttons = () => (
  <div style={buttonsStyle}>
    <Button style={buttonStyle} outline text="Previous" />
    <Button style={buttonStyle} outline text="Skip" />
    <Button style={buttonStyle} secondary text="Next" />
  </div>
);

const MultichoiceFeedbackPage = () => {
  const {userid} = useParams();
  const user = useSelector(state => selectUser(state)(userid));

  const questionId = 0;

  const question = useSelector(state => selectQuestion(state)(questionId));

  return (
    <Page>
      <BackButton />
      <PageHeader
        username={user.name}
        question={question.text}
      />
      <div style={boxStyle}>
        <MultichoiceFeedback questionId={questionId} />
        <Buttons />
        <Progress completed={5} outOf={17} />
      </div>
    </Page>
  );
};

export default MultichoiceFeedbackPage;
