import * as React from 'react';
import {View, Text} from 'react-native';
import {Appbar, useTheme} from 'react-native-paper';
import {useNavigation, useNavigationState} from '@react-navigation/native';
import {normalize, scale} from '../../utils/responsiveFonts';
import {Metrics, Fonts} from '../../constants';

export default function CustomHeader(props) {
  const {title, right, onBackPress, cart, notification} = props;
  const navigation = useNavigation();

  const index = useNavigationState((state) => state.index);

  const {
    colors: {notification: notificationColor, surface, primary},
  } = useTheme();

  goBack = () => navigation.goBack();

  return (
    <Appbar.Header style={{backgroundColor: primary, elevation: 0}}>
      {index !== 0 ? (
        <Appbar.BackAction
          onPress={onBackPress ? onBackPress : goBack}
          color={surface}
        />
      ) : (
        <View style={{marginEnd: scale(10)}} />
      )}
      {!title ? (
        <View />
      ) : (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: surface,
              ...Fonts.fontSemiBold,
              fontSize: normalize(20),
            }}>
            {title}
          </Text>
        </View>
      )}

    </Appbar.Header>
  );
}
