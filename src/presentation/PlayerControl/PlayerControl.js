/**
 * @file 播放控制
 * @author BenzLeung(https://github.com/BenzLeung)
 * @date 2017/7/5
 * Created by JetBrains PhpStorm.
 *
 * 每位工程师都有保持代码优雅的义务
 * each engineer has a duty to keep the code elegant
 */

import React from 'react';
import Touchable from 'rc-touchable';
import BackSvg from './images/back.svg';
import NextSvg from './images/next.svg';
import PlaySvg from './images/play.svg';
import PauseSvg from './images/pause.svg';
import './PlayerControl.css';

const PlayerControl = ({onPrev, onNext, onClickPlayPause, status}) => (
    <div className="PlayerControl">
        <Touchable onPress={onPrev} activeClassName="controlButtonActive">
            <div className="controlButton back">
                <img src={BackSvg} alt="上一曲"/>
            </div>
        </Touchable>
        <Touchable onPress={onClickPlayPause} activeClassName="controlButtonActive">
            <div className="controlButton playPause">
                <img src={status === 'play' ? PauseSvg : PlaySvg} alt="播放暂停"/>
            </div>
        </Touchable>
        <Touchable onPress={onNext} activeClassName="controlButtonActive">
            <div className="controlButton next">
                <img src={NextSvg} alt="下一曲"/>
            </div>
        </Touchable>
    </div>
);

export default PlayerControl;
