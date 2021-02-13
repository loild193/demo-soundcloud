import React from 'react'
import ReactAudioPlayer from 'react-audio-player'
import './Player.scss';

function Player(props) {
  return (
    <div className="footer container-fluid" style={{backgroundColor: "#242526"}}>
      <div className="container d-flex justify-content-between align-items-center">
        <div className="song-footer">
          <div className="song__avatar">
            <img 
              src="https://i1.sndcdn.com/artworks-000041124475-2lu7vg-t300x300.jpg" 
              alt="Song's avatar"
            />
          </div>
          <div className="song__details__name">
            <p className="song__name">Summertime</p>
            <p className="song__singer__name">Ladykiller</p>
          </div>
        </div>

        <div className="player">
          <ReactAudioPlayer
            controls
            src="https://cdns-preview-1.dzcdn.net/stream/c-13039fed16a173733f227b0bec631034-12.mp3"
          />
        </div>
      </div>
    </div>
  )
}

Player.propTypes = {

}

export default Player

