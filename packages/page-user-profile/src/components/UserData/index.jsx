import React from 'react';

import './style.css';

export default function UserData({ userName, userEmail }) {
  return (
    <div className="UserProfile__user_data">
      <p>Name: {userName}</p>
      <p>Email: {userEmail}</p>
    </div>
  );
}
