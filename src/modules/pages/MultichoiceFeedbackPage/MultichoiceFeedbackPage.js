import React from 'react';

import {useParams} from 'react-router-dom';

import {Button} from 'modules/components';
import {Page} from 'modules/layout';

import PageHeader from './PageHeader';
import BackButton from './BackButton';
import Option from './Option';
import Progress from './Progress';

const boxStyle = {
  borderRadius: '4px',
  boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
  padding: '25px',
};

const Options = () => (
  <>
    <Option title="Please Improve">
      You may have done one or the following: Maybe you were mostly quiet in
      meetings and when you had something on your mind, you brought it to the
      team afterward. Or, you had feedback that would be valuable to go, but you
      found it too difficult. Or, you had an opportunity to grow by doing
      something uncomfortable but you didn't.
    </Option>
    <Option title="You Were Good">
      You sometimes participate in meetings but you feel that they don’t always
      bring up important things when they should.
    </Option>
    <Option title="You Were Great">
      I and others can count on your courage to help the team do what is right.
    </Option>
  </>
);

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

  return (
    <Page>
      <BackButton />
      <PageHeader
        username="Sarah Johnson"
        question="How well did I display courage?"
      />
      <div style={boxStyle}>
        <Options />
        <Buttons />
        <Progress completed={5} outOf={17} />
      </div>
    </Page>
  );
};

export default MultichoiceFeedbackPage;
