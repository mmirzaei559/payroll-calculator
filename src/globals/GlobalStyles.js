import {createGlobalStyle} from "styled-components";

const Globals = createGlobalStyle`

@import url('https://fonts.google.com/specimen/Source+Sans+Pro');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-size: 100%;
    height: 100vh;
    font-family: 'Source Sans Pro', sans-serif;
    background-color: #d3d3d3;
    background-image: linear-gradient(180deg, #d3d3d3 0%, #7f8c8d 74%);
}
h1 {
    margin: 10px auto 50px;
}

.App {
    display: flex;
    flex-direction: column;
    width: 768px;
    margin: auto;
    align-items: center;
    
    @media (max-width: 768px) {
    width: 100%;
  }
}
.wrapper {
    width: 100%;
    display: flex;
    align-items: start;
    @media (max-width: 768px) {
    flex-direction: column;
  }
}

.error {
    border: 2px solid #dd6666;
    }
`;
export default Globals;