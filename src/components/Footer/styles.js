<<<<<<< HEAD
// import styled from 'styled-components';

// // Container principal do rodapé
// export const FooterContainer = styled.footer`
//     background-color: var(--dark-gray);  ${'' /* fundo escuro */}
//     display: flex;
//     flex-direction: column;
//     ${'' /* empilha os filhos na vertical */}
//     padding: 32px 0;
//     ${'' /*espaçamento em cima e embaixo */}
// `;

// // Área central do conteúdo do rodapé
// export const FooterContent = styled.div`
//     height: 454px; // altura fixa
//     flex-shrink: 0; // não diminui se faltar espaço
//     max-width: 1440px; // largura máxima
//     margin: 0 auto; // centraliza na horizontal
//     display: flex;
//     flex-direction: row; // filhos lado a lado
//     align-items: center; // centraliza verticalmente
//     gap: 16px; // espaço entre os itens
//     background-color: var(--dark-gray); // fundo igual ao container
// `;

// // Logo do rodapé
// export const FooterLogo = styled.img`
//     width: 120px; // largura fixa
//     margin-bottom: 8px; // espaço embaixo
// `;

// // Título do rodapé
// export const FooterTitle = styled.h3`
//     color: var(--white, #FFF); // cor branca
//     font-family: Inter; // fonte
//     font-size: 36.395px; // tamanho grande
//     font-style: normal;
//     font-weight: 600; // negrito
//     line-height: normal;
//     letter-spacing: -0.364px; // letras mais juntinhas
// `;

// // Navegação do rodapé
// export const FooterNav = styled.nav`
//     display: flex;
//     gap: 16px; // espaço entre os links
// `;

// // Link do rodapé
// export const FooterLink = styled.a`
//     color: var(--white, #FFF); // cor branca
//     text-decoration: none; // sem sublinhado
//     &:hover {
//         text-decoration: underline; // sublinha ao passar o mouse
//     }
// `;

// // Texto de copyright ou informações extras
// export const FooterCopy = styled.p`
//     font-size: 0.9rem; // tamanho menor
//     margin-top: 16px; // espaço em cima
//     color: #aaa; // cinza clarinho
// `;
=======
import styled from 'styled-components';

export const ContainerFooter = styled.footer`
  width: 100%;
  background-color: var(--dark-gray);
  padding: 72px 100px 22px;
  justify-content: center;

  .text-bottom {
    text-align: center;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContentLogo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 307px;

  color: var(--white);
`;

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 135px;

  color: var(--white);
`;
export const ContentCategories = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 96px;

  color: var(--white);
`;

export const ContentContact = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 233px;
  height: 168px;
  color: var(--white);
`;
>>>>>>> 0e28891c5bff7776beb94394cd87089fd74eff81
