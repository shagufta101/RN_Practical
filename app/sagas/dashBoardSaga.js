import {all, call, put, takeLatest} from 'redux-saga/effects';
import * as dashBoardActions from '../actions/dashBoardActionTypes';
import httpClient from './http-client';
import {toastActionsCreators} from '../actions/toastActionTypes';
import ApiConstant from '../api/ApiConstants';

export function* getVideoList(action) {
  yield put(dashBoardActions.getVideoListRequested());

  const payload = {
    method: 'get',
    url: ApiConstant.VIDEO_LIST,
  };

  const {error, result} = yield call(httpClient, payload, true, false);
  if (error) {
    
    yield put(dashBoardActions.getVideoListFailure(error));
  } else {
    if (!result) {
      yield put(toastActionsCreators.displayError(result));
    } else {
      yield put(dashBoardActions.getVideoListSuccess(result.videos));
    }
  }
}

function* dashBoardSaga() {
  yield all([
    takeLatest(dashBoardActions.GET_VIDEO_LIST, getVideoList),
  ]);
}

export default dashBoardSaga;
