import PropTypes from 'prop-types';
import {
  StyledDetailsWrap,
  StyledDetailsSubwrap,
  StyledDetailsImg,
} from './MovieDetails.Styled';
import { Loader } from 'components/Loader/Loader';

const MovieDetails = ({ movie }) => {
  const {
    original_title,
    release_date,
    poster_path,
    vote_average,
    overview,
    genres,
  } = movie;

  const releaseDate = new Date(release_date);

  const releaseYear = isNaN(releaseDate)
    ? 'Unknown'
    : releaseDate.getFullYear();

  const moviePoster = poster_path
    ? `https://image.tmdb.org/t/p/w400/${poster_path}`
    : 'https://cdn.pixabay.com/photo/2023/09/03/11/30/fire-8230528_1280.jpg';

  const userScore = vote_average
    ? `${(vote_average * 10).toFixed(0)}%`
    : 'Not rated yet';

  if (!original_title) {
    return <Loader />;
  }

  return (
    <StyledDetailsWrap>
      <StyledDetailsImg
        src={moviePoster}
        alt={`${original_title} poster`}
        width="240"
      />
      <StyledDetailsSubwrap>
        {' '}
        <h3>
          {original_title ?? 'Unknown'} ({releaseYear})
        </h3>
        <p>Score: {userScore}</p>
        <h4>Overview</h4>
        <p>{overview}</p>
        <h4>Genres</h4>
        {genres && genres.length > 0 && (
          <p>{genres.map(genre => genre.name).join(', ')}</p>
        )}
      </StyledDetailsSubwrap>
    </StyledDetailsWrap>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    original_title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string.isRequired })
    ),
  }).isRequired,
};

export default MovieDetails;
