/**
 * @file 播放控制栏（底栏）
 * @author BenzLeung(https://github.com/BenzLeung)
 * @date 2017/5/23
 * Created by JetBrains PhpStorm.
 *
 * 每位工程师都有保持代码优雅的义务
 * each engineer has a duty to keep the code elegant
 */

import React from 'react';
import './ControlBar.css';

import FilterPlayerControl from '../../container/FilterPlayerControl';
import FilterPlayerProgress from '../../container/FilterPlayerProgress';
import FilterPlayMode from '../../container/FilterPlayMode';

const ControlBar = () => (
    <div className="ControlBar">
        <div className="playProgressColumn">
            <FilterPlayerProgress />
        </div>
        <div className="playModeColumn">
            <FilterPlayMode />
        </div>
        <div className="playCtrlColumn">
            <FilterPlayerControl />
        </div>
    </div>
);

export default ControlBar;
