import React, { PureComponent } from 'react';
import AppStyles from '../../config/styles'
import { calcWidth } from '../../config/metrics';
import { TextField } from 'react-native-material-textfield';

class InputField extends PureComponent {

    onChangeHandler = (newValue) => {
        let { name, onChangeText } = this.props
        onChangeText(name, newValue)
    }
    
    render() {
        let { name, value } = this.props
        return (
            <TextField
                value={value}
                textColor={AppStyles.color.COLOR_GREY_DARK}
                fontSize={calcWidth(16)}
                label={name}
                labelFontSize={calcWidth(13)}
                tintColor={AppStyles.color.COLOR_PRIMARY}
                onChangeText={this.onChangeHandler}
            />
        )
    }
}
export { InputField }