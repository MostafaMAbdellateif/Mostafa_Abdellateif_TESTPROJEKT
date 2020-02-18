import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { ImageSwiper } from '../../components';
import Icons from '../../config/icons';
import { calcWidth } from '../../config/metrics';
import AppStyles from '../../config/styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

class ApartmentView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { ApartmentData } = this.props
        return (
            <KeyboardAwareScrollView // to enabel phone rotation
                bounces={false}
                showsVerticalScrollIndicator={false}
                style={styles.container}
                contentContainerStyle={styles.scrollContent}
            >
                {/* ----- the image swiper ------ */}
                <View style={styles.header}>
                    <ImageSwiper
                        images={ApartmentData.extraImages}
                        onBack={this.props.onBack}
                    />
                </View>
                {/* ----- the room info ----- */}
                <View style={styles.content}>
                    <Text style={styles.title}>
                        {`${ApartmentData.details.name} ${ApartmentData.details.status}`}
                    </Text>

                    <Text style={styles.location}>
                        {ApartmentData.details.location}
                    </Text>

                    <View style={styles.priceContainer}>
                        <View>
                            <Text style={styles.price}>
                                {`${ApartmentData.details.currency} ${ApartmentData.details.price}`}
                            </Text>
                            <Text style={styles.rate}>
                                {ApartmentData.details.rate}
                            </Text>
                        </View>
                        <Text style={styles.perSquare}>
                            {`@ ${ApartmentData.details.perSquare} per.Sq.Ft.`}
                        </Text>
                    </View>

                    <View style={styles.configurationContainer}>
                        <Icons
                            name="House"
                            size={calcWidth(20)}
                            color={AppStyles.color.COLOR_GREY}
                        />

                        <View style={styles.configurationInfo}>
                            <Text style={styles.configuration}>
                                {"Configuration"}
                            </Text>

                            <Text style={styles.room}>
                                {ApartmentData.details.room}
                            </Text>
                        </View>

                    </View>

                </View>
            </KeyboardAwareScrollView>
        );
    }
}

export default ApartmentView;
