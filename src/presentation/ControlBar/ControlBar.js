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
import FilterPlayerTime from '../../container/FilterPlayerTime';

const ControlBar = () => (
    <div className="ControlBar">
        <div className="playCtrlColumn">
            <FilterPlayerControl />
        </div>
        <div className="playModeColumn">
            <div className="playTimeColumn">
                <FilterPlayerTime />
            </div>
        </div>
        <div className="playProgressColumn">
            <FilterPlayerProgress />
        </div>
    </div>
);

export default ControlBar;
