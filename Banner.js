import axios from '../api/axios'
import requests from '../api/requests'
import React, { useEffect, useState } from 'react'
import './Banner.css'
import styled from 'styled-components'
//rcc ,rfce(export 까지), rfc



const Banner = () =>{
  const [movie, setMovie] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  
  useEffect(() => { 
    fetchData(); 
  }, [])
  
  const fetchData = async() => {
    //현재 상영중인 영화정보를 가져오기(여러 영화)
    const response = await axios.get(requests.fetchNowPlaying);
    //여러 영화 중 영화 하나의 id를 가져오기 
    const movieId = response.data.results[
        Math.floor(Math.random() * response.data.results.length)  
      ].id;
  //특정 영화의 더 상세 정보를 가져오기(비디오 정보 포함)
  const {data: movieDetail} = await axios.get(`movie/${movieId}`,{
    params: {append_to_response: 'videos'},
  });
  setMovie(movieDetail);
  console.log(movieDetail);
  }
  
  // 설명글 ... 처리
  const truncate = (str, n) => {
    return str?.length > n? str.substring(0, n) + '...' : str;
  }
  
  // 비디오화면이 있을때 비디오 모달이 뜨고 없으면 버튼이 나오지 않게 처리
  if(isClicked){
    return(
      <>
      <Container>
        <HomeContainer>
            <Iframe
             src = {`https://www.youtube.com/embed/PBXpoQgRBj0?si=Pl6gfgmEdYLJMv4r/ ${movie.videos.results[0].key}? 
                    controls=0&autoplay=1&loop=1&playlist=${movie.videos.results[0].key}`}
             title = "찐친"
             frameborder = "0"
             allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
             allowfullscreen>
            </Iframe>
        </HomeContainer>
      </Container>
      <button onClick={() => setIsClicked(false)}  /*isclicked를 false값으로 돌리기*/>X</button> 
          </>//더이상 넣을 디브가 없을때 이렇게 사용할수있다
    )
  } else {
      return (
        <header className='banner'
          style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')`,
            backgroundPosition: 'top center',
            backgroundSize: 'cover'
          }}
        >
          <div className='banner__contents'>
            <h1 className='banner__title'>{movie.title || movie.name || movie.orginal_name}</h1>
            <div className='banner__buttons'>
              { movie?.videos?.results[0]?.key &&
                <button className='banner__button play' onClick={() => setIsClicked(true)}>
                  play
                </button>
              }
            </div>
            <p className='banner__description'>{truncate(movie.overview, 100)}</p>
          </div>

          <div className='banner--fadeBottom' />
        </header>
    /* 여러개의 클라스를 사용할때는 그냥 한칸띄워주면된다 */
    )
  }
}

export default Banner

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 80vh;
`;

const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 1.65;
  border: none;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    
  }
`;

