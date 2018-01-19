import AppNavigator from '../navigation/navigationStack';

const initialState = AppNavigator.router.getStateForAction (
  AppNavigator.router.getActionForPathAndParams ('screenone')
);

const navigationReducer = (state = initialState, action) => {
  console.log (state);
  console.log (action);
  const newState = AppNavigator.router.getStateForAction (action, state);
  return newState || state;
};

export default navigationReducer;
