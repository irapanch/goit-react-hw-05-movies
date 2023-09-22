import { useState, useEffect } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieDetailsById } from 'services/themoviedbAPI';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import {
  StyledLink,
  StyledButtonWrap,
  StyledBackLink,
  StyledSectionStyled,
} from './MoviePage.Styled';
import { HiOutlineChevronDoubleLeft } from 'react-icons/hi';
import { Loader } from 'components/Loader/Loader';
import { useRef } from 'react';
import { Suspense } from 'react';

// запит повної інформації про фільм
const MoviePage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [currentMovie, setCurrentMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const backLinkPath = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const getMovieById = async movieId => {
      try {
        setError(false);
        setIsLoading(true);

        const fetchedMovieById = await fetchMovieDetailsById(movieId);

        setCurrentMovie(fetchedMovieById);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getMovieById(movieId);
  }, [movieId]);

  return (
    <main>
      <StyledSectionStyled>
        <StyledBackLink to={backLinkPath.current}>
          <HiOutlineChevronDoubleLeft size="24" />
          Go back
        </StyledBackLink>

        {error ? <div>An error occurred, please try again later...</div> : null}

        {isLoading ? <Loader /> : <MovieDetails movie={currentMovie} />}

        <StyledButtonWrap>
          <StyledLink to="cast">Casts</StyledLink>
          <StyledLink to="reviews">Reviews</StyledLink>
        </StyledButtonWrap>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </StyledSectionStyled>
    </main>
  );
};

export default MoviePage;
