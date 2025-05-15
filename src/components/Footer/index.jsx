import Logo from '../Logo';
import {
  Container,
  ContentCategories,
  ContentContact,
  ContentInfo,
  ContainerFooter,
  ContentLogo,
} from './styles';

const Footer = () => {
  return (
    <ContainerFooter>
      <Container>
        <ContentLogo>
          <Logo />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
            possimus laborum quam error qui est, eveniet, iusto tempore at fuga
            veritatis doloremque magni vel quibusdam facilis sit voluptatum!
            Tempore, excepturi?
          </p>
          <div>
            <span>insta</span>
            <span>X</span>
            <span>facebook</span>
            <p>&</p>
          </div>
        </ContentLogo>

        <ContentInfo>
          <h3>Informação</h3>
          <p>Informações</p>
          <p>Informações</p>
          <p>Informações</p>
          <p>Informações</p>
          <p>Informações</p>
        </ContentInfo>
        <ContentCategories>
          <h3>Categorias</h3>
          <p>Informações</p>
          <p>Informações</p>
          <p>Informações</p>
          <p>Informações</p>
          <p>Informações</p>
        </ContentCategories>
        <ContentContact>
          <h3>Contato</h3>
          <p>Av. akaakk Dummm. 1520-1 andar - aldeota Fortaleza</p>
          <p>Informações</p>
          <p>(85)99999-9999</p>
        </ContentContact>
      </Container>
      <p className='text-bottom'>&copy 2022 Digital colege</p>
    </ContainerFooter>
  );
};

export default Footer;
