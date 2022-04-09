import styled from 'styled-components';
 
export const Container = styled.div`
    margin: 0px 44px;
    @media (max-width: 768px) {
    margin: auto;
  }

    div:not(:last-child) {
    display: flex;
    justify-content: space-between;
    font-size: 22px;
    color:#1d1d1f;
    margin-bottom: 10px;
    }
    
    div:nth-child(1) {
        span:nth-child(2) {
        color: #1d1d1f;
        }

    }    
    div:nth-child(2) {
        span:nth-child(2) {
        color: #ff6384
        }

    }    
    div:nth-child(3) {
        span:nth-child(2) {
        color: #36a2eb
        }
    }
`;
