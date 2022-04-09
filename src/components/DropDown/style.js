import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    width: 300px;
    margin-bottom: 40px;
    height: 55px;
`;
export const Label = styled.label`
    position: absolute;
    top: 0;
    left: 0;
    color: #1d1d1f;
`;
export const Input = styled.input`
    width: 100%;
    height: 35px;
    background: white;
    padding-left: 5px;
    font-size: 14px;
    position: absolute;
    top: 19px;
    color: gray;
    background-color: rgba(255,255,255,0.8);
    text-overflow: ellipsis;
    outline: none;
    border: 1px solid #d2d2d7;
`;
export const SearchIcon = styled.img`
    width: 20px;
    position: absolute;
    top: 28px;
    right: 3px;
`;
export const Ol = styled.ol`
    background: white;
    color: grey;
    font-size: 14px;
    height: 100px;
    overflow: auto;
    margin: 0;
    padding: 0;
    list-style-type: none;
    position: absolute;
    left: 0;
    top: 55px;
    width: 100%;
    z-index: 999;
    border: 1px solid #d2d2d7;
`;
export const Li = styled.li`
    text-align: left;
    margin: 5px;
    cursor: pointer;
`;
export const Error = styled.span`
    color: #dd6666;
    position: absolute;
    top: 60px;
    font-size: 13px;
`;
