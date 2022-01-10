import {StyleSheet} from 'react-native';
import {scale} from '../../utils/responsiveFonts';
import {Metrics} from '../../constants';
const {isIphoneX} = require('react-native-iphone-x-helper');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: isIphoneX() ? Metrics.s30 : 0,
    padding: Metrics.s20,
  },
  login: {
    padding: Metrics.s8,
  },
  imageSocialStyle: {
    width: scale(35),
    height: scale(35),

    alignSelf: 'center',
    marginHorizontal: 10,
  },
});

export default styles;
