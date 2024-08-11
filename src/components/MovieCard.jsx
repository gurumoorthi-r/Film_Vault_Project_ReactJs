import React from "react";

function MovieCard({movie,watchlist, posterPath, name ,handleAddWatchList,handleRemoveWatchList}) {
  function isContain(movie){
    for(let i=0;i<watchlist.length;i++){
      if(watchlist[i].id ==movie.id)
          return true;
    }
    return false;
  }
  return (
    <div
      className=" relative flex flex-col items-end m-2 hover:cursor-pointer hover:scale-110 duration-700 h-[40vh] w-[150px] bg-center bg-cover rounded-lg"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${posterPath})`,
      }}
    >
      {isContain(movie)?<div onClick={()=>(handleRemoveWatchList(movie))} className="m-2 flex justify-center items-center h-4 w-4 p-3 text-lg text-white rounded-lg bg-gray-700/60 ">
      <i class="bi bi-x"></i>
      </div>:
      
      <div onClick={()=>(handleAddWatchList(movie))} className="m-2 flex justify-center items-center h-4 w-4 p-3 text-sm rounded-lg bg-gray-700/60 ">
        &#128525;
      </div>}
      <div className="absolute inset-x-0 bottom-0 text-white text-center bg-gray-500/50 text-sm p-2 rounded-b-lg">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
