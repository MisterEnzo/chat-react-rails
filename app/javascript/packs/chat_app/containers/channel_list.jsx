import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectChannel } from '../actions/index';

class ChannelList extends Component {

  render() {
    return(
      <div>
        <h3>Channel List</h3>
        {this.props.channels.map((channel)=> {
          return (<div className={(channel === this.props.selectedChannel) ? "selectedChannel" : ""}
                       key={channel}
                       onClick={() => this.props.selectChannel(channel)}
                  >{channel}
                  </div>)
        })}
      </div>
    )
  }
};

function mapStateToProps(state){
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    { selectChannel : selectChannel },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
