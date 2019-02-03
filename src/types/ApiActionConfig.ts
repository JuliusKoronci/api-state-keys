import { Action } from 'redux';
import { IApiState } from './ApiState';

export interface IApiActionConfig {
  action?: (response: any) => Action;
  cb?: (response: any) => any;
  merge?: (state: IApiState[keyof IApiState]['payload'], payload: any) => IApiState[keyof IApiState]['payload']
}