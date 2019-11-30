import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {selectNotMeUsers} from 'modules/store';

import ShareFeedbackItem from './ShareFeedbackItem';

const getFeedbackItemType = ({feedbackSubmitted}) =>
  feedbackSubmitted ? 'view-submission' : 'fill-out';

const ShareFeedbackList = ({users}) => (
  <div>
    {users.map(({id, name, feedbackSubmitted}) => (
      <ShareFeedbackItem
        key={id}
        userid={id}
        name={name}
        type={getFeedbackItemType({feedbackSubmitted})}
      />
    ))}
  </div>
);

ShareFeedbackList.propTypes = {
  users: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  users: selectNotMeUsers(state),
});

export default connect(mapStateToProps)(ShareFeedbackList);
