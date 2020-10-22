import React, { FC } from 'react';

import profileImg from '../assets/about/profile.jpg';

export const About: FC = () => (
  <div>
    <h1>About</h1>
    <div>
      <img src={profileImg} alt="profile" width="100%" />
    </div>
  </div>
);
