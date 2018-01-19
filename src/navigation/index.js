import React from 'react';
import {connect} from 'react-redux';
import {addNavigationHelpers} from 'react-navigation';
import NavigationStack from './navigationStack';

class AppNavigation extends React.Component {
  render () {
    const {navigationState, dispatch} = this.props;
    return (
      <NavigationStack
        navigation={addNavigationHelpers ({dispatch, state: navigationState})}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    navigationState: state.NavigationReducer,
  };
};

export default connect (mapStateToProps) (AppNavigation);
