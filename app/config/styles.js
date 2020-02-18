/*
 * Provides universal color configs used in the app.
 * Provides universal fonts used in the app.
 */
const AppStyles = {
    color: {
        // COLOR_PRIMARY: '#3F83FE',
        COLOR_PRIMARY: '#6B91E9',
        COLOR_SECONDARY: '#5D6672',
        COLOR_WHITE: '#FFF',
        COLOR_BLACK: '#000',
        COLOR_GREY: '#B2B2B2',
        COLOR_PLACEHOLDER: '#999DA4',
        COLOR_GREY_WHITE: '#F7F7F7',
        COLOR_GREY_DARK: '#2F2F2F',
        COLOR_BLUE_INACTIVE: '#BCC8DC',
        COLOR_DARK_SEPERATOR: '#d4d4d4',
        COLOR_BLACK_TRANSP: 'rgba(0, 0, 0, 0.7)',
        COLOR_GREY_TRANSP: 'rgba(67, 85, 85, 0.7)',
        rgba: (r, g, b, a) => 'rgba(' + r + "," + g + "," + b + "," + a + ")",
    },
    gradient: {
        black: ['rgba(0,0,0,0.0)', 'rgba(0,0,0,0.5)']
    },
};
export default AppStyles;
