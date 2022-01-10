import { StackActions } from '@react-navigation/native';
import * as React from 'react';

// NavigationConatiner is refered here - Check NavigationStack
export const navigationRef = React.createRef();

function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

function push(name, params) {
  navigationRef.current?.dispatch(StackActions.push(name, params));
}

function goBack() {
  navigationRef.current?.goBack();
}

function replace(screenName, params) {
  navigationRef.current?.replace(screenName, {
    someParam: params,
  })
}

function reset(screenName, params) {
  navigationRef.current?.reset({
    index: 0,
    routes: [
      {
        name: screenName,
        params: params
      },
    ],
  });
}

export default {
  navigate,
  push,
  goBack,
  reset,
  replace
};
