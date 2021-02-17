import PropTypes from 'prop-types';
import React from 'react';
import Song from '../../components/Song';
import './MainPage.scss';

const classNames = require('classnames');
function MainPage(props) {
  const { songs, idSongPlaying, isPause, onClickPlaySong, onClickPauseSong } = props;

  const handlePlaySong = (id) => {
    onClickPlaySong && onClickPlaySong(id);
  }
  const handlePauseSong = () => {
    onClickPauseSong && onClickPauseSong();
  }

  return (
    <div className={classNames({ "main-page": true, "footer-none": !idSongPlaying })}>
      {
        songs.map((song) => (
          <div key={song.id} className="main-page__wrapper">
            <Song 
              song={song}
              idSongPlaying={idSongPlaying}
              isPause={isPause}
              onPlaySong={handlePlaySong}
              onPauseSong={handlePauseSong}
            />
          </div>
        ))
      }
    </div>
  )
}

MainPage.propTypes = {
  songs: PropTypes.array.isRequired,
  idSongPlaying: PropTypes.number,
  isPause: PropTypes.bool,
  onClickPlaySong: PropTypes.func,
  onClickPauseSong: PropTypes.func,
}
MainPage.defaultProps = {
  songs: [],
  idSongPlaying: null,
  isPause: false,
  onClickPlaySong: null,
  onClickPauseSong: null,
}

export default MainPage

