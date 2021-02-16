import axiosClient from "./axiosClient";

const randomCharacter = Math.random().toString(36).substring(2, 3);
const songAPI = {
  getRandomSongs: () => {
    // const { REACT_APP_CLIENT_ID } = process.env;
    const url = '/tracks';
    const params = { 
      client_id: process.env.REACT_APP_CLIENT_ID,
      q: randomCharacter,
      limit: 25,
      offset: 0,
    }
    // return new Promise((resolve, reject) => {
    //   axiosClient.get(url, { params });
    //   resolve()
    // });
    return axiosClient.get(url, { params });
  }
};

export default songAPI;