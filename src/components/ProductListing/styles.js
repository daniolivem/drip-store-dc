import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  .content-limit {
    width: 100%;
    max-width: 1440px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;

    @media (max-width: 460px) {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 10px;
    }
  }
`;
