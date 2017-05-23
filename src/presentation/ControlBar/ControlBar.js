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

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const ControlBar = ({titleName}) => (
    <div className="ControlBar">
        <div className="playCtrlColumn">
            <button>上一曲</button>
            <button>播放</button>
            <button>下一曲</button>
        </div>
        <div className="playProgressColumn">
            <Slider />
        </div>
    </div>
);

export default ControlBar;
