import { createAction } from 'redux-actions';

export const HIDE_LOADER = 'HIDE_LOADER';
export const hideLoader = createAction(HIDE_LOADER);

export const SHOW_LOADER = 'SHOW_LOADER';
export const showLoader = createAction(SHOW_LOADER);

export const CHANGE_THEME = 'CHANGE_THEME';
export const changeTheme = createAction(CHANGE_THEME);

//MARK: Change Get Category Flow

export const GET_CATEGORY = 'GET_CATEGORY';
export const getCategory = createAction(GET_CATEGORY);

export const GET_CATEGORY_FAILURE = 'GET_CATEGORY_FAILURE';
export const getCategoryFailure = createAction(GET_CATEGORY_FAILURE);

export const GET_CATEGORY_REQUESTED = 'GET_CATEGORY_REQUESTED';
export const getCategoryRequested = createAction(GET_CATEGORY_REQUESTED);

export const GET_CATEGORY_SUCCESS = 'GET_CATEGORY_SUCCESS';
export const getCategorySuccess = createAction(GET_CATEGORY_SUCCESS);

//MARK: Change Get subCategory Flow

export const GET_SUB_CATEGORY = 'GET_SUB_CATEGORY';
export const getSubCategory = createAction(GET_SUB_CATEGORY);

export const GET_SUB_CATEGORY_FAILURE = 'GET_SUB_CATEGORY_FAILURE';
export const getSubCategoryFailure = createAction(GET_SUB_CATEGORY_FAILURE);

export const GET_SUB_CATEGORY_REQUESTED = 'GET_SUB_CATEGORY_REQUESTED';
export const getSubCategoryRequested = createAction(GET_SUB_CATEGORY_REQUESTED);

export const GET_SUB_CATEGORY_SUCCESS = 'GET_SUB_CATEGORY_SUCCESS';
export const getSubCategorySuccess = createAction(GET_SUB_CATEGORY_SUCCESS);