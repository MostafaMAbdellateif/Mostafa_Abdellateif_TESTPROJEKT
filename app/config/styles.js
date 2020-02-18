/*
 * Provides universal color configs used in the app.
 * Provides universal fonts used in the app.
 */
const AppStyles = {
    color: {
        COLOR_PRIMARY: '#3F83FE',
        COLOR_SECONDARY: '#3C3D42',
        COLOR_WHITE: '#FFF',
        COLOR_BLACK: '#000',
        COLOR_GREY: '#5D6672',
        COLOR_PLACEHOLDER: '#999DA4',
        COLOR_GREY_WHITE: '#fafafa',
        COLOR_DARK_SEPERATOR: '#d4d4d4',
        COLOR_BLACK_TRANSP: 'rgba(0, 0, 0, 0.7)',
        COLOR_GREY_TRANSP: 'rgba(67, 85, 85, 0.7)',
        rgba: (r, g, b, a) => 'rgba(' + r + "," + g + "," + b + "," + a + ")",
    },
    fonts: {
        // FONT_REGULAR: 'Roboto-Regular',
        // FONT_MEDIUM: 'Roboto-Medium'
    }
};
export default AppStyles;
