export interface IApiError {
  message: string;
  code: string;

  [key: string]: any
}

export interface IApiCallState {
  loading: boolean;
  loaded: boolean;
  error: boolean;
  errorObject: IApiError | null;
  payload: any;
}

export interface IApiState {[key: string]: IApiCallState}
