import { movieCast } from 'components/services/api-movie';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  CastList,
  CastConteiner,
  CastItem,
  CastImg,
  FilmHero,
} from './Cast.styled';

const BASE_URL = 'https://image.tmdb.org/t/p/w500';
const defoltImg =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJnNH6I8IvZndxspJlJ0BDEyUNHxLvNokyWQ&usqp=CAU';

const Cast = () => {
  const { id } = useParams();
  const [castList, setCastList] = useState();

  useEffect(() => {
    movieCast(id).then(setCastList);
  }, [id]);

  if (!castList) {
    return null;
  }

  return (
    <CastConteiner>
      <CastList>
        {castList.map(el => (
          <CastItem key={el.id}>
            <CastImg
              src={
                el.profile_path ? `${BASE_URL}${el.profile_path}` : defoltImg
              }
              alt=""
              width="80"
            />
            <div>
              <p>{el.name}</p>
              <p>
                Character: <FilmHero>{el.character}</FilmHero>
              </p>
            </div>
          </CastItem>
        ))}
      </CastList>
    </CastConteiner>
  );
};
export default Cast;
