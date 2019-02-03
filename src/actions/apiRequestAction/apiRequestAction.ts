import { API_STATE } from '../../constants';

export const apiRequestAction = (key: string) => ({
  key,
  type: API_STATE.REQUEST,
});