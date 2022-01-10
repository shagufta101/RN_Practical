import createReducer from '../lib/createReducer';
import {
  GET_VIDEO_LIST_SUCCESS,
  IS_LOGIN_SUCCESS,
} from '../actions/dashBoardActionTypes';
import {LOGOUT_SUCCESS} from '../actions/authActionsTypes';

const initialState = {
  isLogin: false,
  getVideos:[]
};

export const dashBoardReducer = createReducer(initialState, {
  [IS_LOGIN_SUCCESS](state, {payload, type}) {
    return {
      ...state,
      isLogin: true,
    };
  },
  [GET_VIDEO_LIST_SUCCESS](state, {payload, type}) {
    return {
      ...state,
      getVideos: payload,
    };
  },

  [LOGOUT_SUCCESS](state) {
    return initialState;
  },
});
