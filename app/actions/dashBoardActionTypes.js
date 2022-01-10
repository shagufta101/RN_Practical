import {createAction} from 'redux-actions';

//MARK: login test Flow
export const IS_LOGIN_SUCCESS = 'IS_LOGIN_SUCCESS';
export const getLoginSuccess = createAction(IS_LOGIN_SUCCESS);

//MARK: Actions creaters for GetVideo API
export const GET_VIDEO_LIST = 'GET_VIDEO_LIST';
export const getVideoList = createAction(GET_VIDEO_LIST);

export const GET_VIDEO_LIST_FAILURE = 'GET_VIDEO_LIST_FAILURE';
export const getVideoListFailure = createAction(GET_VIDEO_LIST_FAILURE);

export const GET_VIDEO_LIST_REQUESTED = 'GET_VIDEO_LIST_REQUESTED';
export const getVideoListRequested = createAction(GET_VIDEO_LIST_REQUESTED);

export const GET_VIDEO_LIST_SUCCESS = 'GET_VIDEO_LIST_SUCCESS';
export const getVideoListSuccess = createAction(GET_VIDEO_LIST_SUCCESS);

