/*
 * platform/application wide metrics for proper styling
*/
import { Dimensions, Platform } from 'react-native';
const { width, height } = Dimensions.get('window');

const metrics = {
    screenWidth: width < height ? width : height,
    screenHeight: width < height ? height : width,
    navBarHeight: Platform.OS === 'ios' ? 54 : 66
};

export const calcWidthRatio = (target, parent = 375) => {
    let ratio = ((target / parent) * 100.0).toString() + "%" // calculate the ratio if we want to have different width when phone flipped
    return ratio
}

export const calcWidth = (target) => {
    return metrics.screenWidth*(target/375) //the number of pixel depending on the phone width
}

export const calcHeight = (target) => {
    return metrics.screenHeight * (target / 667) //the number of pixel depending on the phone height
}

export default metrics;
