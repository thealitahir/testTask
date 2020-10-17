import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import TaskCard from '../../components/taskCard/taskCard.component';

import {
  MainContainer,
  ButtonContainer,
  CardContainer,
  ButtonDiv,
  DeleteTaskButton,
} from './bulkDelete.style';

const BulkDelete = () => {
  const history = useHistory();
  const [data, setData] = useState('');
  const [check, setCheck] = useState([]);
  const [condition, setCondition] = useState(false);
  useEffect(() => {
    const arr = localStorage.getItem('data');
    const obj = JSON.parse(arr);
    setData(obj);
  }, [setData]);

  const handleCheck = (data) => {
    setCondition(true);
    const index = check.indexOf(data);
    if (index === -1) {
      check.push(data);
    } else {
      check.splice(index, 1);
    }
  };
  const handleDelete = () => {
    setCondition(false);
    if (check !== []) {
      const id = localStorage.getItem('data');
      const data = JSON.parse(id);
      const a = data.filter((i) => !check.includes(i.id));
      localStorage.setItem('data', JSON.stringify(a));
      setData(a);
    } else {
    }
  };
  const handleDeleteAll = () => {
    if (check !== []) {
      const id = localStorage.getItem('data');
      const data = JSON.parse(id);
      localStorage.setItem('data', JSON.stringify([]));
      setData([]);
    }
  };
  return (
    <MainContainer>
      <CardContainer>
        {data &&
          data.map((i, index) => (
            <TaskCard
              key={index}
              name={i.name}
              checkbox={condition}
              handleCheckBox={() => handleCheck(i.id)}
              cardNum={index + 1}
            />
          ))}
      </CardContainer>
      <ButtonDiv>
        <ButtonContainer>
          <DeleteTaskButton type="button" onClick={handleDelete}>
            Delete Task
          </DeleteTaskButton>
        </ButtonContainer>
        <ButtonContainer>
          <DeleteTaskButton type="button" onClick={handleDeleteAll}>
            Delete All Task
          </DeleteTaskButton>
        </ButtonContainer>
      </ButtonDiv>
    </MainContainer>
  );
};

export default BulkDelete;
