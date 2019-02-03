import { IApiState } from './ApiState';

export interface IAppState {
  apiState: IApiState;

  [key: string]: any;
}

export type AppState = IAppState;