import React, { Fragment } from 'react';

import { UserProfileConsumer } from '../../contexts/UserProfileContext.jsx';

import UserData from '../UserData/index.jsx';

export default function UserProfile() {
  return (
    <Fragment>
      <h1>User profile</h1>
      <UserProfileConsumer>{({ state }) => <UserData {...state} />}</UserProfileConsumer>
    </Fragment>
  );
}
