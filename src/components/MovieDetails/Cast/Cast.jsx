import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/themoviedbAPI';
import {
  StyledCastWrapper,
  StyledActorCard,
  StyledActorInfo,
  StyledCastHeader,
  StyledActorImg,
} from './Cast.Styled';
import { Loader } from 'components/Loader/Loader';

// запит інформації про акторський склад
const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getMovieCast = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const { cast } = await fetchMovieCast(movieId);
        setCast(cast);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieCast();
  }, [movieId]);

  return (
    <>
      {error ? <div>An error occurred, please try again later...</div> : null}
      {isLoading ? <Loader /> : null}
      {cast.length ? (
        <div>
          <StyledCastHeader>Casts</StyledCastHeader>

          <StyledCastWrapper>
            {cast.map(actor => {
              return (
                <StyledActorCard key={actor.credit_id}>
                  {actor.profile_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                      alt={`${actor.name}`}
                      loading="lazy"
                    />
                  ) : (
                    <StyledActorImg
                      src={`https://cdn.pixabay.com/photo/2012/04/24/13/27/man-40057_1280.png`}
                      alt={`${actor.name} profile`}
                      width={'200px'}
                      loading="lazy"
                    />
                  )}
                  <StyledActorInfo>
                    <h4> {actor.name}</h4>
                    <p>Character: {actor.character}</p>
                  </StyledActorInfo>
                </StyledActorCard>
              );
            })}{' '}
          </StyledCastWrapper>
        </div>
      ) : (
        <h3>We don't have any information about casts yet.</h3>
      )}
    </>
  );
};

export default Cast;
