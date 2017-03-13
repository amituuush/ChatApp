import React, { PropTypes } from 'react';

import './name-and-time-online.scss';

const NameAndTimeOnline = props => {
  return (
    <div className="name-and-time-online-container">
      <h2>{props.username}</h2>
      <p>Online for 12 minutes</p>
    </div>
  );
}

NameAndTimeOnline.propTypes = {
  username: React.PropTypes.string
};

export default NameAndTimeOnline;