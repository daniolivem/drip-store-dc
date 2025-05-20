import FooterScom from '../../components/Footer/FooterScom';
import HeaderWrapper from '../../components/HeaderWrapper';
import { Container, Content } from './styles';

const Layout = ({ children }) => {
  return (
    <Container>
      <HeaderWrapper />
      <Content>{children}</Content>
      <FooterScom />
    </Container>
  );
};

export default Layout;
