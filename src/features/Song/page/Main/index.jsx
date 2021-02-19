import PropTypes from 'prop-types';
import React from 'react';
import LazyLoad from 'react-lazyload';
import Loading from '../../../../components/Loading';
import Song from '../../components/Song';
import './MainPage.scss';

const classNames = require('classnames');
function MainPage(props) {
  const { 
    songs, playlist, idSongPlaying, isPause, loading, 
    onClickPlaySong, onClickPauseSong,
    onClickAddSong, onClickRemoveSong, 
  } = props;

  const handlePlaySong = (id) => {
    onClickPlaySong && onClickPlaySong(id);
  }
  const handlePauseSong = () => {
    onClickPauseSong && onClickPauseSong();
  }

  const handleAddSong = (song) => {
    onClickAddSong && onClickAddSong(song);
  }

  const handleRemoveSong = (song) => {
    onClickRemoveSong && onClickRemoveSong(song);
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
              playlist={playlist}
              idSongPlaying={idSongPlaying}
              isPause={isPause}
              onPlaySong={handlePlaySong}
              onPauseSong={handlePauseSong}

              onAddSong={handleAddSong}
              onRemoveSong={handleRemoveSong}
            />
          </LazyLoad>
        ))
      }
      {
        loading !== null && <Loading />
      }
    </div>
  )
}

MainPage.propTypes = {
  songs: PropTypes.array.isRequired,
  playlist: PropTypes.array,
  idSongPlaying: PropTypes.number,
  isPause: PropTypes.bool,
  loading: PropTypes.string,
  onClickPlaySong: PropTypes.func,
  onClickPauseSong: PropTypes.func,

  onClickAddSong: PropTypes.func,
  onClickRemoveSong: PropTypes.func,
}
MainPage.defaultProps = {
  songs: [],
  playlist: [],
  idSongPlaying: null,
  isPause: false,
  loading: null,
  onClickPlaySong: null,
  onClickPauseSong: null,

  onClickAddSong: null,
  onClickRemoveSong: null,
}

export default MainPage

