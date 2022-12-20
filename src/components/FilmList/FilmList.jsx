import { MovieList } from './FilmList.styled';
import { Link, useLocation } from 'react-router-dom';

const BASE_URL = 'https://image.tmdb.org/t/p/w500';

export const FilmList = ({ movies }) => {
  const location = useLocation();
  return (
    <MovieList>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <img src={`${BASE_URL}${movie.poster_path}`} alt="" width="200" />
          </Link>
        </li>
      ))}
    </MovieList>
  );
};
