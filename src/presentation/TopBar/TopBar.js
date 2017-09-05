/**
 * @file 顶栏（标题栏）
 * @author BenzLeung(https://github.com/BenzLeung)
 * @date 2017/5/16
 * Created by JetBrains PhpStorm.
 *
 * 每位工程师都有保持代码优雅的义务
 * each engineer has a duty to keep the code elegant
 */

import React from 'react';
import Touchable from 'rc-touchable';
import './TopBar.css';

const TopBar = ({titleName, subtitleName, onToggleSongInfo}) => (
    <div className="TopBar">
        <Touchable onPress={onToggleSongInfo} activeClassName="toggleSongInfoActive">
            <div className="toggleSongInfo">
                <div className="toggleSongInfoButton">词</div>
            </div>
        </Touchable>
        <h1>{titleName}</h1>
        <h2>{subtitleName || (<a href="https://github.com/benzleung/">https://github.com/benzleung/</a>)}</h2>
    </div>
);

export default TopBar;
