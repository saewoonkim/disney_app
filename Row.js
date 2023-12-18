import axios from '../api/axios';
import React, { useEffect, useState, useCallback } from 'react'
import './Row.css'
import MovieModal from './MovieModal';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styled from 'styled-components';


const Row = ({title, id, fetchUrl}) => {
  const [movies, setMovies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});

  const fetchMovieData = useCallback(async () => {
    const response = await axios.get(fetchUrl);
    //console.log('response', response);
    setMovies(response.data.results);
  }, [fetchUrl]);
  
  useEffect(() => {
    fetchMovieData();
  }, [fetchMovieData])

  const handleClick = (movie) => {
    setModalOpen(true);
    setMovieSelected(movie);
  }
  
 //1.row부분 정리 

 return (
  <Container>
      <h2>{title}</h2>

      <Swiper /* 6번*/
      
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      loop={true} //loop 기능을 사용할 것인지
      navigation={true} // arrow 버튼 사용 유무
      pagination={{ clickable: true }} //페이지 버튼 보이게 할지
      breakpoints={{//11 번 추가 아래부분까지 해주고 row.css 열기
        1378: {
          slidesPerView: 6, //한번에 보이는 슬라이드 개수 
          slidesPerGroup: 6,
        },
        998: {
          slidesPerView: 5, //한번에 보이는 슬라이드 개수 
          slidesPerGroup: 5,
        },
        625: {
          slidesPerView: 4, //한번에 보이는 슬라이드 개수 
          slidesPerGroup: 4,
        },
        0: {
          slidesPerView: 3, //한번에 보이는 슬라이드 개수 
          slidesPerGroup: 3,
        },
      }}
      >
        <Content id={id} /* 7번 */>
        {movies.map((movie) => (
            <SwiperSlide key={movie.id}/* 8번 */>
              <Wrap>
                <img 
                  key={movie.id} 
                  //className='row__poster'//10 이부분 삭제하면 대빵커짐
                  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} 
                  alt={movie.title}
                  onClick={() => handleClick(movie)} />
              </Wrap>  
            </SwiperSlide>
          ))}
          </Content>
       </Swiper>   
       
          { modalOpen && 
            <MovieModal
           {...movieSelected}
           setModalOpen={setModalOpen} 
         />
      }
  </Container> //5번. 
)
  // return (
  //   <div>
  //     <h2>{title}</h2>
  //     {/* <div className='slider'>
  //       <div className='slider__arrow-left'> 
  //       <span className='arrow' onClick={() =>{
  //           document.getElementById(id).scrollLeft -= window.innerWidth -80;
  //         }}>
  //           {'<'}
  //         </span>
  //       </div> */}
  //       <div id={id} className='row__posters'>
  //         {movies.map(movie => (
  //         <img
  //             key={movie.id} 
  //             className='row__poster'
  //             src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
  //             alt={movie.title}
  //             onClick={() => handleClick(movie)}
  //             />
  //             ))}
  //       </div>
  //       {/* <div className='slider__arrow-right'>
  //       <span className='arrow' onClick={() =>{
  //           document.getElementById(id).scrollLeft += window.innerWidth -80;
  //         }}>
  //           {'>'}
  //         </span>
  //       </div> */}
  //     {/* </div> */}
  //     { modalOpen && ( 
  //       <MovieModal 
  //         {...movieSelected}
  //         setModalOpen={setModalOpen}
  //       />
  //     )}
  //   </div>//or은 하나만써도 상관없는데 and는 무조건 두개 뒤에껄 실행
  // )
}

export default Row

//4번
const Container = styled.div` 
  padding: 0 0 26px;
`;

const Content = styled.div``;
//9번 클래스 완성
const Wrap = styled.div`
  width: 95%;
  height: 95%;
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px,
              rgb(0 0 0/73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    width: 100%;
    transition: opacity 500ms ease-in-out;
    z-index:1;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
       rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(0.98);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;