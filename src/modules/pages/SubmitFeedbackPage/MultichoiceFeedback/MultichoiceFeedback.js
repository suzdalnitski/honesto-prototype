import React, {useState} from 'react';

import Option from './Option';

const MultichoiceFeedback = () => { 
  const [selection, setSelection] = useState(-1);
  
  return (
  <div>
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
  </div>
); }

export default MultichoiceFeedback;
