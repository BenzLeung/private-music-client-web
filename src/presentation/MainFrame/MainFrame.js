/**
 * @file 中间的主要部分
 * @author BenzLeung(https://github.com/BenzLeung)
 * @date 2017/7/9
 * Created by JetBrains PhpStorm.
 *
 * 每位工程师都有保持代码优雅的义务
 * each engineer has a duty to keep the code elegant
 */

import React from 'react';
import './MainFrame.css';
import FilterSongList from '../../container/FilterSongList';
import FilterSongInfo from '../../container/FilterSongInfo';

const MainFrame = () => (
    <div className="MainFrame">
        <div className="SongListFrame">
            <FilterSongList />
        </div>
        <div className="SongInfoFrame">
            <FilterSongInfo />
        </div>
    </div>
);

export default MainFrame;