import React, { Component } from 'react';
import ApartmentView from './ApartmentView';
import { connect } from 'react-redux';
import * as Actions from '../../actions/Actions';

class Apartment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ApartmentData: props.route.params ? props.route.params.item : {}, //get the clicked item data from previous screen
        }
    }

    onBack = () => {
        this.props.navigation.goBack()
    }

    render() {
        return (
            <ApartmentView
                onBack={this.onBack}
                {...this.props}
                {...this.state}
            />
        );
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