import React, { useEffect } from 'react'
import LazyLoad from 'react-lazyload';
import { useDispatch, useSelector } from 'react-redux'
import Song from '../../components/Song';
import { changeIsPlaylist, changePauseSong, removeFromPlaylist, setSongPlaying } from '../../songSlice';
import './Playlist.scss'

function Playlist(props) {
  const playlist = useSelector(state => state.songs.playlist);
  const idSongPlaying = useSelector(state => state.songs.playingSong.idSongPlaying);
  const isPause = useSelector(state => state.songs.playingSong.isPause);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeIsPlaylist(true));
  }, [dispatch]);

  const handlePlaySong = (id) => {
    id !== idSongPlaying && dispatch(setSongPlaying(id));
    dispatch(changePauseSong(false));
  }
  
  const handlePauseSong = () => {
    dispatch(changePauseSong(true));
  }

  const handleRemoveFromPlaylist = (song) => {
    dispatch(removeFromPlaylist(song));
  }

  return (
    <div>
      {
        playlist.length === 0 ? 
          <div className="row playlist text-center">
            <h5>Your playlist is empty. Add more songs to play.</h5>
          </div>
        :
        <div className="row playlist">
          <div className="col-md-5 playlist__track--left">
            <Song
              playlist={playlist}
              song={playlist[0]}
              idSongPlaying={idSongPlaying}
              isPause={isPause}
              onPlaySong={handlePlaySong}
              onPauseSong={handlePauseSong}

              onRemoveSong={handleRemoveFromPlaylist}
            />
          </div>
          <div className="col-md-7 playlist__track--right">
          {
            playlist.slice(1).map((song) => (
              <LazyLoad 
                key={song.id} 
                className="main-page__wrapper"
              >
                <Song
                  playlist={playlist}
                  song={song}
                  idSongPlaying={idSongPlaying}
                  isPause={isPause}
                  onPlaySong={handlePlaySong}
                  onPauseSong={handlePauseSong}

                  onRemoveSong={handleRemoveFromPlaylist}
                />
              </LazyLoad>
            ))
          }
          </div>
        </div>
      }
    </div>
  )
}

Playlist.propTypes = {}

export default Playlist

