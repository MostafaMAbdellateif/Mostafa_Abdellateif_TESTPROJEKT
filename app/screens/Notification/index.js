import React, { Component } from 'react';
import NotificationView from './NotificationView';
import { connect } from 'react-redux';
import * as Actions from '../../actions/Actions';

class Notification extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
    }

    componentWillUnmount(){
    }

    render() {
        return <NotificationView {...this.props} />;
    }
}

function mapStateToProps(state) {
    return {
    };
  }
  function mapDispatchToProps(dispatch) {
    return {
    };
  }
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Notification);