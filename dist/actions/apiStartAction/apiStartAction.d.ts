import { IApiActionConfig } from '../../types/ApiActionConfig';
export declare const apiStartAction: (key: string, apiCallback: () => Promise<any>, config?: IApiActionConfig) => {
    payload: {
        apiCallback: () => Promise<any>;
        config: IApiActionConfig;
        key: string;
    };
    type: string;
};
//# sourceMappingURL=apiStartAction.d.ts.map