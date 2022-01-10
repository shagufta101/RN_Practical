import React from 'react';
import { ViewStyle, Platform, TouchableOpacity, Text, View, ViewProps, TextProps } from 'react-native';
import { Button, useTheme } from 'react-native-paper';
import { scale, verticalScale, normalize } from '../../utils/responsiveFonts';
import { BaseStyle, Metrics, Fonts } from '../../constants';
import { ICON_TYPE, IconX } from '../../icons';

interface TouchableXProps extends ViewProps {
  label: string;
  color: string;
  borderColor:string;
  style: ViewStyle;
  mode: string | 'contained' | 'outlined';
  zeroMargin: boolean;
  onPress: () => void;
  loading: boolean;
  labelStyle: TextProps;
  contentStyle: ViewStyle;
  hideRightIcon: boolean;
}

export default (props: TouchableXProps) => {

  const {
    label,
    color,
    style,
    mode,
    zeroMargin,
    onPress,
    loading,
    labelStyle,
    contentStyle,
    hideRightIcon,
    borderColor,
    disabled,
    ...other
   
  } = props;

  const { colors: { text, background,primary } } = useTheme();

  return (
    <TouchableOpacity onPress={onPress || null} activeOpacity={0.8} disabled={disabled}>
      <View
        style={[
          {
            ...BaseStyle.SHADOW_STYLE,
            elevation: color ? 0 : 0,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: color ? color : primary,
            marginTop: zeroMargin ? 0 : verticalScale(16),
            borderRadius: BaseStyle.BORDER_RADIUS,
            borderColor:mode==='outlined'?borderColor:null
          },
          style,
        ]}
        {...other}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: "100%",
            borderRadius: BaseStyle.BORDER_RADIUS,
            height: Metrics.buttons.large,
            padding: Metrics.s5,
            ...contentStyle
          }}
        >
          <Text
            numberOfLines={1}
            adjustsFontSizeToFit
            style={[{
              textAlignVertical: "center",
              textAlign: "center",
              paddingHorizontal: Metrics.s16,
              color: background,
              ...Fonts.fontBold,
              // paddingVertical: Metrics.s10,
              fontSize: normalize(16),
            }, labelStyle]}
          >{label}</Text>
        </View>
        {
          hideRightIcon
            ? null
            :
            <View
              style={{
                paddingHorizontal: Metrics.s16,
                position: 'absolute',
                right: 0,
              }}>
              <IconX
                size={Metrics.icons.mini}
                color={background}
                origin={ICON_TYPE.ANT_ICON}
                name={'caretright'}
              />
            </View>
        }
      </View>
    </TouchableOpacity>
  );
};
