import { API_STATE } from '../../constants';
import { IApiError } from '../../types/ApiState';

export const apiErrorAction = (key: string, payload: IApiError) => ({
  key,
  payload,
  type: API_STATE.ERROR,
});