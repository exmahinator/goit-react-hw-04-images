import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto 10px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: ${props => (props.flexColumn ? '0' : '15px')};
  padding-bottom: ${props => (props.flexColumn ? '0' : '15px')};
  flex-direction: ${props => props.flexColumn && 'column'};
  background-color: ${props =>
    props.blueBackground ? 'rgba(0, 0, 255, 0.5)' : 'transparent'};
  border-radius: 20px;
`;

export default Container;
