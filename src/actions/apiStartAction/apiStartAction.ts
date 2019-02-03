import { API_STATE } from '../../constants';
import { IApiActionConfig } from '../../types/ApiActionConfig';

export const apiStartAction = (key: string, apiCallback: () => Promise<any>, config: IApiActionConfig = {}) => ({
  payload: {
    apiCallback,
    config,
    key,
  },
  type: API_STATE.START,
});