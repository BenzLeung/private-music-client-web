/**
 * @file
 * @author BenzLeung(https://github.com/BenzLeung)
 * @date 2017/4/11
 * Created by JetBrains PhpStorm.
 *
 * 每位工程师都有保持代码优雅的义务
 * each engineer has a duty to keep the code elegant
 */

import { connect } from 'react-redux'
import { progress, autoNextSong, changePlayStatus } from '../redux/actions'
import Audio from '../presentation/Audio/Audio'

const mapStateToProps = (state) => {
    return {
        src: state.url,
        status: state.status,
        startTime: state.startTime
    };
};

const mapDispatchToProps = {
    onProgress: progress,
    onEnded: autoNextSong,
    onStateChanged: changePlayStatus
};

const FilterAudio = connect(
    mapStateToProps,
    mapDispatchToProps
)(Audio);

export default FilterAudio
