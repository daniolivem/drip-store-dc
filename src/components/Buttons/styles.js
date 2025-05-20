import styled from 'styled-components';

export const ButtonPrimary = styled.button`
  cursor: pointer;
  width: ${props => (props.$desktop ? '220px' : '114px')};
  height: ${props => (props.$desktop ? '48px' : '40px')};
  border-radius: 8px;
  background-color: var(--primary-color);
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 0.75px;
  line-height: 22px;
  transition: all 0.3s ease-in-out;
  color: var(--light-gray-3);

  &:hover {
    background-color: var(--tertiary-color);
  }

  @media (max-width: 460px) {
    display: ${props => (props.$mobile ? 'block' : 'none')};
    width: 100%;
    margin-top: 10px;
  }
`;
export const ButtonSecundary = styled.button`
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
    background-color: var(--secondary-color);
    color: var(--light-gray-4);
  }
`;
export const ButtonIcon = styled.button``;
export const ButtonShop = styled.button``;
