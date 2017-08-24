/**
 * @file 播放模式切换
 * @author BenzLeung(https://github.com/BenzLeung)
 * @date 2017/8/25
 * Created by JetBrains PhpStorm.
 *
 * 每位工程师都有保持代码优雅的义务
 * each engineer has a duty to keep the code elegant
 */

import React, {Component} from 'react';
import Touchable from 'rc-touchable';
import {setCookie, getCookie} from "../../common/common";
import './PlayModeControl.css';
import RepeatSvg from './images/repeat.svg';
import ShuffleSvg from './images/shuffle.svg';

class PlayModeControl extends Component {

    componentDidMount() {
        let playMode = parseInt(getCookie('playMode'), 10);
        if (playMode) {
            this.props['onSet'](playMode);
        }
    }

    componentDidUpdate() {
        let playMode = this.props['playMode'];
        setCookie('playMode', playMode, 365);
    }

    render() {
        let onToggle = this.props['onToggle'];
        let playMode = this.props['playMode'];
        let svg;
        switch (playMode) {
            default:
            case 0:
                svg = RepeatSvg;
                break;
            case 2:
                svg = ShuffleSvg;
                break;
        }
        return (
            <div className="PlayMode">
                <Touchable onPress={onToggle} activeClassName="PlayModeButtonActive">
                    <div className="PlayModeButton">
                        <img src={svg} alt="播放模式" />
                    </div>
                </Touchable>
            </div>
        );
    }
}

export default PlayModeControl;