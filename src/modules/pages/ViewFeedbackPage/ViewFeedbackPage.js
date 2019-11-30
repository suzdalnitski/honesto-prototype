import React, {useState} from 'react';
import {useSelector} from 'react-redux';

import {Page} from 'modules/layout';
import {selectNotMeUsers, selectMeUser} from 'modules/store';

import PageHeader from './PageHeader';
import FeedbackView from './FeedbackView';
import SelectFeedbackMenu from './SelectFeedbackMenu';

const pageContentStyle = {
  display: 'flex',
  width: '100%',
};

const ViewFeedbackPage = () => {
  const notMeUsers = useSelector(selectNotMeUsers);
  const meUser = useSelector(selectMeUser);

  const [selectedUser, setSelected] = useState(notMeUsers[0].id);

  return (
    <Page wide>
      <PageHeader />
      <div style={pageContentStyle}>
        <SelectFeedbackMenu
          users={notMeUsers}
          selectedUser={selectedUser}
          onSelect={id => setSelected(id)}
        />
        <FeedbackView
          username={meUser.name}
          fromUser={selectedUser}
          toUser={meUser.id}
        />
      </div>
    </Page>
  );
};

export default ViewFeedbackPage;
