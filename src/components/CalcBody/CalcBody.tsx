import React from 'react';

import {
  Container, Operands, OperandRow, Operand, BasicOperators, Operator, AdvancedOperators,
} from './styles';

const CalcBody: React.FC = () => {
  return (
    <Container>
      <Operands>
        <OperandRow>
          <Operand> 7 </Operand>
          <Operand> 8 </Operand>
          <Operand> 9 </Operand>
        </OperandRow>
        <OperandRow>
          <Operand> 4 </Operand>
          <Operand> 5 </Operand>
          <Operand> 6 </Operand>
        </OperandRow>
        <OperandRow>
          <Operand> 1 </Operand>
          <Operand> 2 </Operand>
          <Operand> 3 </Operand>
        </OperandRow>
        <OperandRow>
          <Operand> 0 </Operand>
          <Operand> . </Operand>
          <Operand> = </Operand>
        </OperandRow>
      </Operands>

      <BasicOperators>
        <Operator> C </Operator>
        <Operator> / </Operator>
        <Operator> x </Operator>
        <Operator> - </Operator>
        <Operator> + </Operator>
      </BasicOperators>

      <AdvancedOperators />
    </Container>
  );
};

export default CalcBody;
