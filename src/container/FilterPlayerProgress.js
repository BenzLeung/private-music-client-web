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
import { setTime } from '../redux/actions'
import PlayerProgress from '../presentation/ProgressSlider/ProgressSlider'

const mapStateToProps = (state) => {
    return {
        currentTime: state.currentTime,
        totalTime: state.totalTime
    };
};

const mapDispatchToProps = {
    onAfterDragged: setTime
};

const FilterPlayerProgress = connect(
    mapStateToProps,
    mapDispatchToProps
)(PlayerProgress);

export default FilterPlayerProgress
