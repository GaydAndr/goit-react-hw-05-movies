import { useState } from 'react';
import PropTypes from 'prop-types';

import { Button, Form, Input, Label } from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit(search);
  };

  const handleInput = event => {
    setSearch(event.target.value);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label>
          <Button type="submit">Search</Button>
          <Input value={search} onChange={handleInput} type="text" />
        </Label>
      </Form>
    </>
  );
};

SearchBar.propTypes = {
  SearchBar: PropTypes.func,
};
