import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const CardContainer = styled.div`
  width: 98%;
  border: 1px solid black;
  margin-left: 10px;
  margin-top: 10px;
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: end;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const CreateTaskButton = styled.button`
  font-size: 30px;
  cursor: pointer;
  border: 2px solid grey;
  color: white;
  margin-top: 20px;
  background-color: #008000ad;
  border-radius: 5px;
`;

export const DeleteTaskButton = styled.button`
  font-size: 30px;
  cursor: pointer;
  border: 1px solid grey;
  color: white;
  margin-top: 20px;
  background-color: red;
  border-radius: 5px;
  padding: 10px;
`;
