import React, { useEffect, useState } from 'react'
import WatchListRow from './WatchListRow'
import genre from '../utility/genre'

function WatchList({watchlist,setWatchlist,handleRemoveWatchList}) {


  const [search,setSearch] = useState('')
  const handleSearch=(e)=>{
    setSearch(e.target.value)
  }

  //For rating increasing order
  let increaseRatingSort = ()=>{
    let increasedOrder = watchlist.sort((a,b)=>{
      return a.vote_average - b.vote_average
    })
    setWatchlist([...increasedOrder])
    console.log(watchlist)
  }

  //For rating decreasing order
  let decreaseRatingSort = ()=>{
    let decreasedOrder = watchlist.sort((a,b)=>{
      return b.vote_average - a.vote_average
    })
    setWatchlist([...decreasedOrder])
  }

  //Genre List
  const [genreList,setGenreList] = useState(["All genres"])
  const [currGenre,setCurrGenre] = useState('All genres')
  const handleCurrGenre=(curr)=>{
    setCurrGenre(curr)
  }

  useEffect(()=>{
    let t = watchlist.map((movie)=>{
      return genre[movie.genre_ids[0]]
    })
    let t1 = new Set(t)
    setGenreList(["All genres",...t1])
    // console.log(t)
  },[watchlist])

  //Genre WatchList

  // const handleWatchListWithGenre=(genreY)=>{
  //   let 
  //   let genreWatchList = watchlist.filter((movie)=>{
  //     if(genreY == 'All genres') return true
  //     return genre[movie.genre_ids[0]] == genreY;
  //   })
  //   setWatchlist(genreWatchList)
  //   console.log(watchlist)
  // }
  
  return (
    <>
    <div className='flex justify-center flex-row  gap-2 m-4 flex-wrap '>
      {
    
    genreList.map((genreX)=>{
        return(
          <div onClick={()=>{handleCurrGenre(genreX)
            handleWatchListWithGenre(genreX)
          }} className={currGenre == genreX ? 'bg-blue-400/80 hover:cursor-pointer  text-white font-semibold h-[2rem] w-[8rem] rounded-lg flex justify-center items-center':'bg-gray-400/60 hover:cursor-pointer  text-white font-semibold h-[2rem] w-[8rem] rounded-lg flex justify-center items-center'}>{genreX}</div>
        )
      })}
    </div>
    <div className='flex justify-center my-4'>
      <input type="text" onChange={handleSearch}  value={search} className='bg-gray-200 h-[3rem] w-[18rem] outline-none p-2 rounded-lg' placeholder='Search for movies' />
    </div>

    <div className='rounded-lg overflow-hidden border border-gray-200 m-8'>
      <table className=' w-full text-gray-500 text-center'>
        <thead className='border-b-2'>
          <tr>
            
            <th>Name</th>
            <th>
              <div className='flex flex-row gap-1 justify-center'>
                <div onClick={increaseRatingSort} className='hover:bg-gray-400 hover:cursor-pointer text-sm text-center p-1'><i class="bi bi-arrow-up"></i></div>
                <div>Rating</div>
                <div onClick={decreaseRatingSort} className='hover:bg-gray-400 hover:cursor-pointer text-sm text-center p-1' ><i class="bi bi-arrow-down"></i></div>
              </div>
            </th>
            <th>Popularity</th>
            <th>Genre</th>
          </tr>
          
        </thead>
        <tbody>
          {watchlist.filter((movie)=>{
            return movie.title.toLowerCase().includes(search.toLowerCase()) && (genre[movie.genre_ids[0]] == currGenre || currGenre == 'All genres')
          }).map((movie)=>{
            return(
              <WatchListRow movie={movie} handleRemoveWatchList={handleRemoveWatchList} gid={genre[movie.genre_ids[0]]} />
            )
          })}

          
        </tbody>
      </table>
    </div>
    </>
  )
}

export default WatchList