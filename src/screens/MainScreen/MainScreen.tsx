import React from 'react';

import { CalcHead } from '~/components/CalcHead';
import { CalcBody } from '~/components/CalcBody';

import { Container } from './styles';

const MainScreen: React.FC = () => {
  return (
    <Container>
      <CalcHead />
      <CalcBody />
    </Container>
  );
};

export default MainScreen;
