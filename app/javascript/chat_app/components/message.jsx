import React from 'react';

const Message = (props) => {
  return(
    <div>
      <p>{props.author}: {props.content}</p>
      <p>Posted at: {props.timeStamp}</p>
    </div>
  );
};

export default Message;
