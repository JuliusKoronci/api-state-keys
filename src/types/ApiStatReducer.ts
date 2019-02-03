import { Action } from 'redux';
import { AppState } from './AppState';

export type ApiStatReducer = (state: AppState['apiState'], action: Action) => AppState['apiState']