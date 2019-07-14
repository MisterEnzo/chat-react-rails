import React, { Component } from 'react';

class Channel extends Component {
  render() {
    return (
      <div>
        <h1>
          ${ownProps.match.params.channel}
        </h1>
      </div>
    )
  }
}
