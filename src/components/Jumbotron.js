import React from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components';
import forest from '../assets/forest.jpg';

const Styles = styled.div`
.jumbo {
  background: url(${forest});
  background-size: cover;
  color: #ccc;
  height: 200px;
  position: relative;
  z-index: -2; 
}

.overlay {
  background-color: #000;
  opacity: 0.45;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
}
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid={true} className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1>Welcome</h1>
        <p>Come on in, the internet's fine</p>
      </Container>
    </Jumbo>
  </Styles >
)
