import styled from 'styled-components/native';

import { darkBlack, primary, white } from '~/constants/Colors';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${darkBlack};
`;

export const Operands = styled.View`
  flex: 3;
  padding: 16px;
`;

export const OperandRow = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const Operand = styled.Text`
  color: ${white};
  flex: 1;
  font-size: 32px;
`;

export const BasicOperators = styled.View`
  flex: 1;
  margin: 40px 0;
  justify-content: space-between;
`;

export const Operator = styled.Text`
  color: ${white};
  font-size: 19.2px;
`;

export const AdvancedOperators = styled.View`
  background-color: ${primary};
  height: 100%;
  width: 30px;
`;
