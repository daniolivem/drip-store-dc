import styled from 'styled-components';

export const ContainerLogo = styled.div`
  display: flex;
  gap: 8px;
  height: 44px;
  width: 256px;
  align-items: center;

  @media (max-width: 460px) {
    width: 170px;
    height: 29.5px;
  }

  .content-icon,
  .content-image {
    height: 40px;
    width: 100%;
    color: var(--white);
  }

  .icon-logo {
    width: 33px;

    @media (max-width: 460px) {
      width: 18px;
      height: 18px;
    }

    @media (max-width: 800px) {
      width: 24px;
    }
  }

  .image-logo {
    width: 212px;

    @media (max-width: 460px) {
      width: 116px;
      height: 24px;
    }
  }

  /* Responsividade */

  .content-icon {
    @media (max-width: 460px) {
      // Adicione esta regra de mídia para telas menore (mobile)
      height: 18px;
    }
  }

  .content-image {
    @media (max-width: 460px) {
      // Adicione esta regra de mídia para telas menore (mobile)
      height: 24px;
    }
  }
`;
