import { Action } from 'redux';
import { API_STATE } from '../constants';
import { IApiStateAction } from '../types/ApiStateAction';
import { AppState } from '..';

const reducers = {
  [API_STATE.SUCCESS]: (state: AppState['apiState'], action: IApiStateAction) => {
    return {
      ...state,
      [action.key]: {
        ...state[action.key],
        error: false,
        errorObject: null,
        loaded: true,
        loading: false,
        payload: action.config.merge ? action.config.merge(state[action.key].payload, action.payload) : action.payload,
      },
    };
  },
  [API_STATE.ERROR]: (state: AppState['apiState'], action: IApiStateAction) => {
    return {
      ...state,
      [action.key]: {
        ...state[action.key],
        error: true,
        errorObject: action.payload,
        loading: false,
      },
    };
  },
  [API_STATE.REQUEST]: (state: AppState['apiState'], action: IApiStateAction) => {
    return {
      ...state,
      [action.key]: {
        ...state[action.key],
        loading: true,
      },
    };
  },
};

export const apiStateReducer = (
  state: AppState['apiState'] = {},
  action: Action,
) => {
  if (reducers[action.type]) {
    return reducers[action.type](state, action as IApiStateAction)
  }

  return state;
};
