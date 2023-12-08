import React from 'react'
import styled from 'styled-components'

const Category = () => {
  return (
    <Container>
      <Wrap>
        <img src='/images/viewers-disney.png' alt='disney' />
        <video autoPlay loop muted>
          <source src='/videos/disney.mp4' type='video/mp4' />
        </video>
      </Wrap>
    </Container>
  )
}

export default Category

const Container = styled.div`
`;

const Wrap = styled.div`
`;