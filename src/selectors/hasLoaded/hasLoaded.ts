import { propOr } from 'ramda';
import { AppState } from '../../types/AppState';
import { selectApiStateByKey } from '../selectApiStateByKey';

export const hasLoaded = (state: AppState) => (key: string) => {
  const apiState = selectApiStateByKey(state)(key);

  return propOr(false, 'loaded', apiState);
};