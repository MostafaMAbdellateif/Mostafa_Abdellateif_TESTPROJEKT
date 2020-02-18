import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { TextField } from 'react-native-material-textfield';
import AppStyles from '../../config/styles';
import { calcWidth } from '../../config/metrics';
import Icons from '../../config/icons';
import { InputField, SwitchField } from '../../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


class ProfileView extends Component {
    constructor(props) {
        super(props);
    }

    renderProfilePicture = () => {
        let { profile, newProfilePicture } = this.props
        return (
            <View style={styles.pictureContainer}>
                <Image
                    style={styles.picture}
                    source={{ uri: profile.picture }}
                />
                <TouchableOpacity
                    style={styles.addPicture}
                    onPress={newProfilePicture}
                >
                    <Icons
                        name="Plus"
                        size={calcWidth(10)}
                        color={AppStyles.color.COLOR_WHITE}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        let { profile, updateProfileData } = this.props
        return (
            <KeyboardAwareScrollView // to enabel phone rotation
                bounces={false}
                showsVerticalScrollIndicator={false}
                style={styles.container}
                contentContainerStyle={styles.scrollContent}
            >
                <View style={styles.header}>
                    <Text style={styles.myProfile}>My Profile</Text>
                    {this.renderProfilePicture()}
                </View>

                <View style={styles.content}>
                    <InputField
                        name={"Name"}
                        value={profile["Name"]}
                        onChangeText={updateProfileData}
                    />
                    <InputField
                        name={"Location"}
                        value={profile["Location"]}
                        onChangeText={updateProfileData}
                    />
                    <InputField
                        name={"E-mail"}
                        value={profile["E-mail"]}
                        onChangeText={updateProfileData}
                    />
                    <View style={styles.switchsContainer}>
                        <SwitchField
                            name={"contactDetails"}
                            title={"Contact Details"}
                            value={profile["contactDetails"]}
                            onChange={updateProfileData}
                        />

                        <SwitchField
                            name={"enableLocation"}
                            title={"Enable Location"}
                            value={profile["enableLocation"]}
                            onChange={updateProfileData}
                        />
                    </View>
                </View>
            </KeyboardAwareScrollView>
        );
    }
}

export default ProfileView;
