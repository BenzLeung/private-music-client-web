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
import { togglePlayPause } from '../redux/actions'
import PlayerControl from '../presentation/PlayerControl/PlayerControl'

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = {
    onClickPlayPause: togglePlayPause
};

const FilterPlayerControl = connect(
    mapStateToProps,
    mapDispatchToProps
)(PlayerControl);

export default FilterPlayerControl