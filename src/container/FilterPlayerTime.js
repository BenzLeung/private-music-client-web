/**
 * @file 播放时间显示
 * @author BenzLeung(https://github.com/BenzLeung)
 * @date 2017/7/8
 * Created by JetBrains PhpStorm.
 *
 * 每位工程师都有保持代码优雅的义务
 * each engineer has a duty to keep the code elegant
 */

import React from 'react';
import { connect } from 'react-redux'
import { setTime } from '../redux/actions'
import { second2time } from '../common/common'

const PlayerTime = ({currentTime, totalTime}) => (
    <div className="PlayerTime">
        <span>{currentTime}</span>&nbsp;/&nbsp;<span>{totalTime}</span>
    </div>
);

const mapStateToProps = (state) => {
    return {
        currentTime: second2time(state.currentTime),
        totalTime: second2time(state.totalTime)
    };
};

const mapDispatchToProps = {
    onAfterDragged: setTime
};

const FilterPlayerTime = connect(
    mapStateToProps,
    mapDispatchToProps
)(PlayerTime);

export default FilterPlayerTime
