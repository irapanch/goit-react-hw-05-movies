import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import {
  StyledListOfMovies,
  StyledListItem,
  StyledLinkMovie,
  StyledLinkMovieInfo,
} from './MovieList.Styled';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <StyledListOfMovies>
      {movies.map(movie => {
        const moviePoster = movie.poster_path
          ? `https://image.tmdb.org/t/p/w400/${movie.poster_path}`
          : 'https://cdn.pixabay.com/photo/2023/09/03/11/30/fire-8230528_1280.jpg';

        return (
          <StyledListItem key={movie.id}>
            <StyledLinkMovie
              to={`/movies/${movie.id}`}
              state={{ from: location }}
            >
              <img
                src={moviePoster}
                alt={movie.original_title}
                width="240"
                loading="lazy"
              />
              <StyledLinkMovieInfo>
                {movie.title ?? movie.name}
              </StyledLinkMovieInfo>
            </StyledLinkMovie>
          </StyledListItem>
        );
      })}
    </StyledListOfMovies>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
};

export default MovieList;
