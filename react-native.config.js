module.exports = {
    dependencies: {
        'react-native-vector-icons': {
            platforms: {
                android: null, // disable Android platform, other platforms will still autolink if provided
                ios: null,
            },
        },
    },
    project: {
        ios: {},
        android: {},
    },
    // assets: ['./app/assets/fonts/'],
};