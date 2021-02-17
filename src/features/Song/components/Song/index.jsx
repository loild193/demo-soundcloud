import PropTypes from 'prop-types';
import React from 'react';
import LazyLoad from 'react-lazyload';
import Loading from '../../../../components/Loading';
import { size } from '../../../../constants/photo';
import './Song.scss';

const classNames = require('classnames');
function Song(props) {
  const { song, idSongPlaying, isPause, onPlaySong, onPauseSong } = props;
  const {artwork_url, user, title} = song;
  const artwork_url_newSize = artwork_url && artwork_url.replace('-large', size);
  
  const handlePlaySong = (song) => {
    onPlaySong && onPlaySong(song.id);
  }
  const handlePauseSong = () => {
    onPauseSong && onPauseSong();
  }

  return (
    <div className="song">
      <LazyLoad 
        className="song__photo" 
        style={{backgroundImage: `url(${artwork_url_newSize})`}}
        placeholder={<Loading />}
        once={true}
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
        </div>
      </LazyLoad>

      <div className="song__details">
        <LazyLoad
          once={true}
          placeholder={<Loading />}  
        >
          <div className="song__singer__photo">
            <img 
              src={user.avatar_url} 
              alt="Singer's avatar"
            />
          </div>
        </LazyLoad>

        <div className="song__details__name">
          <p className="song__name" title={title}>{title}</p>
          <p className="singer__name" title={user.username}>{user.username}</p>
        </div>
      </div>
    </div>
  )
}

Song.propTypes = {
  song: PropTypes.object.isRequired,
  idSongPlaying: PropTypes.number,
  isPause: PropTypes.bool,
  onPlaySong: PropTypes.func,
  onPauseSong: PropTypes.func,
}
Song.defaultProps = {
  song: {},
  idSongPlaying: null,
  isPause: false,
  onPlaySong: null,
  onPauseSong: null,
}

export default Song

