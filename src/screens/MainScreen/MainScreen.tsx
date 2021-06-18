import React from 'react';

import { Visor } from '~/components/Visor';
import { Body } from '~/components/Body';

import { Container } from './styles';

const MainScreen: React.FC = () => {
  return (
    <Container>
      <Visor />
      <Body />
    </Container>
  );
};

export default MainScreen;
