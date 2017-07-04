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

import PlayerControl from '../../container/FilterPlayerControl';
import ProgressSlider from '../../container/FilterPlayerProgress';

const ControlBar = () => (
    <div className="ControlBar">
        <div className="playCtrlColumn">
            <PlayerControl />
        </div>
        <div className="playProgressColumn">
            <ProgressSlider />
        </div>
    </div>
);

export default ControlBar;
