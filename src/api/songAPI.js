import axiosClient from "./axiosClient";

// const randomCharacter = Math.random().toString(36).substring(2, 3);
const songAPI = {
  getRandomSongs: (timeCall) => {
    // const { REACT_APP_CLIENT_ID } = process.env;
    const url = '/tracks';
    const params = { 
      client_id: process.env.REACT_APP_CLIENT_ID,
      q: "binz",
      limit: 25,
      offset: 25 * timeCall,
    }
    // return new Promise((resolve, reject) => {
    //   axiosClient.get(url, { params });
    //   resolve()
    // });
    return axiosClient.get(url, { params });
  }
};

export default songAPI;