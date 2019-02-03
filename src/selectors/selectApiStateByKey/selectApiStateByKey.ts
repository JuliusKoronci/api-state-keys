import { AppState } from '../../types/AppState';
import { selectApiState } from '../selectApiState';

export const selectApiStateByKey = (state: AppState) => (key: string) => {
  const apiState = selectApiState(state);
  return apiState[key];
};