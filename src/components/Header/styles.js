import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 192px;
  background-color: var(--white);
  filter: drop-shadow(0 10px 30px 0 rgba(0, 0, 0, 0.5));
  display: flex;
  justify-content: center;

  .dropshadow {
    padding: 39px 100px 29px;
    width: 100%;
    max-width: 1440px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }

  .header-main {
    display: flex;
    width: 100%;
    justify-content: space-around;

    .search-input {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      gap: 48px;

      & input {
        width: 100%;
        max-width: 559px;
        height: 60px;
        border-radius: 8px;
        padding: 24px 16px;
        background-color: var(--light-gray-3);
      }

      & input::placeholder {
        font-weight: 400;
        font-size: 1rem;
        line-height: 28px;
        letter-spacing: 0.75px;
        color: var(--light-gray-2);
        transition: border 0.3s ease-in-out;
      }

      & input:focus {
        border: 1px solid var(--dark-gray-3);
      }

      .search-icon {
        position: absolute;
        margin-left: 350px;

        & img {
          cursor: pointer;
        }

        & img:hover {
          filter: brightness(0.8);
        }
      }
      & a {
        font-weight: 400;
        line-height: 28px;
        letter-spacing: 0.75px;
        color: var(--light-gray);
        text-decoration: underline 2px solid;
        text-decoration-color: var(--light-gray);
        text-underline-offset: 3px;
      }
    }

    .header-buttons {
      display: flex;
      align-items: center;
      gap: 70px;

      & button {
        cursor: pointer;
        width: 114px;
        height: 40px;
        border-radius: 8px;
        background-color: var(--primary-color);
        font-weight: 700;
        font-size: 0.85rem;
        letter-spacing: 0.75px;
        line-height: 22px;
        color: var(--light-gray-3);
        transition: all 0.3s ease-in-out;
      }

      & button:hover {
        background-color: var(--tertiary-color);
      }
    }
  }

  .header-nav {
    width: 100%;
    max-width: 426px;
    height: 30px;
    position: absolute;
    top: 134px;
    left: 340px;

    & ul {
      display: flex;
      gap: 32px;
      line-height: 28px;
      letter-spacing: 0.75px;
      font-weight: 400;
    }
  }
`;

export const Li = styled.li`
  cursor: pointer;
  transition-duration: 300ms;
  color: ${props => props.$action && 'var(--primary-color)'};
  text-decoration: ${props => props.$action && 'underline 2px solid'};
  text-decoration-color: ${props => props.$action && 'var(--primary-color)'};
  text-underline-offset: 3px;
  font-weight: ${props => props.$action && '700'};

  &:hover {
    color: var(--primary-color);
    text-decoration: underline 2px solid;
    text-decoration-color: var(--primary-color);
    text-underline-offset: 3px;
  }
`;
