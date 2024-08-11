import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";
import Banner from "./components/Banner";
import { useEffect, useState } from "react";
function App() {
  let [watchlist,setWatchlist] = useState([])

  const handleAddWatchList = (movie)=>{
    let newWatchList = [...watchlist,movie]
    localStorage.setItem('movie',JSON.stringify(newWatchList))
    setWatchlist(newWatchList)

   
  }
  const handleRemoveWatchList = (movie)=>{
    let filterWatchList = watchlist.filter((currmovie)=>{
      return currmovie.id != movie.id
    })
    localStorage.setItem('movie',JSON.stringify(filterWatchList))
    setWatchlist(filterWatchList)
   
  }
  useEffect(()=>{
    let movieStorage = localStorage.getItem('movie')
    if(!movieStorage){
      return
    }
    setWatchlist(JSON.parse(movieStorage))
  },[])
  
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                
                <Banner /> <Movies handleAddWatchList={handleAddWatchList} handleRemoveWatchList={handleRemoveWatchList} watchlist={watchlist} />
              </>
            }
          />
          <Route path="/watchlist" element={<WatchList watchlist={watchlist} setWatchlist={setWatchlist} handleRemoveWatchList={handleRemoveWatchList}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

//https://api.themoviedb.org/3/movie/popular?api_key=2191d4b48ff5a81f5252180976a882ad&language=en-US&page=2
