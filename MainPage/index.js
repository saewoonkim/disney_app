import React from 'react'
import Nav from '../../components/Nav';
import Banner from '../../components/Banner';
import Category from '../../components/Category';
import styled from 'styled-components';
import Row from '../../components/Row';
import request from '../../api/requests';

const MainPage = () => {
  return (
    <Container>
    <Nav />
    <Banner />
    <Category/>
    <Row title='Trending Now' id='TN' fetchUrl={request.fetchNowPlaying}/>
    <Row title='Top Rated' id='TR' fetchUrl={request.fetchTopRated}/>
    <Row title='Action Movies' id='AM' fetchUrl={request.fetchActionMovie}/>
    <Row title='Comedy Movies' id='CM' fetchUrl={request.fetchComedyMovie}/>
  </Container>
  )
}

export default MainPage
const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  //250만큼 잘라내고 그떄부터 내용을 뿌려준다
  overflow: hidden; 
  //기본값 내용
  display: block;
  //기본값 사진
  top: 75px;
  padding: 0 calc(3.5vh - 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
                               //수평(x)으로 센터 // 수직(y)으로 센터 //no repeat 넣어줘야됨
    content: "";
    position: absolute;
    inset: 0;
    //전체의 공간에 저사진을 다뿌리겟다는말임
    opacity: 1;
    z-index: -1;
  }
`;