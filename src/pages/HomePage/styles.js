import styled from 'styled-components';

export const ContentCard = styled.div`
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

      button {
        width: 100%;
        max-width: 133px;
        height: 40px;
        border-radius: 8px;
        background-color: var(--light-gray-3);
        color: var(--primary-color);
        font-size: 0.85rem;
        font-weight: 700;
        letter-spacing: 0.75px;
        line-height: 22px;
        margin-top: 20px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;

        &:hover {
          background-color: var(--light-gray-2);
        }
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
