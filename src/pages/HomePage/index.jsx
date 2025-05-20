import Section from '../../components/Section';
import Collection1 from '../../public/collection-1.png';
import Collection2 from '../../public/collection-2.png';
import Collection3 from '../../public/collection-3.png';
import { ContainerCircles, ContentCard } from './styles';
import Camiseta from '../../assets/images/camiseta.png';
import Pants from '../../assets/images/pants.png';
import Sneakers from '../../assets/images/sneakers.png';
import Chap from '../../assets/images/chap.png';
import Headphone from '../../assets/images/headphone.png';
import { ButtonSecundary } from '../../components/Buttons/styles';

const cardsCircle = [
  {
    id: 1,
    image: Camiseta,
    title: 'Camisetas',
  },
  {
    id: 2,
    image: Pants,
    title: 'Calças',
  },
  {
    id: 3,
    image: Sneakers,
    title: 'Tênis',
  },
  {
    id: 4,
    image: Chap,
    title: 'Chapéus',
  },
  {
    id: 5,
    image: Headphone,
    title: 'Headphones',
  },
];

const HomePage = () => {
  const windowWidth = window.innerWidth;

  return (
    <div>
      <Section title='Coleções em destaque'>
        <div>Galery</div>
      </Section>

      <Section title='Coleçoes em destaque'>
        <ContentCard>
          <div className='card'>
            <div className='card-info'>
              <div className='card-tag'>
                <span>30%</span>
                <span>OFF</span>
              </div>

              <h3>Novo drop Supreme</h3>
              <ButtonSecundary>Comprar</ButtonSecundary>
            </div>

            <div className='card-image'>
              <img src={Collection1} alt='Coleção 1' />
            </div>
          </div>

          <div className='card'>
            <div className='card-info'>
              <div className='card-tag'>30% off</div>
              <h3>Novo drop Supreme</h3>
              <ButtonSecundary>Comprar</ButtonSecundary>
            </div>
            <div className='card-image'>
              <img src={Collection2} alt='Coleção 1' />
            </div>
          </div>

          <div className='card'>
            <div className='card-info'>
              <div className='card-tag'>30% off</div>
              <h3>Novo drop Supreme</h3>
              <ButtonSecundary>Comprar</ButtonSecundary>
            </div>
            <div className='card-image'>
              <img src={Collection3} alt='Coleção 1' />
            </div>
          </div>
        </ContentCard>
      </Section>

      <Section
        title='Coleçoes em destaque'
        titleAlign={windowWidth <= 1024 ? 'left' : 'center'}
      >
        <ContainerCircles>
          {cardsCircle.map(card => (
            <div className='content' key={card.id}>
              <div className='content-image'>
                <img src={card.image} alt={card.title} />
              </div>
              <p>{card.title}</p>
            </div>
          ))}
        </ContainerCircles>
      </Section>
    </div>
  );
};

export default HomePage;
