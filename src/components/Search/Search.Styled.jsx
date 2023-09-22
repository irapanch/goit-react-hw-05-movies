import styled from 'styled-components';

export const StyledSearchForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 20px;
  text-align: center;
`;

export const StyledInput = styled.input`
  padding: 8px 16px 8px 8px;
  border-radius: 4px;
  font: inherit;
  box-shadow: ${props => props.theme.shadows.boxShadowSearch};
  background-color: ${props => props.theme.colors.muted};

  &:focus-within {
    border-bottom: 1px solid #2a2a2a;
    box-shadow: 0 0 15px #2a2a2a;
    border-radius: 5px;
  }
`;

export const StyledSearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  border: 0;
  background-color: transparent;
  svg {
    fill: ${props => props.theme.colors.white};
    stroke: ${props => props.theme.colors.accent};
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      transform: scale(1.1);
      color: ${props => props.theme.colors.accent};
    }
  }
`;
