import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHomeDomain = (state) => state.home || initialState;

const makeSelectHome = () => createSelector(selectHomeDomain, (substate) => substate);

const makeSelectHomeRecord = () => createSelector(selectHomeDomain, (substate) => substate.data);

const makeSelectHomeLoading = () =>
  createSelector(selectHomeDomain, (substate) => substate.loading);

export default makeSelectHome;
export { makeSelectHomeRecord, makeSelectHomeLoading };
