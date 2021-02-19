import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import songAPI from './api/songAPI';
import './App.css';
import Header from './components/Header';
import NotFound from './components/NotFound';
import Player from './components/Player';
import debounce, { initialSearchWord } from './constants/optimize';
import Songs from './features/Song';
import { changeIsContinuedSearchSong, saveSong } from './features/Song/songSlice';

function App() {
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
    fetchSongs("first", initialSearchWord);
  }, []);

  window.onscroll = function(ev) {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 1) {
      dispatch(changeIsContinuedSearchSong(true));
      nextHrefGetSong && debounceFetchSongs(nextHrefGetSong);
    }
  };

  const handleSearch = (word) => {
    dispatch(changeIsContinuedSearchSong(false));
    fetchSongs("first", word);
  }

  return (
    <div className="App">
      <Router>
        <Header onSearch={handleSearch} />

        <Switch>
          <Redirect exact from="/" to="songs" />
          <Route path="/songs" render={() => <Songs loading={nextHrefGetSong} />}/>
          <Route component={NotFound} /> 
        </Switch>

        <Player />
      </Router>
    </div>
  );
}

export default App;