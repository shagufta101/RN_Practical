import React from 'react';
import { ViewStyle, Platform, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { scale, verticalScale, normalize } from '../../utils/responsiveFonts';
import { BaseStyle, Metrics, Fonts } from '../../constants';
import { ICON_TYPE, IconX } from '../../icons';

interface ButtonX {
  label: String;
  color?: string | undefined;
  style: ViewStyle;
  mode?: 'text' | 'outlined' | 'contained' | undefined;
  zeroMargin: Boolean;
  onPress?: (() => void) | undefined;
  loading?: boolean | undefined;
  contentStyle: ViewStyle;
}

export default (props: ButtonX) => {
  const {
    label,
    color,
    style,
    mode,
    zeroMargin,
    onPress,
    loading,
    contentStyle,

    ...other
  } = props;
  return (
    <Button
      style={[
        {
          // height: Metrics.buttons.large,
          // marginTop: zeroMargin ? 0 : verticalScale(16),
          borderRadius: BaseStyle.BORDER_RADIUS,
        },
        style,
      ]}
      loading={loading}
      uppercase={false}
      mode={mode || 'contained'}
      contentStyle={{ padding: Metrics.s5, ...contentStyle }}
      labelStyle={{
        // ...Fonts.fontBold,
        fontSize: normalize(16),
        fontWeight: Platform.OS === "ios" ? 'bold' : "normal",
      }}
      color={color}
      onPress={!loading ? onPress : null}
      {...other}>
      {label}
    </Button>
  );
};
