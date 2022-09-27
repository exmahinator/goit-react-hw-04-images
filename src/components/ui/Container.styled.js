import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto 20px;
  width: ${props => (props.fullWidth ? '100%' : '90%')};
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  justify-content: center;
  background-color: ${props =>
    props.blueBackground ? 'rgba(0, 0, 255, 0.5)' : 'transparent'};
  border-radius: 10px;
`;

export default Container;
