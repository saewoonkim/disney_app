import React from 'react'
import styled from 'styled-components'

const Category = () => {

  const handleWrapClick = (externalLink) => {
    window.open(externalLink, '_blank');
  };
  
  return (
    <Container>
      <Wrap onClick={() => handleWrapClick('http://www.disney.co.kr/home/index.jsp')}>
        <img src='/images/viewers-disney.png' alt='disney' />
        <video autoPlay loop muted>
          <source src='/videos/disney.mp4' type='video/mp4' />
        </video>
      </Wrap>
      <Wrap onClick={() => handleWrapClick('https://www.pixar.com/')}>
        <img src='/images/viewers-pixar.png' alt='disney' />
        <video autoPlay loop muted>
          <source src='/videos/pixar.mp4' type='video/mp4' />
        </video>
      </Wrap>
      <Wrap onClick={() => handleWrapClick('https://www.marvel.com/')}>
        <img src='/images/viewers-marvel.png' alt='disney' />
        <video autoPlay loop muted>
          <source src='/videos/marvel.mp4' type='video/mp4' />
        </video>
      </Wrap>
      <Wrap onClick={() => handleWrapClick('https://www.starwars.com/')}>
        <img src='/images/viewers-starwars.png' alt='disney' />
        <video autoPlay loop muted>
          <source src='/videos/star-wars.mp4' type='video/mp4' />
        </video>
      </Wrap>
      <Wrap onClick={() => handleWrapClick('https://www.nationalgeographic.com/')}>
        <img src='/images/viewers-national.png' alt='disney' />
        <video autoPlay loop muted>
          <source src='/videos/national-geographic.mp4' type='video/mp4' />
        </video>
      </Wrap>
      {/* <div>
          <div className='box'></div>
          <div className='box'></div>
          <div className='box'></div>
      </div> */}
      {/* <button className='button'>안녕하세요</button> 트렌지션 */}
    </Container>
  )
}

export default Category

const Container = styled.div`
  margin-top: 30px;
  padding : 30px 0 26; //상단이 30 밑이 26
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(5, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Wrap = styled.div`
  padding-top: 55%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px,
              rgb(0 0 0 / .73) 0 16px 10px -10px,
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.046, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, .1);
  
  img {
    inset: 0;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
  }
  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    opacity: 0;
    z-index: 0;
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.8) 0 40px 58px -16px,
                rgba(0, 0, 0, .73) 0 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, .8);

    video {
      opacity: 1;
    }
  }
`;