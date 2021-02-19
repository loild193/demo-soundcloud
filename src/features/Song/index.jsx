import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import MainPage from './page/Main';
import Playlist from './page/Playlist';
import { addToPlayList, changeIsPlaylist, changePauseSong, removeFromPlaylist, setSongPlaying } from './songSlice';
function Songs(props) {
  const { loading } = props;
  const songs = useSelector(state => state.songs.songs);
  const playlist = useSelector(state => state.songs.playlist);
  const idSongPlaying = useSelector(state => state.songs.playingSong.idSongPlaying);
  const isPause = useSelector(state => state.songs.playingSong.isPause);
  const dispatch = useDispatch();
  const match = useRouteMatch();

  useEffect(() => {
    dispatch(changeIsPlaylist(false));
  }, [dispatch]);

  const handlePlaySong = (id) => {
    id !== idSongPlaying && dispatch(setSongPlaying(id));
    dispatch(changePauseSong(false));
  }
  
  const handlePauseSong = () => {
    dispatch(changePauseSong(true));
  }

  const handleAddToPlaylist = (song) => {
    dispatch(addToPlayList(song));
  }

  const handleRemoveFromPlaylist = (song) => {
    dispatch(removeFromPlaylist(song));
  }

  return (
    <div className="container-fluid" style={{backgroundColor: "#433360"}}>
      <div className="container">
        <Switch>
          <Route 
            exact 
            path={match.url} 
            render={() => 
              <MainPage 
                songs={songs}
                playlist={playlist}
                idSongPlaying={idSongPlaying}
                isPause={isPause}
                loading={loading}
                onClickPlaySong={handlePlaySong}
                onClickPauseSong={handlePauseSong}

                onClickAddSong={handleAddToPlaylist}
                onClickRemoveSong={handleRemoveFromPlaylist}
              />
            }
          />
          <Route 
            path={`${match.url}/playlist`}
            component={Playlist}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  )
}

Songs.propTypes = {
  loading: PropTypes.string,
}
Songs.defaultProps = {
  loading: null,
}

export default Songs

