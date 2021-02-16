import PropTypes from 'prop-types';
import React from 'react';
import { size } from '../../../../constants/photo';
import './Song.scss';

function Song(props) {
  const { song } = props;
  console.log(song);
  const {artwork_url, user, title} = song;
  const artwork_url_newSize = artwork_url && artwork_url.replace('-large', size);
  
  return (
    <div className="song">
      <div className="song__photo" style={{backgroundImage: `url(${artwork_url_newSize})`}}>
        <div className="song__photo__overlay">
          <i className="song__icon__play fas fa-play" />
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
  song: PropTypes.object.isRequired,
}
Song.defaultProps = {
  song: {},
}

export default Song

