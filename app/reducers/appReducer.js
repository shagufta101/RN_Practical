import {
  HIDE_LOADER,
  SHOW_LOADER,
  CHANGE_THEME,
} from '../actions/appActionsTypes';
import {LOGOUT_SUCCESS} from '../actions/authActionsTypes';
import createReducer from '../lib/createReducer';
import {AppStrings} from '../constants';

const initialState = {
  visible: false,
  theme: AppStrings.THEME_TYPES.DEFAULT,
 
};

export const appReducer = createReducer(initialState, {
  [HIDE_LOADER](state, {payload, type}) {
    return {
      ...state,
      visible: false,
    };
  },
  [SHOW_LOADER](state) {
    return {
      ...state,
      visible: true,
    };
  },
  [CHANGE_THEME](state, {payload, type}) {
    return {
      ...state,
      theme: payload,
    };
  },
  [LOGOUT_SUCCESS](state) {
    return initialState;
  },
});
