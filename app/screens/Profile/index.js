import React, { Component } from 'react';
import ProfileView from './ProfileView';
import { connect } from 'react-redux';
import * as Actions from '../../actions/Actions';
import ImagePicker from 'react-native-image-picker';

class Profile extends Component {
    constructor(props) {
        super(props);
    }

    // image picker popup options
    options = {
        title: 'Select Avatar',
        storageOptions: { skipBackup: true, path: 'images' }
    }

    // ------ select new picture -------
    newProfilePicture = () => {
        ImagePicker.showImagePicker(this.options, (response) => {
            if (response.didCancel) {
            } else if (response.error) {
            } else if (response.customButton) {
            } else {
                const source = response.uri
                this.updateProfileData("picture", source)
            }
        });
    }

    // ------ update the profile data in reducer -------
    updateProfileData = (key, newValue) => {
        let updateProfile = { ...this.props.profile }
        updateProfile[key] = newValue
        this.props.updateProfile(updateProfile) //updateStoredData
    }

    render() {
        return (
            <ProfileView
                newProfilePicture={this.newProfilePicture}
                updateProfileData={this.updateProfileData}
                {...this.props}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        profile: state.userReducer.profile //get profile data from reducer
    };
}
function mapDispatchToProps(dispatch) {
    return {
        updateProfile: (newData) => dispatch(Actions.updateProfile(newData)), //to update profile data
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);