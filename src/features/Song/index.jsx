import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import songAPI from '../../api/songAPI';
import MainPage from './page/Main';
import { saveSong } from './songSlice';

function Songs(props) {
  const [songs, setSongs] = useState([]);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await songAPI.getRandomSongs();
        dispatch(saveSong(response));
        setSongs(response);
      } catch (error) {
        console.log(error);
      }
    }

    fetchSongs();
  }, [dispatch]);

  return (
    <div className="container-fluid" style={{backgroundColor: "#433360"}}>
      <div className="container">
        <MainPage songs={songs}/>
      </div>
    </div>
  )
}

Songs.propTypes = {

}

export default Songs

