import React from 'react';
import { Text } from 'react-native';

import { Container } from './styles';

const MainScreen: React.FC = () => {
  return (
    <Container>
      <Text>Hello you are in the main screen!</Text>
    </Container>
  );
};

export default MainScreen;
