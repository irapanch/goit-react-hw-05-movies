import { useEffect, useState } from 'react';
import { fetchTrendMovies } from '../../services/themoviedbAPI';
import MovieList from 'components/MovieList/MovieList';
import { StyledMovieListTitle } from './Home.Styled';
import { Loader } from 'components/Loader/Loader';

//завантаження трендових фільмів
const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getTrendMovies = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const { results } = await fetchTrendMovies();
        setTrendingMovies(results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getTrendMovies();
  }, []);

  return (
    <main>
      <StyledMovieListTitle>Trending today</StyledMovieListTitle>
      {error ? (
        <p>
          Sorry, we could not fetch the trending movies. Please try again later.
        </p>
      ) : null}
      {isLoading ? <Loader /> : <MovieList movies={trendingMovies} />}
    </main>
  );
};

export default Home;
