
// import { TextInputProps } from 'react-native';
// import { normalize } from '../utils/responsiveFonts';
// export interface FontProps {
//   extraLarge: TextInputProps;
//   extraLargeBold: TextInputProps;
//   header: TextInputProps;
//   headerBold: TextInputProps;
//   large: TextInputProps;
//   largeBold: TextInputProps;
//   regular: TextInputProps;
//   regularBold: TextInputProps;
// };

const { verticalScale, scale } = require("../utils/responsiveFonts");
const { Platform } = require("react-native");

const Fonts = {

  fontThin: {
    top: Platform.OS === "ios" ?  verticalScale(2) : 0,
    fontFamily: "AvenirNext-Regular"
  },
  fontBlack: {
    top: Platform.OS === "ios" ?  verticalScale(2) : 0,
    fontFamily: "AvenirNext-DemiBold"
  },
  fontBold: {
    top: Platform.OS === "ios" ?  verticalScale(2) : 0,
    fontFamily: "AvenirNext-Bold"
  },
  fontExtraBold: {
    top: Platform.OS === "ios" ?  verticalScale(2) : 0,
    fontFamily: "AvenirNext-Heavy"
  },
  fontExtraLight: {
    top: Platform.OS === "ios" ?  verticalScale(2) : 0,
    fontFamily: "AvenirNext-UltraLight"
  },
  fontLight: {
    top: Platform.OS === "ios" ?  verticalScale(2) : 0,
    fontFamily: "AvenirNext-UltraLight"
  },
  fontMedium: {
    top: Platform.OS === "ios" ?  verticalScale(2) : 0,
    fontFamily: "AvenirNext-Medium"
  },
  fontRegular: {
    top: Platform.OS === "ios" ?  verticalScale(2) : 0,
    fontFamily: "AvenirNext-Regular"
  },
  fontSemiBold: {
    top: Platform.OS === "ios" ?  verticalScale(2) : 0,
    fontFamily: "AvenirNext-DemiBold"
  },
  fontBoldItalic: {
    top: Platform.OS === "ios" ?  verticalScale(2) : 0,
    fontFamily: "AvenirNext-BoldItalic"
  },
};

module.exports = Fonts;