import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectChannel } from '../actions/index';

class ChannelList extends Component {

  render() {
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

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    { selectChannel : selectChannel },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
