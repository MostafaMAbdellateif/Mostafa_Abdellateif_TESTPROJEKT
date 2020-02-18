import metrics from "../config/metrics";
import { Dimensions, Platform } from 'react-native';

export const validateEmail = (email) => {
    var RegularExpression = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return RegularExpression.test(email);
}

// --------- to calculate the width if the device rotated to landscape or portrait ---------
export const DeiceWidthPercentToNumber = (percent, parent = 375) => {
    const { width } = Dimensions.get('window');
    return ((parseFloat(percent) / 100) * width)
}