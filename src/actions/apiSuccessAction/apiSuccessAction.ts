import { API_STATE } from '../../constants';
import { IApiActionConfig } from '../../types/ApiActionConfig';

export const apiSuccessAction = <T>(key: string, payload: T, config: IApiActionConfig) => ({
  config,
  key,
  payload,
  type: API_STATE.SUCCESS,
});