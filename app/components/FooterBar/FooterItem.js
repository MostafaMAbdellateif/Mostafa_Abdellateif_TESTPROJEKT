/* eslint-disable consistent-return */
import React, { PureComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import styles from './styles';
import Icons from '../../config/icons';
import AppStyles from '../../config/styles';
import { calcWidth } from '../../config/metrics';

class FooterItem extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    pressHandler = () => {
        if (!this.props.isFocused) { // if it's already open don't navigate to it again
            this.props.onTabPress(this.props.name)
        }
    }

    render() {
        return (
            <TouchableOpacity
                style={styles.itemContainer}
                onPress={this.pressHandler}>
                <Icons
                    name={this.props.name}
                    color={this.props.isFocused ? AppStyles.color.COLOR_PRIMARY : AppStyles.color.COLOR_SECONDARY}
                    size={calcWidth(20)}
                />
            </TouchableOpacity>
        );
    }
}

export default FooterItem;
