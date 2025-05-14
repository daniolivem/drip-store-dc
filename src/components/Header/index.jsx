import { Logo } from '../Logo';
import CartImage from '../../assets/images/Carrinho.svg';
import { Container, Li } from './styles';
import SearchIcon from '../../assets/images/Search.svg';

export const Header = () => {
  return (
    <Container>
      <div className='dropshadow'>
        <div className='header-main'>
          <div>
            <Logo />
          </div>

          <div className='search-input'>
            <input type='text' placeholder='Pesquisar produtos...' />

            <div className='search-icon'>
              <img src={SearchIcon} alt='Ícone de pesquisa' />
            </div>

            <a href='#'>Cadastre-se</a>
          </div>

          <div className='header-buttons'>
            <button type='button'>Entrar</button>
            <img src={CartImage} alt='Imagem do carrinho de compras' />
          </div>
        </div>

        <nav className='header-nav'>
          <ul>
            <Li $action>Home</Li>
            <Li>Produtos</Li>
            <Li>Categorias</Li>
            <Li>Meus Pedidos</Li>
          </ul>
        </nav>
      </div>
    </Container>
  );
};
