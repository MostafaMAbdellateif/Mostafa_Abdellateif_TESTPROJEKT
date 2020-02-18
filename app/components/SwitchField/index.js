import React, { PureComponent } from 'react';
import {
    View,
    Text,
    Switch
} from 'react-native';
import AppStyles from '../../config/styles'
import { calcWidth } from '../../config/metrics';
import { TextField } from 'react-native-material-textfield';
import styles from './styles';

class SwitchField extends PureComponent {

    state = {
        value: this.props.value
    }

    onChangeHandler = (newValue) => {
        let { name, onChange } = this.props
        onChange(name, newValue)
        this.setState({value: newValue })
    }

    render() {
        let { title } = this.props
        let { value } = this.state
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Switch
                    value={value}
                    style={styles.switch}
                    onValueChange={this.onChangeHandler}
                    trackColor={{ false: AppStyles.color.COLOR_PLACEHOLDER, true: AppStyles.color.COLOR_PRIMARY }}
                    thumbColor={AppStyles.color.COLOR_WHITE}
                />
            </View>
        )
    }
}
export { SwitchField }