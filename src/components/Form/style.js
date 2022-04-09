import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const InputsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CalculatorButton = styled.button`
    color: gray;
    background-color: rgba(255,255,255,0.8);
    border: none;
    outline: none;
    font-size: 20px;
    padding: 10px 20px;
    margin-top: 100px;
    cursor: pointer;
`;