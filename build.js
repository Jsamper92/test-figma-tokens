const styleDictionary = require('style-dictionary');

const StyleDictionaryExtended = styleDictionary.extend({
    source: ['build/tokens/parsed-tokens.json'],
    platforms: {
        scss: {
            transformGroup: 'scss',
            buildPath: 'build/',
            files: [{
                destination: 'variables.scss',
                format: 'css/variables',
            }]
        },
        android: {
            transformGroup: "android",
            buildPath: "build/android/",
            files: [{
                destination: "colors.xml",
                format: "android/resources",
            }]
        }
    }
});

StyleDictionaryExtended.buildAllPlatforms();