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
import Touchable from 'rc-touchable';
import {second2time} from "../../../common/common";
import './ListItem.css';

const ListItem = ({songInfo, onSelect}) => (
    <Touchable onPress={() => {onSelect()}} activeClassName="ListItemActive">
    <div className="ListItem">
        <div className="li-cell li-title">{(songInfo['title'] || '-')}</div>
        <div className="li-cell li-artist">{(songInfo['artist'] || '-')}</div>
        <div className="li-cell li-album">{(songInfo['album'] || '-')}</div>
        <div className="li-cell li-duration">{(songInfo['duration'] ? second2time(songInfo['duration']) : '')}</div>
    </div>
    </Touchable>
);

export default ListItem;