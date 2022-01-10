import React, {useState, useEffect} from 'react';
import {Fonts, Metrics, BaseStyle, Colors} from '../../constants';
import {useTheme, TextInput} from 'react-native-paper';
import {ViewStyle, Text, TextInputProps, TextStyle, View} from 'react-native';
import {HelperText} from 'react-native-paper';
import {FormikProps} from 'formik';
import {normalize} from '../../utils/responsiveFonts';
import {IconX, ICON_TYPE} from '../../icons';
export interface FormikTextInputProps extends TextInputProps {
  formikProps: FormikProps;
  inputStyle: TextStyle;
  containerStyle: ViewStyle;
  label: String;
  mode: String;
  formikKey: String;
  right: Boolean;
}

export default FormikTextInput = React.forwardRef(
  (props: FormikTextInputProps, ref) => {
    const {
      formikProps,
      inputStyle,
      containerStyle,
      label,
      formikKey,
      placeholder,
      wordCount,
      limit,
      labelStyle,
      right,
      mode
    } = props;

    const theme = useTheme();

    const textInputStyle = {
      ...Fonts.fontRegular,
      textAlignVertical: 'top',
      color: theme.colors.text,
      
      fontSize: normalize(12),
      // borderRadius: BaseStyle.BORDER_RADIUS,
      paddingHorizontal: Metrics.s5,
      
      // borderWidth: Metrics.borderWidth,
      // height: ,
    };

    if (formikProps.touched[formikKey] && formikProps.errors[formikKey]) {
      textInputStyle.borderColor = theme.colors.error;
    }

    return (
      <View style={[containerStyle,]}>
        {/* {label !== undefined && <Text
          style={{
            ...Fonts.fontBold,
            fontSize: normalize(10),
            paddingVertical: Metrics.s8,
            ...labelStyle,
            color: Colors.darkSpray
          }}>
          {' '}
          {label}{' '}
        </Text>      } */}

        <TextInput
          ref={ref}
          autoCapitalize="none"
          formikProps={formikProps}
          formikKey={formikKey}
          label={label}
          mode={mode?mode:'outlined'}
          
          style={[textInputStyle, inputStyle,{backgroundColor:'white'}]}
          placeholderTextColor={theme.colors.placeholder}
          onChangeText={formikProps.handleChange(formikKey)}
          onBlur={formikProps.handleBlur(formikKey)}
          value={formikProps.values[formikKey]}
          // error={formikProps.touched[formikKey] && formikProps.errors[formikKey]}
          placeholder={placeholder}
          theme={{roundness: 8}}
          
          {...props}
        />
        {right && (
          <View
            style={{
              position: 'absolute',
              right: 15,
              top: 15,
            }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                padding: 10,
              }}>
              <IconX
                size={Metrics.s20}
                origin={ICON_TYPE.MATERIAL_COMMUNITY}
                name={'calendar-month-outline'}
              />
            </View>
          </View>
        )}

        <View
          style={{
            flexDirection: 'row',
          }}>
          <HelperText
            style={{flex: 1}}
            type="error"
            visible={
              formikProps.touched[formikKey] && formikProps.errors[formikKey]
            }>
            {formikProps.touched[formikKey] && formikProps.errors[formikKey]}
          </HelperText>
        </View>
      </View>
    );
  },
);
