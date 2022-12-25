import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectHomeLoading, makeSelectHomeRecord } from './selector';
import { getData } from './action';
import { compose } from 'redux';
import PropTypes from 'prop-types';

const Index = ({ data, loading, getRecord }) => {
  useEffect(() => {
    getRecord();
  }, []);
  console.log({ data, loading });
  return <div>Home</div>;
};

Index.propTypes = {
  loading: PropTypes.bool,
  data: PropTypes.object,
  getRecord: PropTypes.func
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectHomeLoading(),
  data: makeSelectHomeRecord()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getRecord: () => dispatch(getData())
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect, memo)(Index);
