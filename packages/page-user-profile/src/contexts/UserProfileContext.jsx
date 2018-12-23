import React, { createContext, Component } from 'react';

export const UserProfileContext = createContext();
export const UserProfileConsumer = UserProfileContext.Consumer;

export class UserProfileProvider extends Component {
  state = {
    userData: { userName: 'regimentor', userEmail: 'regimentor@yandex.ru' }
  };

  render() {
    const { children } = this.props;

    return (
      <UserProfileContext.Provider value={{ state: { ...this.state } }}>
        {children}
      </UserProfileContext.Provider>
    );
  }
}
