import PropTypes from 'prop-types';
import React from 'react';
import Song from '../../components/Song';
import './MainPage.scss';
function MainPage(props) {
  const { songs } = props;

  return (
    <div className="main-page">
      {
        songs.map((song) => (
          <div key={song.id}>
            <Song song={song}/>
          </div>
        ))
      }
    </div>
  )
}

MainPage.propTypes = {
  songs: PropTypes.array.isRequired,
}
MainPage.defaultProps = {
  songs: [],
}

export default MainPage

