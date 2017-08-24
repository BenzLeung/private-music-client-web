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
import './TopBar.css';

const TopBar = ({titleName, subtitleName}) => (
    <div className="TopBar">
        <h1>{titleName}</h1>
        <h2>{subtitleName}</h2>
    </div>
);

export default TopBar;
