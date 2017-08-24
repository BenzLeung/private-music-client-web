/**
 * @file 播放模式：循环播放、随机播放
 * @author BenzLeung(https://github.com/BenzLeung)
 * @date 2017/8/25
 * Created by JetBrains PhpStorm.
 *
 * 每位工程师都有保持代码优雅的义务
 * each engineer has a duty to keep the code elegant
 */

import { connect } from 'react-redux';
import {setPlayMode, togglePlayMode} from '../redux/actions';
import PlayModeControl from '../presentation/PlayModeControl/PlayModeControl';

const mapStateToProps = (state) => {
    return {
        playMode: state.playMode
    };
};

const mapDispatchToProps = {
    onToggle: togglePlayMode,
    onSet: setPlayMode
};

const FilterPlayMode = connect(
    mapStateToProps,
    mapDispatchToProps
)(PlayModeControl);

export default FilterPlayMode