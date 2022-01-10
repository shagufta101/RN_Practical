/*
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as appReducer from './appReducer';
import * as toastReducer from './toastReducer';
import * as dashBoardReducer from './dashBoardReducer';

export default Object.assign(
  appReducer,
  loadingReducer,
  toastReducer,
  dashBoardReducer,

);
