import React from 'react';
import PropsTypes from 'prop-types';
import Notiflix from 'notiflix';
import {
  SearchbarStyles,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    if (e.currentTarget.elements.query.value.trim() === '') {
      Notiflix.Notify.failure('Please, enter your query.');
      return;
    }
    onSubmit(e.currentTarget.elements.query.value.trim());
    e.target.reset();
  };

  return (
    <SearchbarStyles>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarStyles>
  );
};

Searchbar.PropsTypes = {
  onSubmit: PropsTypes.func.isRequired,
};
