import React, { Component } from 'react';
import Link from 'next/link';
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: red;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;




class Button extends Component {
  constructor (props) {
    super(props)
    this.props = props
  }

  render() {
    return (
      <Wrapper>
    <Title>
      Hello World!
    </Title>
  </Wrapper>
    )
  }
}

export default Button;