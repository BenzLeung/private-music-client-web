/**
 * @file 列表容器
 * @author BenzLeung(https://github.com/BenzLeung)
 * @date 2017/7/8
 * Created by JetBrains PhpStorm.
 *
 * 每位工程师都有保持代码优雅的义务
 * each engineer has a duty to keep the code elegant
 */

import React from 'react';
import { connect } from 'react-redux';
import { setSong } from '../redux/actions';
import SongList from '../presentation/SongList/SongList';


const mapStateToProps = (state) => {
    return {
        currentIndex: state.currentIndex,
        songList: state.songList
    };
};

const mapDispatchToProps = {
    onSetSong: setSong
};

const FilterSongList = connect(
    mapStateToProps,
    mapDispatchToProps
)(SongList);

export default FilterSongList

