/**
 * @file 顶栏
 * @author BenzLeung(https://github.com/BenzLeung)
 * @date 2017/5/16
 * Created by JetBrains PhpStorm.
 *
 * 每位工程师都有保持代码优雅的义务
 * each engineer has a duty to keep the code elegant
 */

import React, { Component } from 'react';
import './TopBar.css';

const TopBar = (title) => (
    <div className="TopBar">
        <h1>{title}</h1>
    </div>
);

export default TopBar;
