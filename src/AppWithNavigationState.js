import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { addNavigationHelpers } from 'react-navigation';
import AppNavigator from './navigators/AppNavigator';
import Loading from './components/Loading/Loading';

class AppWithNavigationState extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { dispatch, nav, initInProgress } = this.props;
    if (initInProgress) return <Loading />;
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch,
          state: nav
        })}
      />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
  initInProgress: state.app.initInProgress
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  actions: bindActionCreators(
    {
      // actions bind
    },
    dispatch
  )
});

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.any,
  actions: PropTypes.object,
  nav: PropTypes.object,
  initInProgress: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(AppWithNavigationState);
