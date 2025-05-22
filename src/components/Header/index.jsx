import Logo from '../Logo';
import CartImage from '../../assets/icons/Carrinho.svg';
import { BtnNavLink, Container, StyledNavLink } from './styles';
import SearchIcon from '../../assets/icons/Search.svg';
import MenuIcon from '../../assets/icons/Menu.svg';
import MenuVertIcon from '../../assets/icons/Menu-vertical.svg';

import { useState, useEffect } from 'react';

import { useState } from 'react';

import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { PrimaryBtn } from '../Buttons';
import { InputDefault } from '../Input';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // Obter a localização atual
  const location = useLocation();

  // Verifica se estamos em uma página de autenticação
  const isAuthPage = ['/login', '/register', '/create-account'].includes(
    location.pathname
  );

  // Verificar o tamanho da tela quando o componente montar e quando a janela for redimensionada
  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth <= 460;
      setIsMobile(newIsMobile);

      // Quando não for mobile, sempre mostrar a busca
      // Quando for mobile, manter o estado atual ou ocultar se estiver mudando para mobile
      if (!newIsMobile) {
        setShowSearch(true);
      } else if (isMobile !== newIsMobile) {
        // Quando mudar de desktop para mobile, esconder a busca
        setShowSearch(false);
      }
    };

    // Definir o estado inicial
    handleResize();

    // Adicionar listener para redimensionamento
    window.addEventListener('resize', handleResize);

    // Limpar listener quando o componente desmontar
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    setShowMenu(!showMenu);
  };

  const handleInputChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      const formattedSearchTerm = searchTerm
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '-');
      navigate(`/products?filter=${formattedSearchTerm}`);
    }
  };

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  // Header completo para as demais páginas
  return (
    <Container $showMobileSearch={showSearch} $isAuthPage={isAuthPage}>
      <div className='dropshadow'>
        <div className='header-main'>
          {/* Renderização condicional para o botão de menu */}
          {!isAuthPage && (
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
          )}

          <div className={`content-logo ${isAuthPage ? 'center-logo' : ''}`}>
            <Logo />
          </div>

          {!isAuthPage && (
            <>
              <div className='search-input'>
                {/* Mostrar o input apenas quando showSearch for true OU quando não estiver no modo mobile */}
                {(showSearch || !isMobile) && (
                  <InputDefault
                    type='text'
                    placeholder='Pesquisar produtos...'
                    value={searchTerm}
                    onChange={handleInputChange}
                    onKeyUp={handleKeyPress}
                    className={
                      isMobile && showSearch ? 'mobile-search-active' : ''
                    }
                  />
                )}

                <div
                  className='search-icon'
                  onClick={isMobile ? toggleSearch : handleSearch}
                >
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
            </>
          )}
        </div>

        {!isAuthPage && (
          <nav className={`header-nav ${isMenuOpen ? 'menu-open' : ''}`}>
            <ul>
              <StyledNavLink to='/'>Home</StyledNavLink>
              <StyledNavLink to='/produtos'>Produtos</StyledNavLink>
              <StyledNavLink to='/categorias'>Categorias</StyledNavLink>
              <StyledNavLink to='/orders'>Meus Pedidos</StyledNavLink>
            </ul>
          </nav>
        )}
      </div>
    </Container>
  );
};

export default Header;
