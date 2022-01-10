import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';
import Clipboard from '@react-native-community/clipboard';
import {navigationRef} from './NavigationService';
import Routes from './routes';
import UserNavigatorStack from './UserNavigator';
import LoginStack from './LoginStack';

const Stack = createStackNavigator();

function App(props) {

  const dispatch = useDispatch();

  const homeOptions = {
    from: props,
  };
  const isLoggedIn = useSelector((state) => state.dashBoardReducer.isLogin);
  
  const loginStackOptions = {
    animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        // initialRouteName={"UpdateLogo"}
        screenOptions={{
          headerShown: false,
          cardStyle: {backgroundColor: 'white'},
        }}
        headerMode="none">
        
        {isLoggedIn ? (
          <Stack.Screen name={Routes.MAIN_APP} component={UserNavigatorStack} />
        ) : (
          <Stack.Screen
            name={Routes.LOGIN_STACK}
            component={LoginStack}
            options={loginStackOptions}
          />
        )}
          
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
