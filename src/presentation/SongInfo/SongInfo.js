/**
 * @file 歌曲详情页
 * @author BenzLeung(https://github.com/BenzLeung)
 * @date 2017/9/1
 * Created by JetBrains PhpStorm.
 *
 * 每位工程师都有保持代码优雅的义务
 * each engineer has a duty to keep the code elegant
 */

import React from 'react';
import Lyrics from '../Lyrics/Lyrics';
import './SongInfo.css';

const SongInfo = ({info, isFetching, needFetch, playTime, onRefresh}) => {
    if (needFetch && !isFetching && (typeof onRefresh === 'function')) {
        onRefresh();
    }
    return (
        <div className="SongInfo">
            <div className="AlbumCover">
                <div className="img" style={{backgroundImage: (info && info['cover'] ? 'url(' + info['cover'] + ')' : '')}} />
            </div>
            <div className="LyricsContainer">
                <Lyrics info={info} playTime={playTime}/>
            </div>
        </div>
    );
};

export default SongInfo;
