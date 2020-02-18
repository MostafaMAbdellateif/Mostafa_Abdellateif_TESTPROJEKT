import React, { Component } from 'react';
import HomeView from './HomeView';
import { connect } from 'react-redux';
import * as Actions from '../../actions/Actions';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <HomeView {...this.props} />;
    }
}

function mapStateToProps(state) {
    return {
        Apartments: state.homeReducer.Apartments //get the apartments data from reducer
    };
  }
  function mapDispatchToProps(dispatch) {
    return {
    };
  }
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);