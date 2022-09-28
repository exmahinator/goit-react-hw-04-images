import styled from 'styled-components';

const SearchButton = styled.button`
  padding: 10px;
  margin-right: 10px;
  font-size: 20px;
  font-weight: bold;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 20px;
  cursor: pointer;
  border: 5px solid rgba(12, 56, 185, 0.7);
  transition: background-color 300ms linear;
  &:hover {
    background-color: rgba(0, 255, 0, 0.7);
  }
`;

export default SearchButton;
