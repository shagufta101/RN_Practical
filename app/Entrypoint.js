/**
 * React Native App
 * Everthing starts from the entrypoint
 */
import React, {useEffect, useRef, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  ActivityIndicator,
  StatusBar,
  Platform,
  Animated,
  StyleSheet,
} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import RNBootSplash from 'react-native-bootsplash';
import Navigator from './navigation';
import configureStore from './store/configureStore';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Colors,  Images} from './constants';
import {UniversalLoader, UniversalToast} from './components';
import {AppContextProvider} from './services/appStateContext';
const {persistor, store} = configureStore();

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.mountainMeadow,
    accent: Colors.pomegranate,
    placeholder: Colors.silverChalice,
    cardDisabled: Colors.wildSand,
    link: Colors.dodgerBlue,
  },
};

export default function Entrypoint() {
  let [bootSplashIsVisible, setBootSplashIsVisible] = useState(true);
  let [bootSplashLogoIsLoaded, setBootSplashLogoIsLoaded] = useState(false);
  let opacity = useRef(new Animated.Value(1));
  let translateY = useRef(new Animated.Value(0));

  let init = async () => {
    try {
      await RNBootSplash.hide();

      Animated.timing(opacity.current, {
        useNativeDriver: true,
        toValue: 0,
        duration: 1000,
        delay: 350,
      }).start(() => {
        setBootSplashIsVisible(false);
      });
    } catch (error) {
      setBootSplashIsVisible(false);
    }
  };

  useEffect(() => {
    bootSplashLogoIsLoaded && init();
  }, [bootSplashLogoIsLoaded]);

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
          {/* <ReduxNetworkProvider> */}
          <PaperProvider theme={theme}>
            {Platform.OS === 'android' && (
              <StatusBar backgroundColor={theme.colors.primary} />
            )}
            <AppContextProvider>
              <Navigator />
            </AppContextProvider>
            <UniversalLoader />
            <UniversalToast />
          </PaperProvider>
          {bootSplashIsVisible && (
            <Animated.View
              style={[
                StyleSheet.absoluteFill,
                styles.bootsplash,
                {opacity: opacity.current},
              ]}>
              <Animated.Image
                source={Images.bootsplash_logo}
                fadeDuration={0}
                onLoadEnd={() => setBootSplashLogoIsLoaded(true)}
                style={[
                  styles.logo,
                  {transform: [{translateY: translateY.current}]},
                ]}
              />
            </Animated.View>
          )}
          {/* </ReduxNetworkProvider> */}
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 24,
    fontWeight: '700',
    margin: 20,
    lineHeight: 30,
    color: '#333',
    textAlign: 'center',
  },
  bootsplash: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  logo: {
    borderRadius: 20,
    height: 200,
    width: 200,
  },
});
