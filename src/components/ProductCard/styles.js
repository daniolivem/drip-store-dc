import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 292px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  .card-product {
    width: 100%;
    height: 300px;
    background-color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    overflow: hidden;
    padding: 38px 20px 0;
    position: relative;
    box-shadow:
      rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

    .discount {
      position: absolute;
      top: 20px;
      left: 20px;
      background-color: var(--card-tag-color);
      color: var(--dark-gray-2);
      padding: 5px 15px;
      border-radius: 29px;
      font-size: 0.9rem;
      font-weight: 700;
    }

    img {
      width: 250px;
      height: 135px;
      transform: rotate(30deg);
    }
  }

  p {
    font-size: 0.7rem;
    font-weight: 700;
    color: var(--light-gray);
    line-height: 24px;
    letter-spacing: 0.75px;
  }

  h4 {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.75px;
    color: var(--dark-gray-2);
  }

  .card-info {
    display: flex;
    gap: 12px;
    align-items: center;

    .original-price {
      font-size: 1.5rem;
      font-weight: 400;
      line-height: 38px;
      letter-spacing: 0.75px;
      color: var(--light-gray); /* Preço original riscado */
    }

    .discount-price {
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 38px;
      letter-spacing: 0.75px;
      color: var(--dark-gray); /* Destacando o preço com desconto */
    }
  }

  /* Responsividade */
  @media (max-width: 768px) {
    max-width: 220px;

    .card-product {
      height: 200px;
    }
  }

  @media (max-width: 460px) {
    max-width: 160px;
    gap: 0px;

    .card-product {
      height: 160px;
    }

    h4 {
      font-size: 0.8rem;
    }

    .card-info {
      gap: 8px;

      .original-price {
        font-size: 0.8rem;
        line-height: 20px;
        letter-spacing: -0.75px;
      }

      .discount-price {
        font-size: 0.8rem;
        line-height: 20px;
        letter-spacing: -0.75px;
      }
    }
  }
`;
