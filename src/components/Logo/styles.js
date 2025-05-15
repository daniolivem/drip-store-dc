import styled from 'styled-components';

export const ContainerLogo = styled.div`
  display: flex;
  gap: 8px;
  height: 44px;
  width: 256px;
  align-items: center;

  .content-icon,
  .content-image {
    height: 40px;
    width: 100%;
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

  @media (max-width: 460px) {
    // Adicione esta regra de mídia para telas menore (mobile)
    width: 100%;
    max-width: 138px;
    height: 24px;
    gap: 4px;
  }

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

  @media (max-width: 800px) {
    // Adiciona esta regra para telas menores (tablet)
    width: 100%;
    max-width: 198px;
    height: 34px;
    gap: 6px;
  }
`;
