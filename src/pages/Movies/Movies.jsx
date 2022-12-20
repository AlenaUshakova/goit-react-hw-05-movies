import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchBox } from '../../components/SearchBox/SearchBox';
import { movieByQuery } from '../../components/services/api-movie';
import { FilmList } from 'components/FilmList/FilmList';
import { MovieMain } from './Movies.styled';

 const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
 
  const formSubmit = inputQuery => {
    setSearchParams(inputQuery !== '' ? { query: inputQuery } : {});
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    movieByQuery(query).then(r => setMovies(r.results));
  }, [query]);
  
  if (!movies) {
    return;
  }

  return (
    <MovieMain>
      <SearchBox onSubmit={formSubmit} />
      {query && <FilmList movies={movies} />}
    </MovieMain>
  );
};

export default Movies;