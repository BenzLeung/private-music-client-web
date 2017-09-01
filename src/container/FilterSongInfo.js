/**
 * @file 歌曲信息
 * @author BenzLeung(https://github.com/BenzLeung)
 * @date 2017/9/1
 * Created by JetBrains PhpStorm.
 *
 * 每位工程师都有保持代码优雅的义务
 * each engineer has a duty to keep the code elegant
 */

import { connect } from 'react-redux';
import {fetchSongInfo} from '../redux/actions';
import SongInfo from "../presentation/SongInfo/SongInfo";

const mapStateToProps = (state) => {
    return {
        info: state.songInfo,
        needFetch: state.needFetchInfo,
        isFetching: state.isFetchingInfo,
        errorMsg: state.infoErrorMsg
    };
};

const mapDispatchToProps = {
    onRefresh: fetchSongInfo
};

const FilterSongInfo = connect(
    mapStateToProps,
    mapDispatchToProps
)(SongInfo);

export default FilterSongInfo