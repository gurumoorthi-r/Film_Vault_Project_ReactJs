import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'
import Pagination from './Pagination'


function Movies({handleAddWatchList,handleRemoveWatchList,watchlist}) {
  const [pageNo,setPageNo] = useState(1)
  const goToPrevPage = () =>{
    if(pageNo!=1){
      setPageNo(pageNo-1);
    }
  }
  const goToNextPage = () =>{
    setPageNo(pageNo+1)
  }

  const [movies,setMovies] = useState([])
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=2191d4b48ff5a81f5252180976a882ad&language=en-US&page=${pageNo}`).then(function(res){
      setMovies(res.data.results)
      // console.log(res.data.results)
    })
  },[pageNo])
  return (
    <div className='p-4'>
        <div className='text-center font-bold text-xl m-4'>
            Trending Movies
        </div>
        <div className='flex flex-wrap justify-around '>
            {movies.map((movie)=>{
              return <MovieCard key={movie.id} posterPath={movie.poster_path}  name={movie.original_title} handleAddWatchList={handleAddWatchList} movie={movie}  handleRemoveWatchList={handleRemoveWatchList} watchlist={watchlist} />
            }

            )}
            
            
            
        </div>
        <div>
          <Pagination pageNo={pageNo} goToPrevPage={goToPrevPage} goToNextPage={goToNextPage} />
        </div>
    </div>
  )
}

export default Movies