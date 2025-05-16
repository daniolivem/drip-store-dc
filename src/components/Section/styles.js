import styled from 'styled-components';

export const StyledSection = styled.section`
  width: 100%;
  max-width: 1440px;
  height: 100%;
  padding: 38px 100px 100px;
  margin-left: 234px;

  @media (max-width: 460px) {
    padding: 42px 20px 80px;
    margin-left: 8px;
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${props =>
    props.$align === 'center' ? 'center' : 'space-between'};
  flex-direction: ${props => (props.$align === 'center' ? 'column' : 'row')};
  width: 100%;
  max-width: 1440px;
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  letter-spacing: 0.75px;
  line-height: 38px;
  font-weight: 700;
  color: var(--dark-gray-2);
  margin-bottom: 20px;

  @media (max-width: 460px) {
    margin-bottom: 10px;
    font-size: 1rem;
  }
`;

export const SectionLink = styled.a``;

export const SectionContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
`;
