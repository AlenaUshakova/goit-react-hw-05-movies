import { useEffect, useState } from 'react';
import { HomeTitle, HomeMain } from './Home.styled';
import { FilmList } from 'components/FilmList/FilmList';
import { popularMovies } from '../../components/services/api-movie';
import { Button } from '../../components/Button/Button';

const Home = () => {
  const [movies, setMovies] = useState([]);

  const [page, setPage] = useState(1);

  const [total_results, setTotalResults] = useState(null);

  useEffect(() => {
    popularMovies(page).then(r => {
      setMovies(r.results);
      setTotalResults(r.total_results);
      
    });
  }, [page]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <HomeMain>
      <HomeTitle>Trending today </HomeTitle>
      <FilmList movies={movies} />
      {total_results / 12 >= page && <Button onClick={loadMore} />}
    </HomeMain>
  );
};

export default Home;
