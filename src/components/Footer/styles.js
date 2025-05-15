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
