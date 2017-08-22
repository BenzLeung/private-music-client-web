import React from 'react';
import './App.css';
import TopBar from '../TopBar/TopBar';
import MainFrame from '../MainFrame/MainFrame';
import ControlBar from '../ControlBar/ControlBar';
import Audio from '../../container/FilterAudio';

const App = () => (
    <div className="App">
        <TopBar titleName="私人音乐盒"/>
        <MainFrame />
        <ControlBar />
        <Audio />
    </div>
);

export default App;
