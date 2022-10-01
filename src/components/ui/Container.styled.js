import styled from 'styled-components';

const Container = styled.div`
  width: ${props => (props.fixed ? '98%' : 'inherit')};
  height: ${props => (props.fixed ? null : '100%')};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5px);
  padding-top: ${props => (props.fixed ? '10px' : '80px')};
  top: ${props => (props.fixed ? 0 : 'auto')};
  z-index: ${props => (props.fixed ? 5 : 1)};
  position: ${props => (props.fixed ? 'fixed' : 'inherit')};
  flex-direction: ${props => props.flexColumn && 'column'};
  background-color: ${props =>
    props.blueBackground ? 'rgba(0, 0, 255, 0.5)' : 'transparent'};
  border-radius: 20px;
`;

export default Container;
