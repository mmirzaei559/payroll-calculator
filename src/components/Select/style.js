import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    width: 300px;
    margin-bottom: 40px;
`;
export const SelectTag = styled.select`
    width: 100%;
    height: 35px;
    padding-left: 5px;
    font-size: 14px;
    color: gray;
    background-color: rgba(255,255,255,0.8);
    outline: none;
    border: 1px solid #d2d2d7;
`;
export const Error = styled.span`
    color: #dd6666;
    position: absolute;
    top: 60px;
    font-size: 13px;
    width: 100%;
    left: 0;
`;
