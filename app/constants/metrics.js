const { scale } = require("../utils/responsiveFonts");
const BaseStyle = require("./baseStyle");

module.exports = {
    s5: 5,
    s8: 8,
    s10: 10,
    s15: 15,
    s16: 16,
    s20: 20,
    s30: 30,
    s40: 40,
    s50: 50,
    s60: 60,

    borderWidth: 0.6,

    icons: {
        oneFourth: BaseStyle.DEVICE_WIDTH / 4,
        dwarf: scale(5),
        mini: scale(10),
        tiny: scale(15),
        small: scale(20),
        medium: scale(30),
        large: scale(45),
        xl: scale(50)
    },

    images: {
        small: scale(20),
        medium: scale(40),
        large: scale(60),
        logo: scale(20)
    },

    poster: {
        large: 175,
        xLarge: 210,
        xxLarge: 380
    },

    buttons: {
        large: 50,
        medium:30
    }

};