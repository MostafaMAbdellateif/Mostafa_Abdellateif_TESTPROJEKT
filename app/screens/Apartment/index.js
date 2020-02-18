import React, { Component } from 'react';
import ApartmentView from './ApartmentView';
import { connect } from 'react-redux';
import * as Actions from '../../actions/Actions';

class Apartment extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
    }

    componentWillUnmount(){
    }

    render() {
        return <ApartmentView {...this.props} />;
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
)(Apartment);