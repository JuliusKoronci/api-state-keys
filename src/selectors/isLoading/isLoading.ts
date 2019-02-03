import { propOr } from 'ramda';
import { AppState } from '../../types/AppState';
import { selectApiStateByKey } from '../selectApiStateByKey';

export const isLoading = (state: AppState) => (key: string) => {
  const apiState = selectApiStateByKey(state)(key);

  return propOr(false, 'loading', apiState);
};