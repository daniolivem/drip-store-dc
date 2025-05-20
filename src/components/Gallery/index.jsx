import QueimaEstoque from '../../assets/images/queima-estoque.png';
import WhiteSneakers from '../../assets/images/white-sneakers.svg';
import OrnamentImg from '../../assets/icons/Ornament.png';
import { ButtonPrimary } from '../Buttons/styles';
import { Container } from './styles';

const Gallery = () => {
  return (
    <Container>
      <div className='content-gallery'>
        <div className='content-info'>
          <h2>Melhores ofertas personalizadas</h2>
          <div className='content-image-text'>
            <img src={QueimaEstoque} alt='Texto com uma imagem de fogo' />
          </div>

          <p>
            Consequat culpa exercitation mollit nisi excepteur do do tempor
            laboris eiusmod irure consectetur.
          </p>

          <ButtonPrimary $mobile $desktop>
            Ver Ofertas
          </ButtonPrimary>
        </div>

        <div className='content-image'>
          <img src={WhiteSneakers} alt='Tênis branco' />
        </div>

        <div className='content-image-icon'>
          <img src={OrnamentImg} alt='Desenho de estrelas amarelas' />
        </div>
      </div>

      <div className='content-setas'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Container>
  );
};

export default Gallery;
