import { movieReviews } from 'components/services/api-movie';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsList, ReviewsAuthor } from './Reviews.styled';

const Reviews = () => {
  const { id } = useParams();

  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    movieReviews(id).then(setReviews);
  }, [id]);

  if (reviews === null) {
    return;
  }

  return (
    <div>
      {reviews.length !== 0 ? (
        <ReviewsList>
          {reviews.map(el => (
            <li key={el.id}>
              <p>
                <ReviewsAuthor>Author:</ReviewsAuthor> {el.author}
              </p>
              <p>{el.content}</p>
            </li>
          ))}
        </ReviewsList>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </div>
  );
};

export default Reviews;
