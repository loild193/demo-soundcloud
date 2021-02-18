import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import songAPI from './api/songAPI';
import './App.css';
import Header from './components/Header';
import Loading from './components/Loading';
import Player from './components/Player';
import throttle from './constants/optimize';
import Songs from './features/Song';
import { saveSong } from './features/Song/songSlice';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const nextHrefGetSong = useSelector(state => state.songs.next_href);
  const dispatch = useDispatch();
  
  const fetchSongs = async (link) => {
    try {
      const response = await songAPI.getRandomSongs(link ? link : "first");
      if (response) {
        dispatch(saveSong(response));
      }
      else {
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setIsLoading(true);
    fetchSongs();
    setIsLoading(false);
  }, []);

  window.onscroll = function(ev) {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 0.5) {
      throttle(fetchSongs(nextHrefGetSong), 500);
    }
  };
  
  return (
    <div className="App">
      <Header />
      {
        isLoading ? <Loading /> : <Songs />
      }
      <Player />
    </div>
  );
}

export default App;