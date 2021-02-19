import PropTypes from 'prop-types';
import React from 'react';
import { size } from '../../../../constants/photo';
import './Song.scss';

const classNames = require('classnames');
function Song(props) {
  const { 
    playlist, song, idSongPlaying, isPause, 
    onPlaySong, onPauseSong,
    onAddSong, onRemoveSong, 
  } = props;
  const {artwork_url, user, title} = song;
  const artwork_url_newSize = artwork_url && artwork_url.replace('-large', size);
  
  const handlePlaySong = (song) => {
    onPlaySong && onPlaySong(song.id);
  }
  const handlePauseSong = () => {
    onPauseSong && onPauseSong();
  }

  const handleAddSong = (song) => {
    onAddSong && onAddSong(song);
  }

  const handleRemoveSong = (song) => {
    onRemoveSong && onRemoveSong(song);
  }

  return (
    <div className="song">
      <div 
        className="song__photo" 
        style={{backgroundImage: `url(${artwork_url_newSize})`}}
      >
        <div className={classNames({playing: song.id === idSongPlaying, song__photo__overlay: true})}>
          {
            song.id === idSongPlaying && isPause === false ? 
            <i 
              className="song__icon__pause far fa-pause-circle fa-2x" 
              onClick={handlePauseSong}
            />
            :
            <i 
              className="song__icon__play far fa-play-circle fa-2x" 
              onClick={() => handlePlaySong(song)}
            />
          }
          {
            playlist.findIndex(track => track.id === song.id) === -1 ?
            <i 
              className="song__icon__add fas fa-plus-circle fa-2x" 
              onClick={() => handleAddSong(song)}
            />
            :
            <i 
              className="song__icon__remove fas fa-minus-circle fa-2x" 
              onClick={() => handleRemoveSong(song)}
            />
          }
        </div>
      </div>

      <div className="song__details">
        <div className="song__singer__photo">
          <img 
            src={user.avatar_url} 
            alt="Singer's avatar"
          />
        </div>

        <div className="song__details__name">
          <p className="song__name" title={title}>{title}</p>
          <p className="singer__name" title={user.username}>{user.username}</p>
        </div>
      </div>
    </div>
  )
}

Song.propTypes = {
  playlist: PropTypes.array,
  song: PropTypes.object.isRequired,
  idSongPlaying: PropTypes.number,
  isPause: PropTypes.bool,
  onPlaySong: PropTypes.func,
  onPauseSong: PropTypes.func,

  onAddSong: PropTypes.func,
  onRemoveSong: PropTypes.func,
}
Song.defaultProps = {
  playlist: [],
  song: {},
  idSongPlaying: null,
  isPause: false,
  onPlaySong: null,
  onPauseSong: null,

  onAddSong: null,
  onRemoveSong: null,
}

export default Song

