import { useEffect } from 'react';
import songAPI from './api/songAPI';
import './App.css';
import Header from './components/Header';
import Player from './components/Player';
import Songs from './features/Song';

function App() {
  return (
    <div className="App">
      <Header />
      <Songs />
      <Player />
    </div>
  );
}

export default App;