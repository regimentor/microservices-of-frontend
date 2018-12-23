export { default as UserProfile } from './components/UserProfile/index.jsx';
export { default as UserData } from './components/UserData/index.jsx';

import {
  UserProfileConsumer,
  UserProfileProvider,
  UserProfileContext
} from './contexts/UserProfileContext.jsx';

export { UserProfileConsumer, UserProfileProvider, UserProfileContext };
