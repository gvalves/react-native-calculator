import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { MainScreen } from '~/screens/MainScreen';
import { black } from '~/constants/Colors';

const App: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor={black} barStyle="light-content" />
      <NavigationContainer>
        <MainScreen />
      </NavigationContainer>
    </>
  );
};

export { App };
