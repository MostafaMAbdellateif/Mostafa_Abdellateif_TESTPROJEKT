import React, { PureComponent } from 'react';
import {
    View,
    ImageBackground,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppStyles from '../../config/styles'
import styles from './styles';
import Icons from '../../config/icons';
import { calcWidth, calcHeight, calcWidthRatio } from '../../config/metrics';
import Swiper from 'react-native-swiper'
import { SafeAreaView } from 'react-native-safe-area-context';


class ImageSwiper extends PureComponent {

    state = {
        currentIndex: 0
    }

    onIndexChanged = (index) => {
        this.setState({ currentIndex: index })
    }

    renderImages = () => {
        let { images } = this.props
        return (
            images.map((item, index) => {
                return (
                    <View key={index}>
                        <Image
                            style={styles.imageContainer}
                            source={{ uri: item }}
                        />
                    </View>
                );
            })
        )
    }

    render() {
        let { images } = this.props
        let { currentIndex } = this.state
        return (
            <View style={styles.contaienr}>
                <Swiper
                    loop={false}
                    showsPagination={false}
                    onIndexChanged={this.onIndexChanged}
                >
                    {this.renderImages()}
                </Swiper>

                {/* ----------- data above image ------------ */}
                {/* a black shade so the white text appears */}
                <LinearGradient
                    colors={AppStyles.gradient.black}
                    style={styles.blackFade}
                    pointerEvents="none" // to be able to swipe
                />

                {/* pagination */}
                <View style={styles.pagination}>
                    <Text style={styles.pages}>{`${currentIndex + 1}/${images.length}`}</Text>
                </View>

                {/* back button */}
                <TouchableOpacity
                    onPress={this.props.onBack}
                    style={styles.backIcon}>
                    <Icons
                        name="Back"
                        size={calcWidth(40)}
                        color={AppStyles.color.COLOR_WHITE} />
                </TouchableOpacity>
                {/* ------------------------------------------- */}
            </View>
        )
    }
}

export { ImageSwiper }