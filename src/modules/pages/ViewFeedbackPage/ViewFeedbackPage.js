import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';

import {Page} from 'modules/layout';
import {selectNotMeUsers, selectMeUser, selectUser} from 'modules/store';

import PageHeader from './PageHeader';
import FeedbackView from './FeedbackView';
import SelectFeedbackMenu from './SelectFeedbackMenu';

const pageContentStyle = {
  display: 'flex',
  width: '100%',
};

const ViewFeedbackPage = () => {
  const {type: pageType} = useParams();

  const notMeUsers = useSelector(selectNotMeUsers);
  const meUser = useSelector(selectMeUser);

  const [selectedUser, setSelected] = useState(notMeUsers[0].id);

  const selectedUserData = useSelector(state =>
    selectUser(state)(selectedUser),
  );

  return (
    <Page wide>
      <PageHeader />
      <div style={pageContentStyle}>
        <SelectFeedbackMenu
          users={notMeUsers}
          selectedUser={selectedUser}
          onSelect={id => setSelected(id)}
        />
        {pageType === 'my' ? (
          <FeedbackView
            fromUser={selectedUser}
            toUser={meUser.id}
            username={selectedUserData.name}
          />
        ) : (
          <FeedbackView
            fromUser={meUser.id}
            toUser={selectedUser}
            username={selectedUserData.name}
          />
        )}
      </div>
    </Page>
  );
};

export default ViewFeedbackPage;
