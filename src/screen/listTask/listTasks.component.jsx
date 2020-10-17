import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import TaskCard from '../../components/taskCard/taskCard.component';

import { MainContainer, CreateTaskButton, ButtonContainer, CardContainer } from './listTasks.style';

const ListTasks = () => {
  const history = useHistory();
  const [data, setData] = useState('');
  const [check, setCheck] = useState([]);
  const [condition, setCondition] = useState(false);
  useEffect(() => {
    const arr = localStorage.getItem('data');
    const obj = JSON.parse(arr);
    setData(obj);
  }, [setData]);

  const handleCreateTask = () => {
    history.push('/create-task');
  };
  const handleCheck = (data) => {
    setCondition(true);
    const index = check.indexOf(data);
    if (index === -1) {
      check.push(data);
    } else {
      check.splice(index, 1);
    }
  };

  return (
    <MainContainer>
      <ButtonContainer>
        <CreateTaskButton type="button" onClick={handleCreateTask}>
          Create Task
        </CreateTaskButton>
      </ButtonContainer>
      <CardContainer>
        {data &&
          data.map((i, index) => (
            <TaskCard
              key={index}
              name={i.name}
              checkbox={condition}
              handleCheckBox={() => handleCheck(i.id)}
              cardNum={index + 1}
              onlyName={true}
            />
          ))}
      </CardContainer>
      <ButtonContainer>
        <CreateTaskButton type="button" onClick={() => history.push('/bulk-delete')}>
          Bulk Delete
        </CreateTaskButton>
      </ButtonContainer>
    </MainContainer>
  );
};

export default ListTasks;
