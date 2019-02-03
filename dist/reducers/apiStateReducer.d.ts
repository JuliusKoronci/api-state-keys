import { Action } from 'redux';
export declare const apiStateReducer: (state: import("..").IApiState | undefined, action: Action<any>) => {
    [x: string]: import("..").IApiCallState | {
        error: boolean;
        errorObject: any;
        loading: boolean;
        loaded: boolean;
        payload: any;
    };
};
//# sourceMappingURL=apiStateReducer.d.ts.map