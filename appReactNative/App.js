import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Home from './src/pages/HomePage'

const App = () => {

  return (
    <NavigationContainer>
      <Home />
    </NavigationContainer>
  )
}

export default App;