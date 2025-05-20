import Logo from '../Logo';
import CartImage from '../../assets/icons/Carrinho.svg';
import { BtnNavLink, Container, StyledNavLink } from './styles';
import SearchIcon from '../../assets/icons/Search.svg';
import MenuIcon from '../../assets/icons/Menu.svg';
import MenuVertIcon from '../../assets/icons/Menu-vertical.svg';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { PrimaryBtn } from '../Buttons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    setShowMenu(!showMenu);
  };

  // Função para lidar com a mudança no campo de pesquisa
  const handleInputChange = event => {
    setSearchTerm(event.target.value);
  };

  // Função para lidar com a pesquisa
  const handleSearch = () => {
    if (searchTerm.trim()) {
      // Formata o termo de busca para a URL (substitui espaços por hifens e converte para minúsculas)
      const formattedSearchTerm = searchTerm
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '-');
      navigate(`/products?filter=${formattedSearchTerm}`);
    }
  };

  // Função para lidar com a tecla Enter
  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Container className='header'>
      <div className='dropshadow'>
        <div className='header-main'>
          <button className='menu-button' onClick={handleMenuClick}>
            {isMenuOpen ? (
              <img
                src={MenuVertIcon}
                alt='Ícone de menu vertical'
                style={{ height: '24px' }}
              />
            ) : (
              <img src={MenuIcon} alt='Ícone de menu' />
            )}
          </button>

          <div className='content-logo'>
            <Logo />
          </div>

          <div className='search-input'>
            <input
              type='text'
              placeholder='Pesquisar produtos...'
              value={searchTerm}
              onChange={handleInputChange}
              onKeyUp={handleKeyPress}
            />

            <div className='search-icon' onClick={handleSearch}>
              <img src={SearchIcon} alt='Ícone de pesquisa' />
            </div>

            <NavLink to='/register'>Cadastre-se</NavLink>
          </div>

          <div className='header-buttons'>
            <PrimaryBtn>
              <BtnNavLink to='/login'>Entrar</BtnNavLink>
            </PrimaryBtn>

            <img src={CartImage} alt='Imagem do carrinho de compras' />
          </div>
        </div>

        <nav className={`header-nav ${isMenuOpen ? 'menu-open' : ''}`}>
          <ul>
            <StyledNavLink to='/'>Home</StyledNavLink>
            <StyledNavLink to='/produtos'>Produtos</StyledNavLink>
            <StyledNavLink to='/categorias'>Categorias</StyledNavLink>
            <StyledNavLink to='/orders'>Meus Pedidos</StyledNavLink>
          </ul>
        </nav>
      </div>
    </Container>
  );
};

export default Header;
