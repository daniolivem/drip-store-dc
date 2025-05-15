import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container, Content } from './styles';

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
};

export default Layout;
