import React, { PureComponent } from 'react';
import {
    View,
    ImageBackground,
    Text,
    TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppStyles from '../../config/styles'
import styles from './styles';
import { calcHeight } from '../../config/metrics';

class ApartmentItem extends PureComponent {

    pressHandler = () => {
        this.props.onClick(this.props.item)
    }

    render() {
        let { item } = this.props
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={this.pressHandler}
                style={styles.container}>
                <ImageBackground
                    source={{ uri: item.image }}
                    style={styles.imageContainer}>
                    <LinearGradient
                        colors={AppStyles.gradient.black}
                        style={styles.blackFade}
                    />
                    <View style={styles.details}>
                        <Text style={styles.price}>{item.details.price}</Text>
                        <Text style={[styles.info, { marginTop: calcHeight(4) }]}>{item.details.name}</Text>
                        <Text style={styles.info}>{item.details.status}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        )
    }
}

export { ApartmentItem }