import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import Calculadora from './Calculadora';
import Custos from './Custos';

const Home = () => {
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    {key: 'calculadora', title: 'Calculadora', icon: 'calculator'},
    {key: 'custos', title: 'Custos', icon: 'cash'}
  ]);

  const renderScene = BottomNavigation.SceneMap({
    calculadora: Calculadora,
    custos: Custos,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Home;