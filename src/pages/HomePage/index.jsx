import Section from '../../components/Section';
import Collection1 from '../../public/collection-1.png';
import Collection2 from '../../public/collection-2.png';
import Collection3 from '../../public/collection-3.png';
import { ContentCard } from './styles';

const HomePage = () => {
  return (
    <div>
      <Section title='Coleçoes em destaque'>
        <ContentCard>
          <div className='card'>
            <div className='card-info'>
              <div className='card-tag'>
                <span>30%</span>
                <span>OFF</span>
              </div>

              <h3>Novo drop Supreme</h3>
              <button type='button'>Comprar</button>
            </div>

            <div className='card-image'>
              <img src={Collection1} alt='Coleção 1' />
            </div>
          </div>

          <div className='card'>
            <div className='card-info'>
              <div className='card-tag'>30% off</div>
              <h3>Novo drop Supreme</h3>
              <button type='button'>Comprar</button>
            </div>
            <div className='card-image'>
              <img src={Collection2} alt='Coleção 1' />
            </div>
          </div>

          <div className='card'>
            <div className='card-info'>
              <div className='card-tag'>30% off</div>
              <h3>Novo drop Supreme</h3>
              <button type='button'>Comprar</button>
            </div>
            <div className='card-image'>
              <img src={Collection3} alt='Coleção 1' />
            </div>
          </div>
        </ContentCard>
      </Section>
    </div>
  );
};

export default HomePage;
