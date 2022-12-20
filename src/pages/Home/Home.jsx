import { useEffect, useState } from 'react';
import { HomeTitle, HomeMain } from './Home.styled';
import { FilmList } from 'components/FilmList/FilmList';
import { popularMovies } from '../../components/services/api-movie';

 const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    popularMovies().then(r => setMovies(r.results));
  }, []);

  return (
    <HomeMain>
      <HomeTitle>Trending today </HomeTitle>
      <FilmList movies={movies} />
    </HomeMain>
  );
};

export default Home;