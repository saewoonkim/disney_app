import axios from '../api/axios';
import React, { useEffect, useState, useCallback } from 'react'
import './Row.css'
import MovieModal from './MovieModal';

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

  return (
    <div>
      <h2>{title}</h2>
      <div className='slider'>
        <div className='slider__arrow-left'>
        <span className='arrow' onClick={() =>{
            document.getElementById(id).scrollLeft -= window.innerWidth -80;
          }}>
            {'<'}
          </span>
        </div>
        <div id={id} className='row__posters'>
          {movies.map(movie => (
          <img
              key={movie.id} 
              className='row__poster'
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt={movie.title}
              onClick={() => handleClick(movie)}
              />
              ))}
        </div>
        <div className='slider__arrow-right'>
        <span className='arrow' onClick={() =>{
            document.getElementById(id).scrollLeft += window.innerWidth -80;
          }}>
            {'>'}
          </span>
        </div>
      </div>
      { modalOpen && ( 
        <MovieModal 
          {...movieSelected}
          setModalOpen={setModalOpen}
        />
      )}
    </div>//or은 하나만써도 상관없는데 and는 무조건 두개 뒤에껄 실행
  )
}

export default Row