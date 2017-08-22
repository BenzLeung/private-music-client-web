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

const PlayerControl = ({onClickPlayPause, status}) => (
    <div className="PlayerControl">
        <button>上一曲</button>
        <button onClick={onClickPlayPause}>{status === 'play' ? '暂停' : '播放'}</button>
        <button>下一曲</button>
    </div>
);

export default PlayerControl;
