import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from './routes';
import DashBoard from '../screens/DashBoard'

const UserNavigatorStack = createStackNavigator();
 
export default (props) => {

  const _screenOptions = {
    headerShown: false,
    cardStyle: { backgroundColor: 'white' },
  };
  
  const getInitialRouteName = () => {
    return Routes.HOME
  }

  return (
    <UserNavigatorStack.Navigator
      screenOptions={_screenOptions}
      initialRouteName={getInitialRouteName}
      headerMode="none">
      <UserNavigatorStack.Screen name={Routes.HOME} component={DashBoard} />
    
    </UserNavigatorStack.Navigator>
  );
};
