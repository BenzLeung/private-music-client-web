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
import {nextSong, prevSong, togglePlayPause} from '../redux/actions'
import PlayerControl from '../presentation/PlayerControl/PlayerControl'

const mapStateToProps = (state) => {
    return {
        status: state.status
    };
};

const mapDispatchToProps = {
    onClickPlayPause: togglePlayPause,
    onPrev: prevSong,
    onNext: nextSong
};

/*
// 记一下另一种写法
const mapDispatchToProps = (dispatch, ownProps) => ({
    onClickPlayPause: () => {
        dispatch(togglePlayPause())
    }
});
*/

const FilterPlayerControl = connect(
    mapStateToProps,
    mapDispatchToProps
)(PlayerControl);

export default FilterPlayerControl
