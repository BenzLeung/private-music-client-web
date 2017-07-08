/**
 * @file 歌曲列表的一行
 * @author BenzLeung(https://github.com/BenzLeung)
 * @date 2017/7/8
 * Created by JetBrains PhpStorm.
 *
 * 每位工程师都有保持代码优雅的义务
 * each engineer has a duty to keep the code elegant
 */

import React from 'react';
import './ListItem.css';

const ListItem = ({songInfo}) => (
    <div className="ListItem">
        <div className="li-title">{(songInfo['title'] || '-')}</div>
        <div className="li-artist">{(songInfo['artist'] || '-')}</div>
        <div className="li-album">{(songInfo['album'] || '-')}</div>
    </div>
);
