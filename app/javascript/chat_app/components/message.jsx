import React from 'react';

const Message = (props) => {
  return(
    <div className="message-div">
      <p className="message"><span className="user-name">{props.author}:</span> <span className="message-content">{props.content}</span></p>
      <p className="timestamp">{props.timeStamp} ago</p>
    </div>
  );
};

export default Message;
