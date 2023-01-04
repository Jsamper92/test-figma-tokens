const styleDictionary = require('style-dictionary');

const StyleDictionaryExtended = styleDictionary.extend({
    source: ['build/tokens/parsed-tokens.json'],
    platforms: {
        scss: {
            transformGroup: 'scss',
            buildPath: 'build/',
            files: [
                {
                    destination: 'scss/_colors.scss',
                    format: 'css/variables',
                    filter: {
                        type: "color"
                    }
                },
                {
                    destination: "scss/_sizes.scss",
                    format: "css/variables",
                    filter: {
                      type: "sizing"
                    }
                  }
            ]
        },
        android: {
            transformGroup: "android",
            buildPath: "build/android/",
            files: [
                {
                    destination: "colors.xml",
                    format: "android/colors",
                    filter:{
                        type: "color"
                    }
                },
                {
                    destination: "sizes.xml",
                    format: "android/dimens",
                    filter:{
                        type: "sizing"
                    }
                }
            ]
        },
        flutter: {
            transformGroup: "android",
            buildPath: "build/flutter/",
            files: [
                {
                    destination: "color.dart",
                    format: "flutter/class.dart",
                    className: "styleDictionary",
                    filter:{
                        type: "color"
                    }
                },
                {
                    destination: "sizes.dart",
                    format: "flutter/class.dart",
                    className: "StyleDictionarySize",
                    type: "float",
                    filter: {
                        attributes: {
                            category: "size"
                        }
                    }
                }
            ]
        }
    }
});

StyleDictionaryExtended.buildAllPlatforms();