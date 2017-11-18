import { StackNavigator } from 'react-navigation';
import PokeList from '../containers/PokeList/PokeList.container';

const AppNavigator = StackNavigator({
  PokeListScreen: {
    screen: PokeList
  }
});

export default AppNavigator;
