import { Container } from './styles';

const ProductCard = ({ image, name, price, priceDiscount }) => {
  // Formatar os preços para exibição em formato R$ XX,XX
  const formatPrice = value => {
    return value.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <Container>
      <div className='card-product'>
        <div className='discount'>30% Off</div>
        <img src={image} alt={name} />
      </div>

      <p>Tênis</p>
      <h4>{name}</h4>
      <div className='card-info'>
        {/* Se houver um preço com desconto, mostramos o preço original riscado */}
        {priceDiscount ? (
          <>
            <p className='original-price'>R$ {formatPrice(price)}</p>
            <p className='discount-price'>R$ {formatPrice(priceDiscount)}</p>
          </>
        ) : (
          // Se não houver desconto, mostramos apenas o preço normal
          <p>R$ {formatPrice(price)}</p>
        )}
      </div>
    </Container>
  );
};

export default ProductCard;
