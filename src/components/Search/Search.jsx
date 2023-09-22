import {
  StyledSearchForm,
  StyledInput,
  StyledSearchButton,
} from './Search.Styled';
import { BsSearch } from 'react-icons/bs';
import { toast } from 'react-hot-toast';
import PropTypes from 'prop-types';

const Search = ({ onSubmit }) => {
  const onSearchQuery = e => {
    e.preventDefault();

    const query = e.target.elements.query.value;

    if (!query) {
      toast.error('Please enter something');
      return;
    }

    onSubmit(query);
    e.target.reset();
  };

  return (
    <StyledSearchForm onSubmit={onSearchQuery}>
      <StyledInput
        id="searchQuery"
        name="query"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie..."
      />
      <StyledSearchButton type="submit">
        <BsSearch size="16" />
      </StyledSearchButton>
    </StyledSearchForm>
  );
};

export default Search;

Search.propType = {
  onSubmit: PropTypes.func.isRequired,
};
