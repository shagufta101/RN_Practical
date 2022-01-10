import createReducer from '../lib/createReducer';
import {actions} from '../actions/toastActionTypes';
import {LOGOUT_SUCCESS} from '../actions/authActionsTypes';

const initialState = {
  message: null,
  error: false,
  warning: false,
  duration: 4000,
};

export const toastReducer = createReducer(initialState, {
  [actions.DISPLAY_INFO](state, {payload, type}) {
    return {
      ...state,
      error: false,
      warning: false,
      duration: payload.duration,
      message: payload.message,
    };
  },
  [actions.DISPLAY_ERROR](state, {payload, type}) {
    return {
      ...state,
      error: true,
      warning: false,
      duration: payload.duration,
      message: payload.message,
    };
  },
  [actions.DISPLAY_WARNING](state, {payload, type}) {
    return {
      ...state,
      error: false,
      warning: true,
      duration: payload.duration,
      message: payload.message,
    };
  },
  [actions.HIDE](state, {payload, type}) {
    return {
      ...state,
      error: false,
      warning: false,
      duration: initialState.duration,
      message: null,
    };
  },
  [LOGOUT_SUCCESS](state) {
    return initialState;
  },
});
