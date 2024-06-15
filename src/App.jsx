import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";
import Banner from "./components/Banner";
function App() {
  const [watchList, setWatchList] = useState([]);
  let addMovietoWatchlist=(movie)=>{
    setWatchList([...watchList,movie])
    console.log('added to watch list from App component : '+watchList.length)
  }
  let removeFromWatchList=(movie)=>{
    let filteredList=watchList.filter((m)=>m.id!=movie.id)
    setWatchList(filteredList)
  }
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies watchList={watchList} watchListcallBack={addMovietoWatchlist} removeFromWatchListCallBack={removeFromWatchList}/>
              </>
            }
          />
          <Route path="/watchlist" element={<WatchList addedMovies={watchList}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
