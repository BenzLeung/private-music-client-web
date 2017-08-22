/**
 * @file redux actions
 * @author BenzLeung(https://github.com/BenzLeung)
 * @date 2017/4/10
 * Created by JetBrains PhpStorm.
 *
 * 每位工程师都有保持代码优雅的义务
 * each engineer has a duty to keep the code elegant
 */

/*************************************************************/
/* 播放控制 */

export function togglePlayPause() {
    return {type: 'TOGGLE_PLAY_PAUSE'};
}

export function play() {
    return {type: 'PLAY'};
}

export function pause() {
    return {type: 'PAUSE'};
}

export function progress(currentTime, totalTime) {
    return {type: 'PROGRESS', currentTime: currentTime, totalTime: totalTime};
}

export function setTime(startTime) {
    return {type: 'SET_TIME', startTime: startTime};
}

export function changePlayStatus(newStatus) {
    return {type: 'CHANGE_PLAY_STATE', newStatus: newStatus};
}


/*************************************************************/
/* 列表控制 */

export function autoNextSong() {
    return {type: 'AUTO_NEXT_SONG'};
}

export function nextSong() {
    return {type: 'NEXT_SONG'};
}

export function prevSong() {
    return {type: 'PREV_SONG'};
}

export function setSong(index) {
    return {type: 'SET_SONG', songIndex: index};
}

export function fetchSongList() {
    return function (dispatch, getState) {
        dispatch({
            type: 'FETCH_LIST'
        });
        let state = getState();
        let url = state['server'] + '/getMusicList';
        return fetch(url)
            .then((response) => {
                response.json().then((json) => {
                    dispatch({
                        type: 'FETCH_LIST_SUCCESS',
                        list: json
                    })
                });
                /*if (response.ok || response.status === 304) {
                    response.json().then((json) => {
                        dispatch({
                            type: 'FETCH_LIST_SUCCESS',
                            list: json
                        })
                    });
                } else {
                    dispatch({
                        type: 'FETCH_LIST_FAILURE',
                        error: '' + response.status + ' ' + response.statusText
                    });
                }*/
            })
    }
}