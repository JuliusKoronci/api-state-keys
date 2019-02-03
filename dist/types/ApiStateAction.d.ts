import { Action } from 'redux';
import { IApiActionConfig } from './ApiActionConfig';
export interface IApiStateAction extends Action {
    payload?: any;
    key: string;
    config: IApiActionConfig;
}
//# sourceMappingURL=ApiStateAction.d.ts.map