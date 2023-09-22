import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/themoviedbAPI';
import { StyledReviewWrapper, StyledReviewHeader } from './Reviews.Styled';
import { Loader } from 'components/Loader/Loader';

// запит оглядів для сторінки кінофільму
const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getReviews = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const { results } = await fetchMovieReviews(movieId);
        setReviews(results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <>
      {error ? <div>An error occurred, please try again later...</div> : null}
      {isLoading ? <Loader /> : null}
      {reviews.length ? (
        <div>
          <StyledReviewHeader>Review</StyledReviewHeader>

          {reviews.map(review => {
            return (
              <StyledReviewWrapper key={review.id}>
                <h3>Author: {review.author}</h3>
                <p>{review.content}</p>
              </StyledReviewWrapper>
            );
          })}
        </div>
      ) : (
        <h3>We don't have any reviews for this movie yet.</h3>
      )}
    </>
  );
};

export default Reviews;
