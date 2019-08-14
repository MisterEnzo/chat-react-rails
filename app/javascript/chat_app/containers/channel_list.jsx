import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ChannelList extends Component {

  render() {
    if (!this.props.channels) {
      return (
        <div>Loading...</div>
      )
    }
    return(
      <div>
        <h3>Channel List</h3>
        {this.props.channels.map((channel)=> {
          return (<Link to={`/channels/${channel}`} key={channel} >
                    <div className={(channel === this.props.selectedChannel) ? "selectedChannel" : ""} >
                      {channel}
                    </div>
                  </Link>
                )
        })}
      </div>
    )
  }
};

function mapStateToProps(state){
  return {
    channels: state.channels
  }
}

export default connect(mapStateToProps)(ChannelList);
