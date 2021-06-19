import React, { useState } from 'react';

import Icon from '@expo/vector-icons/MaterialIcons';

import { Formula } from '~/components/Formula';

import { white } from '~/constants/Colors';

import {
  Container, History, Head, DegreeMeasureButton, DegreeMeasureButtonText, Bar,
} from './styles';

const CalcHead: React.FC = () => {
  const [useRad, setUseRad] = useState(false);

  const toogleMeasure = () => {
    setUseRad(!useRad);
  };

  return (
    <Container>
      <History />

      <Head>
        <DegreeMeasureButton onPress={toogleMeasure}>
          <DegreeMeasureButtonText>{useRad ? 'RAD' : 'DEG'}</DegreeMeasureButtonText>
        </DegreeMeasureButton>
        <Icon
          name="more-vert"
          color={white}
          size={24}
          style={{
            opacity: 0.8,
          }}
        />
      </Head>

      <Formula />
      <Bar />
    </Container>
  );
};

export default CalcHead;
