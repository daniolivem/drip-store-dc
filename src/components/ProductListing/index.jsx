import ProductCard from '../ProductCard';
import { Container } from './styles';

const ProductListing = ({ products }) => {
  return (
    <Container>
      <div className='content-limit'>
        {products.map(product => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            priceDiscount={product.priceDiscount}
          />
        ))}
      </div>
    </Container>
  );
};

export default ProductListing;
