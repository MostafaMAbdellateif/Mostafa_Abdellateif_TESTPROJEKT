import React, { Component } from 'react';
import SettingsView from './SettingsView';
import { connect } from 'react-redux';
import * as Actions from '../../actions/Actions';

class Settings extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <SettingsView {...this.props} />;
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
)(Settings);