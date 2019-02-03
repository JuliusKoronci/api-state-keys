import { createSelector } from 'reselect';
import { identity } from 'ramda';
import { AppState } from '../../types/AppState';

export const apiStateSelector = (state: AppState) => state.apiState;

export const selectApiState = createSelector(
  apiStateSelector,
  identity,
);