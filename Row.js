import axios from '../api/axios';
import React, { useEffect, useState, useCallback } from 'react'

const Row = ({title, id, fetchUrl}) => {
  const [movies, setMovies] = useState([]);
  
  const fetchMovieData = useCallback(async () => {
    const response = await axios.get(fetchUrl);
    console.log('response', response);
    setMovies(response.data.results);
  }, [fetchUrl]);
  
  useEffect(() => {
    fetchMovieData();
   }, [fetchMovieData])

  return (
    <div>
      <h2>{title}</h2>
      <div className='slider'>
        <div className='slider__arrow-left'>
          <span className='arrow'>{'<'}</span>
        </div>
        <div className='slider__arrow-right'>
          <span className='arrow'>{'>'}</span>
        </div>
      </div>
    </div>
  )
}

export default Row