import React, {useEffect, useState} from 'react';
import {
  View,
  Platform,
  Keyboard,
  Image,
  Dimensions,
} from 'react-native';
import {useTheme} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import styles from './styles';
import {Formik} from 'formik';
import * as yup from 'yup';
import {KeyboardAwareScrollView as ScrollView} from 'react-native-keyboard-aware-scroll-view';
import { i18n, Images} from '../../constants';
import {
  FormikTextInput,
  TouchableX,
  FormikPasswordInput,
} from '../../components';
import {scale,} from '../../utils/responsiveFonts';
import * as dashBoardAction from '../../actions/dashBoardActionTypes';

const {login, validations} = i18n;

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .lowercase()
    .label(login.email)
    .email()
    .required(validations.enterEmail),
  password: yup
    .string()
    .label(login.password)
    .required(validations.enterPassword)
    .min(6)
    .max(20),
});

export default function Login(props) {
 
  const {colors} = useTheme();

  const [orientation, setOrientation] = useState('PORTRAIT');

  // This function will Get Orientation and Set UI accordingly
  const determineAndSetOrientation = () => {
    let width = Dimensions.get('window').width;
    let height = Dimensions.get('window').height;

    if (width < height) {
      setOrientation('PORTRAIT');
    } else {
      setOrientation('LANDSCAPE');
    }
  };

  useEffect(() => {
    determineAndSetOrientation();
    Dimensions.addEventListener('change', determineAndSetOrientation);

    return () => {
      Dimensions.removeEventListener('change', determineAndSetOrientation);
    };
  }, [orientation]);

  const emailRef = React.createRef();
  const passwordRef = React.createRef();

  const initialValues = {
    email: __DEV__ ? 'testjohn1@mailinator.com' : '',
    password: __DEV__ ? 'Enter@123' : '',
  };
  const dispatch = useDispatch();

  return orientation === 'PORTRAIT' ? (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          Keyboard.dismiss();

          const data = {
            data: {
              email: values.email,
              password: values.password,
            },
          };

          console.log('User Input Values', data);
          dispatch(dashBoardAction.getLoginSuccess(true));
        }}
        validationSchema={validationSchema}>
        {(formikProps) => (
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              backgroundColor: 'white',
              justifyContent: 'space-between',
            }}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            keyboardDismissMode={Platform.OS === 'ios' ? 'on-drag' : 'none'}
            keyboardShouldPersistTaps="always">
            <View style={{flex: 1}}>
              <Image
                source={Images.ic_welcome_logo}
                style={{
                  flex: 1,
                  alignSelf: 'center',
                  height: '100%',
                  width: '100%',
                  margin: scale(50),
                }}
                resizeMode="contain"
              />

              <View style={{justifyContent: 'flex-start', flex: 1}}>
                <FormikTextInput
                  ref={emailRef}
                  label={login.email_without}
                  formikProps={formikProps}
                  formikKey="email"
                  placeholder={login.email_without}
                  returnKeyType="next"
                  keyboardType="email-address"
                  onSubmitEditing={() => passwordRef.current.focus()}
                />
                <FormikPasswordInput
                  ref={passwordRef}
                  label={login.password}
                  formikProps={formikProps}
                  formikKey="password"
                  returnKeyType="next"
                  placeholder={login.password}
                  maxLength={20}
                  onSubmitEditing={formikProps.handleSubmit}
                />

                <TouchableX
                  hideRightIcon
                  mode="contained"
                  onPress={formikProps.handleSubmit}
                  label={login.login}
                />
              </View>
            </View>
          </ScrollView>
        )}
      </Formik>
    </View>
  ) : (
    <View style={[styles.container, {flexDirection: 'row'}]}>
      <View style={{flex: 1}}>
        <Image
          source={Images.ic_welcome_logo}
          style={{
            alignSelf: 'center',
            height: '70%',
            width: '70%',
            flex: 1,
          
          }}
          resizeMode="contain"
        />
      </View>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          Keyboard.dismiss();

          const data = {
            data: {
              email: values.email,
              password: values.password,
            },
          };
        }}
        validationSchema={validationSchema}>
        {(formikProps) => (
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              backgroundColor: 'white',
              justifyContent: 'space-between',
             
            }}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            keyboardDismissMode={Platform.OS === 'ios' ? 'on-drag' : 'none'}
            keyboardShouldPersistTaps="always">
            <View style={{justifyContent: 'center', flex: 1}}>
              <FormikTextInput
                ref={emailRef}
                label={login.email_without}
                formikProps={formikProps}
                formikKey="email"
                placeholder={login.email_without}
                returnKeyType="next"
                keyboardType="email-address"
                onSubmitEditing={() => passwordRef.current.focus()}
              />
              <FormikPasswordInput
                ref={passwordRef}
                label={login.password}
                formikProps={formikProps}
                formikKey="password"
                returnKeyType="next"
                placeholder={login.password}
                maxLength={20}
                onSubmitEditing={formikProps.handleSubmit}
              />

              <TouchableX
                hideRightIcon
                mode="contained"
                onPress={formikProps.handleSubmit}
                label={login.login}
              />
            </View>
          </ScrollView>
        )}
      </Formik>
    </View>
  );
}
