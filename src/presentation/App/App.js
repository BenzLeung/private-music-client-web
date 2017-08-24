import React from 'react';
import './App.css';
import TopBar from '../../container/FilterTopBar';
import MainFrame from '../MainFrame/MainFrame';
import ControlBar from '../ControlBar/ControlBar';
import Audio from '../../container/FilterAudio';
import SetServer from '../../container/FilterSetServer';

const App = () => (
    <div className="App">

        <TopBar />
        <MainFrame />
        <ControlBar />
        <SetServer />
        <Audio />
    </div>
);

export default App;
