import metrics from "../config/metrics";
import { Dimensions, Platform } from 'react-native';

// --------- to calculate the width if the device rotated to landscape or portrait ---------
export const DeiceWidthPercentToNumber = (percent, parent = 375) => {
    const { width } = Dimensions.get('window');
    return ((parseFloat(percent) / 100) * width)
}