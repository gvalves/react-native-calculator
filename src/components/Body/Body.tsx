import React from 'react';

import {
  Container, Operands, Operand, BasicOperators, Operator, AdvancedOperators,
} from './styles';

const Operators: React.FC = () => {
  return (
    <Container>
      <Operands>
        <Operand> 7 </Operand>
        <Operand> 8 </Operand>
        <Operand> 9 </Operand>
        <Operand> 4 </Operand>
        <Operand> 5 </Operand>
        <Operand> 6 </Operand>
        <Operand> 1 </Operand>
        <Operand> 2 </Operand>
        <Operand> 3 </Operand>
        <Operand> 0 </Operand>
        <Operand> . </Operand>
        <Operand> = </Operand>
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

export default Operators;
