import React, { useRef } from 'react'
import ReactAudioPlayer from 'react-audio-player'
import { useDispatch, useSelector } from 'react-redux';
import { size } from '../../constants/photo';
import { changePauseSong } from '../../features/Song/songSlice';
import './Player.scss';

const classNames = require('classnames');
function Player(props) {
  const idSongPlaying = useSelector(state => state.songs.playingSong.idSongPlaying);
  const songPlaying = useSelector(state => state.songs.songs.find(song => song.id === idSongPlaying));
  const isPause = useSelector(state => state.songs.playingSong.isPause);
  const dispatch = useDispatch();

  const audioRef = useRef(null);

  if (isPause === true) {
    audioRef.current && audioRef.current.audioEl.current.pause();
  }
  else {
    audioRef.current && audioRef.current.audioEl.current.play();
  }

  const handlePauseSong = () => {
    dispatch(changePauseSong(true));
  }

  return (
    <div className={classNames({ "footer container-fluid": true, "footer-appear--active": idSongPlaying })}>
      <div className="container d-flex justify-content-between align-items-center">
        <div className="song-footer">
          <div className="song__avatar">
            <img 
              src={
                songPlaying ? songPlaying.artwork_url.replace('-large', size) 
                : "https://colorate.azurewebsites.net/SwatchColor/242526"
                }
              alt="Song's avatar"
            />
          </div>
          <div className="song__details__name">
            <p className="song__name">{songPlaying && songPlaying.title}</p>
            <p className="song__singer__name">{songPlaying && songPlaying.user.username}</p>
          </div>
        </div>

        <div className="player">
          <ReactAudioPlayer
            ref={audioRef}
            autoPlay
            controls
            onPause={handlePauseSong}
            // src={
            //   songPlaying && 
            //   `${songPlaying.stream_url}?client_id=${process.env.REACT_APP_CLIENT_ID}`
            // }
            src="https://p.scdn.co/mp3-preview/7333d894663eecf060ef065cacd9cdb05813e770?cid=774b29d4f13844c495f206cafdad9c86"
          />
          <div className="player__utils">
            <i className="player__utils--loop fas fa-sync-alt" />
          </div>
        </div>
      </div>
    </div>
  )
}

Player.propTypes = {

}

export default Player

