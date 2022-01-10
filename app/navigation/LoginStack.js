import React from 'react';
import Login from '../screens/Login';
import Routes from './routes';
import {Appbar, useTheme} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default (props) => {
  const {
    colors: {onBackground, primary, onSurface},
  } = useTheme();
  return (
    <Stack.Navigator
      screenOptions={({navigation}) => {
        return {
          headerTitle: '',
          headerStyle: {
            elevation: 0,
          },

          cardStyle: {backgroundColor: 'white'},
          headerLeft: () => (
            <Appbar.BackAction
              color={'white'}
              onPress={() => {
                navigation && navigation.pop();
              }}
            />
          ),
        };
      }}
      initialRouteName={Routes.LOGIN_SCREEN}>
      <Stack.Screen
        options={{headerShown: false}}
        name={Routes.LOGIN_SCREEN}
        component={Login}
      />
     
    </Stack.Navigator>
  );
};
