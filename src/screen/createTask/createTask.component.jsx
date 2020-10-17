import React, { useState } from 'react';
import { MainContainer, InputLabel, Input, Submit, LabelDiv } from './createTask.style';
import { useHistory } from 'react-router-dom';

const CreateTask = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const handleChange = (e) => {
    setName(e.currentTarget.value);
  };
  const handleSubmit = () => {
    const arr = localStorage.getItem('data');
    const rand = 1 + Math.random() * (10000 - 1);
    const obj = JSON.parse(arr);
    obj.push({
      id: rand,
      name: name,
    });
    localStorage.setItem('data', JSON.stringify(obj));
    setName('');
    history.push('/list-tasks');
  };
  return (
    <MainContainer>
      <LabelDiv>
        <InputLabel>Name:</InputLabel>
        <Input type="name" name="name" value={name} onChange={handleChange} />
        <Submit disabled={name === '' ? true : false} type="button" onClick={handleSubmit}>
          Submit
        </Submit>
      </LabelDiv>
    </MainContainer>
  );
};

export default CreateTask;
