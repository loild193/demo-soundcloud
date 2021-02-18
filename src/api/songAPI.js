import axiosClient from "./axiosClient";

// const randomCharacter = Math.random().toString(36).substring(2, 3);
const songAPI = {
  getRandomSongs: (next_href) => {
    const url = '/tracks';
    const params = { 
      client_id: process.env.REACT_APP_CLIENT_ID,
      q: "rap",
      limit: 50,
      linked_partitioning: 1,
    }
    // return new Promise((resolve, reject) => {
    //   axiosClient.get(url, { params });
    //   resolve()
    // });
    if (next_href !== "first") {
      return axiosClient.get(next_href);
    } 
    else if (next_href === "first"){
      return axiosClient.get(url, { params });
    }
    else {
      // next_href === null
      return;
    }
  }
};

export default songAPI;