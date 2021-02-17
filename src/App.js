import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import songAPI from './api/songAPI';
import './App.css';
import Header from './components/Header';
import Loading from './components/Loading';
import Player from './components/Player';
import Songs from './features/Song';
import { saveSong } from './features/Song/songSlice';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const timeCall = useRef(0);

  const dispatch = useDispatch();
  
  const fetchSongs = async () => {
    timeCall.current += 1;
    try {
      const response = await songAPI.getRandomSongs(timeCall.current);
      dispatch(saveSong(response));
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
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 5) {
      console.log("bottom of page")
      fetchSongs();
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