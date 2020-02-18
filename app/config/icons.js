import React from 'react';
import SimpleLineIcons from 'react-native-vector-icons/dist/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Feather from 'react-native-vector-icons/dist/Feather';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';

type Props = {
    name: String,
    size?: Number,
    color?: String,
}

function Icons(props: Props) {
    switch (props.name) {
        case "Home":
            return <SimpleLineIcons  {...props} name="home" />

        case "Settings":
            return <Ionicons {...props} name="ios-options" />

        case "Notification":
            return <MaterialIcons {...props} name="notifications-none" />

        case "Profile":
            return <Feather {...props} name="user" />

        case "Search":
            return <Feather {...props} name="search" />

        case "Back":
            return <Ionicons {...props} name="ios-arrow-round-back" />

        case "House":
            return <FontAwesome  {...props} name="home" />

        case "Plus":
            return <FontAwesome5  {...props} name="plus" />

        default:
            return null
    }
}
export default Icons;