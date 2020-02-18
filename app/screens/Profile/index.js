import React, { Component } from 'react';
import ProfileView from './ProfileView';
import { connect } from 'react-redux';
import * as Actions from '../../actions/Actions';

class Profile extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
    }

    componentWillUnmount(){
    }

    render() {
        return <ProfileView {...this.props} />;
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
)(Profile);