import React from 'react'

function WatchListRow({movie,handleRemoveWatchList,gid}) {
    
  return (

        <tr className='border-b-2'>
            <td className='flex items-center px-6 py-4 '>
              <img className='h-[5rem] w-[6rem] ' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
              <div className='mx-4'>{movie.title}</div>
            </td>
            <td>{movie.vote_average}</td>
            <td>{movie.popularity}</td>
            <td>{gid}</td>
            <td onClick={()=>(handleRemoveWatchList(movie))}><button className='bg-gray-400 text-white  text-sm rounded-sm p-1'>Delete</button></td>
          </tr>
    
  )
}

export default WatchListRow