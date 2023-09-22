import styled from 'styled-components';

export const StyledCastHeader = styled.h3`
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: ${props => props.theme.fontWeights.medium};
  text-align: center;
  margin-bottom: 24px;
`;

export const StyledCastWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
  text-align: center;
`;

export const StyledActorCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 5px;
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.boxShadowDiv};
  background: ${props => props.theme.colors.cardBackground};

  transition: transform 250ms linear;
  cursor: pointer;
  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const StyledActorInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px;
  max-width: 200px;
`;
export const StyledActorImg = styled.img`
  min-height: 300px;
  box-shadow: 0 0px 10px #523603;
`;
