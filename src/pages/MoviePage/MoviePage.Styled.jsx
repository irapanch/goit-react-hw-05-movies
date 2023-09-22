import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const StyledSectionStyled = styled.section`
  margin: 24px auto;
`;
export const StyledLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;

  color: ${props => props.theme.colors.accent};
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  background: ${props => props.theme.colors.white};
  &:hover,
  &:focus {
    background: ${props => props.theme.colors.gradientOrange};
    color: ${props => props.theme.colors.white};
    box-shadow: 0 0 15px #2a2a2a;
  }

  background-color: ${props => props.theme.colors.muted};

  &:focus-within {
    border-bottom: 1px solid #2a2a2a;
    box-shadow: 0 0 15px #2a2a2a;
    border-radius: 5px;
  }
`;

export const StyledButtonWrap = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px auto;
  justify-content: center;
`;

export const StyledBackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  margin-left: 28px;
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;
