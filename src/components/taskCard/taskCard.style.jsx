import styled from 'styled-components';

export const CardBody = styled.div`
  background-color: 'red';
`;

export const MainContainer = styled.div`
  border: 1px solid red;
  border-radius: 10px;
  width: 25%;
  margin: 10px;
  height: 170px;
`;

export const CardBodyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  height: 50%;
`;

export const Input = styled.input`
  background: #e7eef5;
  border: 2px solid #e7eff8;
  box-sizing: border-box;
  border-radius: 3px;
  width: 100%;
  padding: 15px 20px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  width: 50%;
`;

export const CardNumber = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px dotted black;
`;

export const CardHeading = styled.h1`
  font-size: 30px;
  margin: 0px;
`;
