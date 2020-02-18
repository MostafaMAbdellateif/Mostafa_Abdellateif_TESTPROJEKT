import React, { Component } from 'react';
import HomeView from './HomeView';
import { connect } from 'react-redux';
import * as Actions from '../../actions/Actions';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
    }

    componentWillUnmount(){
    }

    render() {
        return <HomeView {...this.props} />;
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
)(Home);