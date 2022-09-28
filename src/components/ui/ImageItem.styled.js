import styled from 'styled-components';

const ImageItem = styled.li`
  width: calc((100% - 20px) / 3);
  display: inline-flex;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  overflow: hidden;
  &:nth-child(3n) {
    margin-right: 0;
  }
`;

export default ImageItem;
