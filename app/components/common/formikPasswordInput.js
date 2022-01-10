import React, { useState } from 'react';
import { Fonts, Metrics } from '../../constants';
import { useTheme } from 'react-native-paper';
import { ViewStyle, TextInputProps, View, TouchableOpacity } from 'react-native';
import { HelperText,TextInput } from 'react-native-paper';
import { FormikProps } from 'formik';
import { normalize } from '../../utils/responsiveFonts';
import { IconX, ICON_TYPE } from '../../icons';

export interface FormikPasswordInputProps extends TextInputProps {
    formikProps: FormikProps;
    inputStyle: ViewStyle;
    containerStyle: ViewStyle;
    label: String;
    formikKey: String;
}

export default (FormikPasswordInput = React.forwardRef(
    (props: FormikPasswordInputProps, ref) => {
        const {
            formikProps,
            inputStyle,
            containerStyle,
            label,
            formikKey,
            placeholder,
        } = props;

        const theme = useTheme();

        const textInputStyle = {
            ...Fonts.fontRegular,
            color: theme.colors.text,
            // borderColor: theme.colors.placeholder,
            fontSize: normalize(12),
            // borderRadius: BaseStyle.BORDER_RADIUS,
            paddingHorizontal: Metrics.s5,
            // borderWidth: Metrics.borderWidth,
            // height: 42,
        };

        if (formikProps.touched[formikKey] && formikProps.errors[formikKey]) {
            textInputStyle.borderColor = theme.colors.error;
        }

        const [visible, toggleVisibility] = useState(false);

        const toggle = () => {
            toggleVisibility(!visible);
        };

        return (
            <View style={[containerStyle]}>
                {/* <Text
                    style={{
                        ...Fonts.fontBold,
                        fontSize: normalize(10),
                        paddingVertical: Metrics.s8,
                    }}>
                    {' '}
                    {label}{' '}
                </Text> */}
                <View>
                    <TextInput
                        ref={ref}
                        autoCapitalize="none"
                        mode='outlined'
                        formikProps={formikProps}
                        formikKey={formikKey}
                        label={label}
                        style={[textInputStyle, inputStyle,{backgroundColor:'white'}]}
                        onChangeText={formikProps.handleChange(formikKey)}
                        onBlur={formikProps.handleBlur(formikKey)}
                        value={formikProps.values[formikKey]}
                        placeholder={placeholder}
                        placeholderTextColor={theme.colors.placeholder}
                        secureTextEntry={!visible}
                        {...props}
                        theme={{roundness: 8}}
                    />
                    <View
                        style={{
                            position: 'absolute',
                            right: 15,
                            top:16
                        }}
                    >
                        <TouchableOpacity onPress={toggle}>
                            <View style={{ alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                                <IconX size={Metrics.s20} origin={ICON_TYPE.FEATHER_ICONS} name={visible ? 'eye' : 'eye-off'} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <HelperText
                    type="error"
                    visible={
                        formikProps.touched[formikKey] && formikProps.errors[formikKey]
                    }>
                    {formikProps.touched[formikKey] && formikProps.errors[formikKey]}
                </HelperText>

            </View>
        );
    },
));
