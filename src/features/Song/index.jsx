import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/Loading';
import MainPage from './page/Main';
import { changePauseSong, setSongPlaying } from './songSlice';
function Songs(props) {
  const songs = useSelector(state => state.songs.songs);
  const idSongPlaying = useSelector(state => state.songs.playingSong.idSongPlaying);
  const isPause = useSelector(state => state.songs.playingSong.isPause);
  const dispatch = useDispatch();

  const handlePlaySong = (id) => {
    id !== idSongPlaying && dispatch(setSongPlaying(id));
    dispatch(changePauseSong(false));
  }
  
  const handlePauseSong = () => {
    dispatch(changePauseSong(true));
  }

  return (
    <div className="container-fluid" style={{backgroundColor: "#433360"}}>
      <div className="container">
        <MainPage 
          songs={songs}
          idSongPlaying={idSongPlaying}
          isPause={isPause}
          onClickPlaySong={handlePlaySong}
          onClickPauseSong={handlePauseSong}
        />
        <Loading />
      </div>
    </div>
  )
}

Songs.propTypes = {}

export default Songs

