import React from 'react';
import './App.css';
import {originals, action, trending} from './urls'
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';
import RowPost from './components/RowPost/RowPost';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Banner />
      <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={trending} title='Trending' isSmall/>
      <RowPost url={action} title='Action' isSmall />
    </div>
  );
}

export default App;
