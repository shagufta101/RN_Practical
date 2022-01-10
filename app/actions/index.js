// export action creators

import * as authActions from './authActionsTypes';
import * as appActions from './appActionsTypes';
import * as toastActionTypes from './toastActionTypes';
import * as dashBoardActionTypes from './dashBoardActionTypes';


export const ActionCreators = Object.assign(
  {},
  authActions,
  appActions,
  toastActionTypes,
  dashBoardActionTypes,
  
);
