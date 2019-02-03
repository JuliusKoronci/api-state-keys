import { SagaIterator } from 'redux-saga';
import { apiStartAction } from '../../actions/apiStartAction';
export declare function handleApiCall({ payload: { key, config, apiCallback } }: ReturnType<typeof apiStartAction>): SagaIterator;
export declare function apiFlowSaga(): SagaIterator;
//# sourceMappingURL=apiFlowSaga.d.ts.map