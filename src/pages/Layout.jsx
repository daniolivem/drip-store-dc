import { Header } from '../components/Header';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Layout = () => {
  return (
    <Container>
      <Header />
      <p>aqui children</p>

      <footer>aqui o footer</footer>
    </Container>
  );
};
