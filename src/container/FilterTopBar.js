/**
 * @file 顶栏（标题栏）显示歌名和歌手
 * @author BenzLeung(https://github.com/BenzLeung)
 * @date 2017/8/24
 * Created by JetBrains PhpStorm.
 *
 * 每位工程师都有保持代码优雅的义务
 * each engineer has a duty to keep the code elegant
 */

import { connect } from 'react-redux';
import {toggleSongInfo} from '../redux/actions';
import TopBar from '../presentation/TopBar/TopBar';


const mapStateToProps = (state) => {
    let title = '私人音乐盒';
    let subtitle = '';
    if (state.songInfo) {
        title = state.songInfo['title'] || '私人音乐盒';
        subtitle = state.songInfo['artist'] || state.songInfo['album'] || '';
        if (state.songInfo['artist'] && state.songInfo['album']) {
            subtitle = state.songInfo['artist'] + ' - ' + state.songInfo['album'];
        }
    }
    return {
        titleName: title,
        subtitleName: subtitle
    };
};

const mapDispatchToProps = {
    onToggleSongInfo: toggleSongInfo
};

const FilterTopBar = connect(
    mapStateToProps,
    mapDispatchToProps
)(TopBar);

export default FilterTopBar
