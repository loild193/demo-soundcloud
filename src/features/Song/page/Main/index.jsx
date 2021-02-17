import PropTypes from 'prop-types';
import React from 'react';
import LazyLoad from 'react-lazyload';
import Loading from '../../../../components/Loading';
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
          <LazyLoad 
            key={song.id} 
            className="main-page__wrapper"
            offset={[-100, 100]}
            placeholder={<Loading />}
          >
            <Song 
              song={song}
              idSongPlaying={idSongPlaying}
              isPause={isPause}
              onPlaySong={handlePlaySong}
              onPauseSong={handlePauseSong}
            />
          </LazyLoad>
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

