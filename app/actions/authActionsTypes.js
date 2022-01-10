/*
 * Reducer actions related with login
 */
import {createAction} from 'redux-actions';

//MARK: Guest User Flow
export const SET_GUEST_USER = 'SET_GUEST_USER';
export const setGuestUser = createAction(SET_GUEST_USER);

export const CHANGE_APP_STATE = 'CHANGE_APP_STATE';
export const changeAppState = createAction(CHANGE_APP_STATE);

export const LOGIN = 'LOGIN';
export const login = createAction(LOGIN);

export const LOGOUT = 'LOGOUT';
export const logout = createAction(LOGOUT);

export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const loginFailure = createAction(LOGIN_FAILURE);

export const LOGIN_REQUESTED = 'LOGIN_REQUESTED';
export const loginRequested = createAction(LOGIN_REQUESTED);

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const loginSuccess = createAction(LOGIN_SUCCESS);

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const logoutSuccess = createAction(LOGOUT_SUCCESS);

//MARK: REGISTER
export const REGISTER = 'REGISTER';
export const register = createAction(REGISTER);

export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const registerFailure = createAction(REGISTER_FAILURE);

export const REGISTER_REQUESTED = 'REGISTER_REQUESTED';
export const registerRequested = createAction(REGISTER_REQUESTED);

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const registerSuccess = createAction(REGISTER_SUCCESS);

export const SET_AUTHENTICATION_TOKEN = 'SET_AUTHENTICATION_TOKEN';
export const setAuthenticationToken = createAction(SET_AUTHENTICATION_TOKEN);

//MARK: Forgot Password Flow

export const FORGOT_PASSWORD = 'FORGOT_PASSWORD';
export const forgotPassword = createAction(FORGOT_PASSWORD);

export const FORGOT_PASSWORD_FAILURE = 'FORGOT_PASSWORD_FAILURE';
export const forgotPasswordFailure = createAction(FORGOT_PASSWORD_FAILURE);

export const FORGOT_PASSWORD_REQUESTED = 'FORGOT_PASSWORD_REQUESTED';
export const forgotPasswordRequested = createAction(FORGOT_PASSWORD_REQUESTED);

export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const forgotPasswordSuccess = createAction(FORGOT_PASSWORD_SUCCESS);

//MARK: Get Profile Flow

export const GET_PROFILE = 'GET_PROFILE';
export const getProfile = createAction(GET_PROFILE);

export const GET_PROFILE_FAILURE = 'GET_PROFILE_FAILURE';
export const getProfileFailure = createAction(GET_PROFILE_FAILURE);

export const GET_PROFILE_REQUESTED = 'GET_PROFILE_REQUESTED';
export const getProfileRequested = createAction(GET_PROFILE_REQUESTED);

export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
export const getProfileSuccess = createAction(GET_PROFILE_SUCCESS);

//MARK: Edit Profile Flow

export const EDIT_PROFILE = 'EDIT_PROFILE';
export const editProfile = createAction(EDIT_PROFILE);

export const EDIT_PROFILE_FAILURE = 'EDIT_PROFILE_FAILURE';
export const editProfileFailure = createAction(EDIT_PROFILE_FAILURE);

export const EDIT_PROFILE_REQUESTED = 'EDIT_PROFILE_REQUESTED';
export const ediProfileRequested = createAction(EDIT_PROFILE_REQUESTED);

export const EDIT_PROFILE_SUCCESS = 'EDIT_PROFILE_SUCCESS';
export const editProfileSuccess = createAction(EDIT_PROFILE_SUCCESS);

//MARK: Change Password Flow

export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const changePassword = createAction(CHANGE_PASSWORD);

export const CHANGE_PASSWORD_FAILURE = 'CHANGE_PASSWORD_FAILURE';
export const changePasswordFailure = createAction(CHANGE_PASSWORD_FAILURE);

export const CHANGE_PASSWORD_REQUESTED = 'CHANGE_PASSWORD_REQUESTED';
export const changePasswordRequested = createAction(CHANGE_PASSWORD_REQUESTED);

export const CHANGE_PASSWORD_SUCCESS = 'CHANGE_PASSWORD_SUCCESS';
export const changePasswordSuccess = createAction(CHANGE_PASSWORD_SUCCESS);

//MARK: getCountries Flow

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const getCountries = createAction(GET_COUNTRIES);

export const GET_COUNTRIES_FAILURE = 'GET_COUNTRIES_FAILURE';
export const getCountriesFailure = createAction(GET_COUNTRIES_FAILURE);

export const GET_COUNTRIES_REQUESTED = 'GET_COUNTRIES_REQUESTED';
export const getCountriesRequested = createAction(GET_COUNTRIES_REQUESTED);

export const GET_COUNTRIES_SUCCESS = 'GET_COUNTRIES_SUCCESS';
export const getCountriesSuccess = createAction(GET_COUNTRIES_SUCCESS);

export const SOCIAL_LOGIN = 'SOCIAL_LOGIN';
export const socialLogin = createAction(SOCIAL_LOGIN);

export const SOCIAL_LOGIN_FAILURE = 'SOCIAL_LOGIN_FAILURE';
export const socialLoginFailure = createAction(SOCIAL_LOGIN_FAILURE);

export const SOCIAL_LOGIN_REQUESTED = 'SOCIAL_LOGIN_REQUESTED';
export const socialLoginRequested = createAction(SOCIAL_LOGIN_REQUESTED);
