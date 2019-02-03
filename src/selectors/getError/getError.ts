import { propOr } from 'ramda';
import { AppState } from '../../types/AppState';
import { selectApiStateByKey } from '../selectApiStateByKey';

export const getError = (state: AppState) => (key: string) => {
  const apiState = selectApiStateByKey(state)(key);

  return propOr(null, 'errorObject', apiState);
};