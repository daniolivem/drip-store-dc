import styled from 'styled-components';

export const ContentCard = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  max-width: 1440px;

  .card {
    width: 100%;
    max-width: 405px;
    background-color: var(--card-destaque-color);
    border-radius: 8px;
    display: flex;
    padding-left: 30px;

    .card-info {
      width: 100%;
      max-width: 163px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      h3 {
        font-size: 2rem;
        font-weight: 700;
        color: var(--dark-gray);
      }

      .card-tag {
        width: 100%;
        max-width: 96px;
        height: 32px;
        border-radius: 29px;
        padding: 5px 15px;
        background-color: var(--card-tag-color);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin-bottom: 10px;

        span {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--dark-gray-2);
          letter-spacing: 0.75px;
          line-height: 22px;
        }
      }
    }

    .card-image {
      width: 242px;
      height: 251px;

      img {
        height: 100%;
        width: 100%;
      }
    }

    /* Responsividade */

    @media (max-width: 1024px) {
      width: 100%;
      max-width: 338px;
    }

    .card-info {
      h3 {
        @media (max-width: 460px) {
          font-size: 1.8rem;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const ContainerCircles = styled.section`
  width: 100%;
  max-width: 712px;
  height: 138px;
  display: flex;
  gap: 48px;

  .content {
    width: 100%;
    max-width: 104px;
    height: 100%;

    p {
      text-align: center;
      margin-top: 12px;
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--dark-gray-2);
    }

    .content-image {
      background-color: var(--white);
      width: 104px;
      height: 104px;
      border-radius: 150px;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 64px;
        height: 64px;
      }
    }
  }

  /* Responsividade */

  @media (max-width: 460px) {
    max-width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
  }
`;
