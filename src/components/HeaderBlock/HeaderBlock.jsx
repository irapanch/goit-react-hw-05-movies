import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  StyledContainer,
  StyledHeader,
  StyledLogo,
  StyledLink,
} from './HeaderBlock.Styled';
import { LuClapperboard } from 'react-icons/lu';
import { Loader } from '../Loader/Loader';

const HeaderBlock = () => {
  return (
    <StyledContainer>
      <StyledHeader>
        <StyledLogo to="/">
          <LuClapperboard size="38" />
        </StyledLogo>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </StyledHeader>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </StyledContainer>
  );
};

export default HeaderBlock;
