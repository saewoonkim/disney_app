import axios from '../api/axios'
import requests from '../api/requests'
import React, { useEffect, useState } from 'react'
//rcc ,rfce(export 까지), rfc



const Banner = () =>{
  const [movie, setMovie] = useState([]);
  
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
  }
  

  return (
    <header className='banner'
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')`,
        backgroundPosition: 'top center',
        backgroundSize: 'cover'
      }}
    >
      <div className='banner__contents'>
        <h1 className='banner-title'>{movie.title || movie.name || movie.orginal_name}</h1>
        <div className='banner__buttons'>
          { movie?.videos?.results[0]?.key &&
            <button className='banner__button play'>
              play
            </button>
          }
        </div>
        <p className='banner__description'>{movie.overview}</p>
      </div>
      
      <div className='banner--fadeBottom' />
    </header>
    /* 여러개의 클라스를 사용할때는 그냥 한칸띄워주면된다 */
  )
}

export default Banner