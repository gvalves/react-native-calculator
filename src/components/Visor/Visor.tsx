import React from 'react';

import {
  Container, History, Head, DegreeMeasureButton, ConfigButton, Formula, Bar,
} from './styles';

const Visor: React.FC = () => {
  return (
    <Container>
      <History />

      <Head>
        <DegreeMeasureButton />
        <ConfigButton />
      </Head>

      <Formula />
      <Bar />
    </Container>
  );
};

export default Visor;
