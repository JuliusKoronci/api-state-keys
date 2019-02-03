import { SagaIterator } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';
import { apiErrorAction } from '../../actions/apiErrorAction';
import { apiRequestAction } from '../../actions/apiRequestAction';
import { apiStartAction } from '../../actions/apiStartAction';
import { apiSuccessAction } from '../../actions/apiSuccessAction';
import { API_STATE } from '../../constants';

export function* handleApiCall({ payload: { key, config, apiCallback } }: ReturnType<typeof apiStartAction>): SagaIterator {
  yield put(apiRequestAction(key));
  try {
    const response = yield call(apiCallback);
    yield put(apiSuccessAction(key, response, config));
    if (config.action) {
      yield put(config.action(response));
    }
    if (config.cb) {
      yield call(config.cb, response);
    }
  } catch (e) {
    yield put(apiErrorAction(key, {
      code: '555',
      message: e.message,
    }));
  }
}

export function* apiFlowSaga(): SagaIterator {
  yield takeEvery(API_STATE.START, handleApiCall)
}