import React from 'react';
import {NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';

import {View, Text, TouchableOpacity} from 'react-native';

class ScreenOne extends React.Component {
  navigate = () => {
    console.log ('Navigate button clicked ');
    const navigateToScreenTwo = NavigationActions.navigate ({
      routeName: 'screentwo',
      params: {name: 'Asad Marfani'},
    });
    this.props.navigation.dispatch (navigateToScreenTwo);
  };
  render () {
    return (
      <View style={{flex: 1}}>
        <Text>Screen1</Text>
        <TouchableOpacity onPress={this.navigate}>
          <Text>Navigate to screen 2</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect () (ScreenOne);
