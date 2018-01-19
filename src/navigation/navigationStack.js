import {StackNavigator} from 'react-navigation';

import ScreenOne from '../components/screens/screen1';
import ScreenTwo from '../components/screens/screen2';

const navigation = StackNavigator ({
  screenone: {
    screen: ScreenOne,
  },
  screentwo: {
    screen: ScreenTwo,
  },
});

export default navigation;
