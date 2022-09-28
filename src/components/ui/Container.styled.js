import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto 20px;
  width: ${props => (props.fullWidth ? '100%' : '90%')};
  padding: 10px;
  display: flex;
  justify-content: center;
  background-color: ${props =>
    props.blueBackground ? 'rgba(0, 0, 255, 0.5)' : 'transparent'};
  border-radius: 20px;
`;

export default Container;
