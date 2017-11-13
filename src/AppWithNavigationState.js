import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addNavigationHelpers } from "react-navigation";
import NavigationActions from "./actions/navigator";
import AppNavigator from "./navigators/AppNavigator";

class AppWithNavigationState extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { dispatch, nav } = this.props;
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
  nav: state.nav
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

export default connect(mapStateToProps, mapDispatchToProps)(
  AppWithNavigationState
);
