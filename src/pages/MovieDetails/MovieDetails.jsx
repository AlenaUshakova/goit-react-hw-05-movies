import { useState, useEffect } from 'react';
import { Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { movieById } from '../../components/services/api-movie';
import { BackLink } from 'components/BackLink/BackLink';
import {
  WrapperMovie,
  MovieList,
  MovieLink,
  MovieInfo,
  MovieInfoTitle,
} from './MovieDetails.styled';

const BASE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieDetails = () => {
  const { id } = useParams();

  const [movieId, setMovieId] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    movieById(id).then(setMovieId);
  }, [id]);

  if (!movieId) {
    return null;
  }

  const {
    poster_path,
    original_title,
    original_name,
    release_date,
    first_air_date,
    vote_average,
    genres,
    overview,
  } = movieId;

  return (
    <div>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <WrapperMovie>
        <img src={`${BASE_URL}${poster_path}`} alt="" width="300" />
        <div>
          <h1>
            {original_title || original_name} (
            <span>{parseInt(release_date || first_air_date)}</span>)
          </h1>
          <p>User Score: {`${Math.round(vote_average * 10)}%`}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>
            {genres.map((genre, index) => (
              <span key={index} style={{ marginRight: '10px' }}>
                {genre.name} /
              </span>
            ))}
          </p>
        </div>
      </WrapperMovie>
      <MovieInfo>
        <MovieInfoTitle>Additional Information</MovieInfoTitle>
        <MovieList>
          <li>
            <MovieLink to="cast" state={location.state}>
              Cast
            </MovieLink>{' '}
          </li>
          <li>
            <MovieLink to="reviews" state={location.state}>
              Reviews
            </MovieLink>
          </li>
        </MovieList>
      </MovieInfo>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
