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
        <h1 className="ui header">Channels</h1>
        <div className="ui vertical menu">
          {this.props.channels.map((channel)=> {
            return (<Link to={`/channels/${channel}`} key={channel} >
                      <div className={(channel === this.props.selectedChannel) ? "selectedChannel active item" : "item"} >
                        {channel}
                      </div>
                    </Link>
                  )
          })}
        </div>
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
