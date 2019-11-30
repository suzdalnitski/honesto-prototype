import React from 'react';
import {useHistory} from 'react-router-dom';

import {Button} from 'modules/components';

const BackButton = () => {
  const history = useHistory();

  const onClick = () => history.goBack();

  return <Button transparent text="< Back" onClick={onClick} />;
};

export default BackButton;
