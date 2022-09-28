import styled from 'styled-components';

const SearchInput = styled.input`
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  border: none;
  &:focus {
    outline: 5px solid rgba(12, 56, 185, 0.5);
  }
`;

export default SearchInput;
