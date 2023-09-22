import React from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { StyledLoader } from './Loader.Styled';

export const Loader = () => {
  return (
    <StyledLoader>
      <BallTriangle
        height={60}
        width={60}
        radius={5}
        color="rgb(233, 219, 24)"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </StyledLoader>
  );
};
