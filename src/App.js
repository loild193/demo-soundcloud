import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import songAPI from './api/songAPI';
import './App.css';
import Header from './components/Header';
import Loading from './components/Loading';
import Player from './components/Player';
import debounce, { initialSearchWord } from './constants/optimize';
import Songs from './features/Song';
import { saveSong, changeIsContinuedSearchSong } from './features/Song/songSlice';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const nextHrefGetSong = useSelector(state => state.songs.next_href);
  const dispatch = useDispatch();
  
  const fetchSongs = async (link, word) => {
    try {
      const response = await songAPI.getSearchSongs(link, word);
      response && dispatch(saveSong(response));
    } catch (error) {
      console.log(error);
    }
  }
  const debounceFetchSongs = debounce(fetchSongs, 700);

  useEffect(() => {
    setIsLoading(true);
    fetchSongs("first", initialSearchWord);
    setIsLoading(false);
  }, []);

  window.onscroll = function(ev) {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 0.5) {
      dispatch(changeIsContinuedSearchSong(true));    
      nextHrefGetSong &&  debounceFetchSongs(nextHrefGetSong);
    }
  };

  const handleSearch = (word) => {
    dispatch(changeIsContinuedSearchSong(false));
    fetchSongs("first", word);
  }
  
  return (
    <div className="App">
      <Header onSearch={handleSearch} />
      {
        isLoading ? <Loading /> : <Songs loading={nextHrefGetSong}/>
      }
      <Player />
    </div>
  );
}

export default App;