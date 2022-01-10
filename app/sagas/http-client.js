import {call, select, put, delay} from 'redux-saga/effects';
import Idx from 'idx';
import {toastActionsCreators} from '../actions/toastActionTypes';
import {showLoader, hideLoader} from '../actions/appActionsTypes';

import axiosInstance from '../utils/axiosInstance';


function* HttpClient(payload, isLoader = true, authorization = true) {
  // const networkStatus = yield select(({ networkReducer: { isConnected } }) => isConnected);

  const networkStatus = true;

  if (!networkStatus) {
    yield put(
      toastActionsCreators.displayWarning(validations.connectionErrorMsg),
    );

    return {
      error: true,
      result: null,
    };
  }

  if (isLoader) {
    yield put(showLoader());
    yield delay(250);
  }
  const data = {
    ...payload,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (authorization) {
    const authToken = yield select(({authReducer: {token}}) => token);

    if (authToken) {
      data.headers = { 'Authorization': 'Bearer ' + authToken };
    } else {
      if (isLoader) {
        yield put(hideLoader());
        yield put(toastActionsCreators.displayError('Add authorization token'));
      }
      return {
        error: true,
        result: null,
      };
    }
  }

  try {
    const {
      data: result,
      headers: {'x-authorization': authentication = ''},
    } = yield call(axiosInstance, data);

    if (isLoader) {
      yield put(hideLoader());
    }

    if (authentication) {
      yield put(setAuthenticationToken(authentication));
    }

    return {
      error: null,
      result,
    };
  } catch (error) {
    yield put(hideLoader());
    if (Idx(error, (_) => _.code)) {
      if (error.code === 'ECONNABORTED') {
        const message = validations.connectionServiceErrorMsg;

        yield put(toastActionsCreators.displayError(message));
      } else if (error.code === 401) {
        yield delay(250);
        yield put(logoutSuccess());
        yield put(toastActionsCreators.displayError(error.message));
      } else {
        yield put(toastActionsCreators.displayError(error.message));
      }
    }

    if (!!error.response && error.response.status === 504) {
      const message = validations.connectionServiceErrorMsg;
      yield put(toastActionsCreators.displayError(message));
    }

    return {
      error,
      result: null,
    };
  }
}

export default HttpClient;
