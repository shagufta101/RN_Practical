/**
 *  Redux saga class init
 */

import {all, fork} from 'redux-saga/effects';
import dashBoardSaga from './dashBoardSaga';

const sagas = function* sagas() {
  yield all([dashBoardSaga()]);
};

export default sagas;
