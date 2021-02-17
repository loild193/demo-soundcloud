import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import songAPI from './api/songAPI';
import './App.css';
import Header from './components/Header';
import Player from './components/Player';
import Songs from './features/Song';
import { saveSong } from './features/Song/songSlice';

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await songAPI.getRandomSongs();
        dispatch(saveSong(response));
      } catch (error) {
        console.log(error);
      }
    }

    fetchSongs();
  }, [dispatch]);
  
  return (
    <div className="App">
      <Header />
      <Songs />
      <Player />
    </div>
  );
}

export default App;