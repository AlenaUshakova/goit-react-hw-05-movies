import { Forma, Input, SearchBtn } from './SearchBox.styled';

export const SearchBox = ({ onSubmit }) => {

  const handleSubmit = e => {
    e.preventDefault();
    const { query } = e.target.elements;
    onSubmit(query.value);
    e.target.reset();
  };

  return (
    <div>
      <Forma autoComplete="off" onSubmit={handleSubmit}>
        <label>
          <Input
            type="text"
            name="query"
          />
        </label>
        <SearchBtn type="submit">Search</SearchBtn>
      </Forma>
    </div>
  );
};
