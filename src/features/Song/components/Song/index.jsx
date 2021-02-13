import React from 'react'
import './Song.scss'

function Song(props) {
  return (
    <div className="song">
      <div className="song__photo">
        <div className="song__photo__overlay">
          <i className="song__icon__play fas fa-play" />
        </div>
      </div>

      <div className="song__details">
        <div className="song__singer__photo">
          <img 
            src="https://i1.sndcdn.com/artworks-000041124475-2lu7vg-t300x300.jpg" 
            alt="Singer's avatar"
          />
        </div>

        <div className="song__details__name">
          <p className="song__name">Summertime</p>
          <p className="singer__name">Ladykiller</p>
        </div>
      </div>
    </div>
  )
}

Song.propTypes = {

}

export default Song

