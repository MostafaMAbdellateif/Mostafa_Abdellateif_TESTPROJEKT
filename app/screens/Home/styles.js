import { StyleSheet } from 'react-native';
import AppStyles from '../../config/styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: AppStyles.color.COLOR_WHITE
    },
    header: {
        width: "100%",
        backgroundColor: AppStyles.color.COLOR_WHITE
    }
});

export default styles;
