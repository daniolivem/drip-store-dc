import { NavLink } from 'react-router-dom';
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
    align-items: center;

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

    & input {
      @media (max-width: 460px) {
        display: none;
      }
    }

    & a {
      @media (max-width: 460px) {
        display: none;
      }
    }

    & .search-icon img {
      @media (max-width: 460px) {
        width: 20px;
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

  @media (max-width: 460px) {
    // Adicione esta regra de mídia para telas menore (mobile)
    width: 100%;
    max-width: 455px;
    height: 66px;
    padding: 20px;
  }

  .dropshadow {
    @media (max-width: 460px) {
      padding: 0;
      width: 100%;
      max-width: 425px;
    }
  }

  .header-main {
    @media (max-width: 460px) {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }

    .header-buttons {
      @media (max-width: 460px) {
        width: 10%;
        height: 100%;
        display: flex;
        align-items: baseline;
        gap: 0px;
        position: absolute;
        right: 0;
      }

      & button {
        @media (max-width: 460px) {
          display: none;
        }
      }
    }

    .menu-button {
      display: none;
      background-color: transparent;
      position: absolute;
      left: 0;
      cursor: pointer;

      @media (max-width: 460px) {
        display: block;
      }
    }
  }

  .header-main .search-input {
    @media (max-width: 460px) {
      width: 6%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      right: 48px;
      gap: 2px;
    }

    .search-icon {
      @media (max-width: 460px) {
        margin-left: 0px;
        display: flex;
      }
    }
  }

  .dropshadow .header-nav {
    @media (max-width: 460px) {
      width: 100%;
      max-height: 400px;
      height: 30px;
      position: absolute;
      top: 70px;
      left: 0;
      display: none;
    }

    & ul {
      @media (max-width: 460px) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 0px;
        position: absolute;
        left: 0;
        padding: 0 20px;
      }
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: var(--dark-gray-2);

  &.active {
    color: var(--primary-color);
    border-bottom: 2px solid var(--primary-color);
  }
`;
