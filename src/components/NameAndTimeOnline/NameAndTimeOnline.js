import React, { PropTypes } from 'react';

import './name-and-time-online.scss';

const NameAndTimeOnline = props => {
  let minutesText;
  if (props.timeOnline === 1) {
    minutesText = 'minute';
  } else {
    minutesText = 'minutes';
  }

  return (
    <div className="name-and-time-online-container">
      <h2>{props.name}</h2><div className="active-dot"></div>
      <p>Online for {props.timeOnline} {minutesText}</p>
      <div className="logout" onClick={props.logoutUser}>Logout</div>
    </div>
  );
}

NameAndTimeOnline.propTypes = {
  name: React.PropTypes.string
};

export default NameAndTimeOnline;