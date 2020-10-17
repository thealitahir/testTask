import React from 'react';
import {
  CardBody,
  MainContainer,
  Input,
  CardNumber,
  CardHeading,
  CardBodyContainer,
} from './taskCard.style';

const TaskCard = ({ name, handleCheckBox, cardNum, checkbox, onlyName }) => {
  return (
    <MainContainer>
      <CardNumber>
        <CardHeading>Task {cardNum}</CardHeading>
      </CardNumber>
      <CardBodyContainer>
        <CardBody>{name}</CardBody>
        {onlyName ? null : (
          <Input
            style={{ width: '20px' }}
            type="checkbox"
            value={checkbox}
            onChange={handleCheckBox}
          />
        )}
      </CardBodyContainer>
    </MainContainer>
  );
};

export default TaskCard;
