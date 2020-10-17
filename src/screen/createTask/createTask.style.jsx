import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const InputLabel = styled.label`
  display: block;
  color: black;
  font-size: 20px;
  font-weight: 400;
  padding: 15px;
`;

export const Input = styled.input`
  background: #e7eef5;
  border: 1px solid #e7eff8;
  box-sizing: border-box;
  border-radius: 3px;
  width: 100%;
  padding: 15px 20px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const LabelDiv = styled.div`
  display: flex;
  width: 50%;
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
`;

export const Submit = styled.button`
  font-size: 30px;
  cursor: pointer;
  border: none;
  background-color: blue;
  color: white;
  padding: 10px;
  border-radius: 5px;
  margin-left: 2px;
`;
