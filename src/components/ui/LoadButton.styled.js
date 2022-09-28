import styled from 'styled-components';

const LoadButton = styled.button`
  width: 100%;
  padding: 15px;
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
  background-color: rgba(0, 200, 0, 0.4);
  border-radius: 20px;
  border: none;
  cursor: pointer;
  transition: background-color 300ms linear;
  &:hover {
    background-color: rgba(0, 0, 200, 0.4);
  }
`;

export default LoadButton;
