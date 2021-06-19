import styled from 'styled-components/native';
import { black, white } from '~/constants/Colors';

export const Container = styled.View`
  background-color: ${black};
  height: 200px;
`;

export const History = styled.View``;

export const Head = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
`;

export const DegreeMeasureButton = styled.TouchableNativeFeedback`
  background-color: ${black};
`;

export const DegreeMeasureButtonText = styled.Text`
  color: ${white};
  opacity: 0.8;
  font-size: 16px;
`;

export const Bar = styled.View`
  width: 24px;
  height: 4px;
  background: white;
  align-self: center;
  border-radius: 2px;
  margin-bottom: 8px;
`;
