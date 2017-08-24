/**
 * @file redux reducer
 * @author BenzLeung(https://github.com/BenzLeung)
 * @date 2017/4/7
 * Created by JetBrains PhpStorm.
 *
 * 每位工程师都有保持代码优雅的义务
 * each engineer has a duty to keep the code elegant
 */

const initState = {
    // 服务器
    'server' : '',
    'settingServer' : true,

    // 播放
    'url' : '',
    'status' : 'stop',
    'currentTime' : 0,
    'totalTime' : 0,
    'startTime' : 0,

    // 歌曲
    'isFetchingInfo' : false,
    'infoErrorMsg' : '',
    'songInfo' : null,

    // 列表
    'isFetchingList' : false,
    'listErrorMsg' : '',
    'currentIndex' : -1,
    'upNextArray': [],
    'playMode' : 0, // 0-列表循环，1-单曲循环（暂不实现），2-随机播放
    'songList' : []
};

const makeShuffleList = (currentIndex, total) => {
    let res = [];
    for (let i = 0; i < total; i ++) {
        if (i !== currentIndex) {
            res.push(i);
        }
    }
    res = res.sort(() => {
        return Math.random() - 0.5;
    });
    if (currentIndex >= 0 && currentIndex < total) {
        res.push(currentIndex);
    }
    return res;
};

export default (state = initState, action) => {
    switch (action['type']) {

        case 'TOGGLE_PLAY_PAUSE':
            if (!state.url) {
                let firstIndex = state.upNextArray.length ? state.upNextArray[state.upNextArray.length - 1] : 0;
                let songInfo = state.songList[firstIndex];
                return Object.assign({}, state, {
                    // 播放器
                    'url': state['server'] + '/getMusicFile?filename=' + encodeURIComponent(songInfo['filename']),
                    'status': 'play',
                    'startTime' : 0,

                    // 歌曲信息
                    'songInfo': songInfo,

                    // 列表
                    'currentIndex': firstIndex
                });
            }
            return Object.assign({}, state, {
                // todo: 加入状态机限制
                'status': (state['status'] === 'play') ? 'pause' : 'play'
            });
        case 'PLAY':
            return Object.assign({}, state, {
                // todo: 加入状态机限制
                'status': 'play'
            });
        case 'PAUSE':
            return Object.assign({}, state, {
                // todo: 加入状态机限制
                'status': 'pause'
            });
        case 'PROGRESS':
            return Object.assign({}, state, {
                'currentTime': action['currentTime'],
                'totalTime': action['totalTime']
            });
        case 'SET_TIME':
            return Object.assign({}, state, {
                'startTime': action['startTime']
            });
        case 'CHANGE_PLAY_STATE':
            if (action['newStatus'] === state['status']) {
                return state;
            }
            return Object.assign({}, state, {
                'status': action['newStatus']
            });

        // 歌曲信息拉取
        case 'FETCH_SONG_INFO':
            return Object.assign({}, state, {
                'isFetchingInfo': true,
                'infoErrorMsg' : ''
            });
        case 'FETCH_SONG_INFO_SUCCESS':
            return Object.assign({}, state, {
                'isFetchingInfo': false,
                'infoErrorMsg': '',
                'songInfo': action['info']
            });
        case 'FETCH_SONG_INFO_FAILURE':
            return Object.assign({}, state, {
                'isFetchingInfo': false,
                'infoErrorMsg': action['error']
            });

        // 列表拉取
        case 'FETCH_LIST':
            return Object.assign({}, state, {
                'isFetchingList': true,
                'listErrorMsg': ''
            });
        case 'FETCH_LIST_SUCCESS':
            return Object.assign({}, state, {
                'isFetchingList': false,
                'listErrorMsg': '',
                'songList': action['list'],
                'upNextArray': (state.playMode === 2 ? makeShuffleList(-1, action['list'].length) : [])
            });
        case 'FETCH_LIST_FAILURE':
            return Object.assign({}, state, {
                'isFetchingList': false,
                'listErrorMsg': action['error']
            });

        // 列表控制
        case 'AUTO_NEXT_SONG':
        case 'NEXT_SONG':
        case 'PREV_SONG':
        case 'SET_SONG':
            let curIndex = state['currentIndex'];
            let listLen = state['songList'];
            let songInfo;
            let newUpNextArray = [];

            switch (action['type']) {

                // todo: 随机播放模式
                case 'AUTO_NEXT_SONG':
                case 'NEXT_SONG':
                    if (state.upNextArray.length) {
                        curIndex = state.upNextArray[0];
                        newUpNextArray = state.upNextArray.slice(1);
                        newUpNextArray.push(curIndex);
                    } else {
                        curIndex ++;
                        if (curIndex >= listLen) {
                            curIndex = 0;
                        }
                    }
                    break;
                case 'PREV_SONG':
                    if (state.upNextArray.length) {
                        curIndex = state.upNextArray[state.upNextArray.length - 1];
                        newUpNextArray = state.upNextArray.slice(0, -1);
                        newUpNextArray.unshift(curIndex);
                        curIndex = newUpNextArray[newUpNextArray.length - 1];
                    } else {
                        curIndex--;
                        if (curIndex < 0) {
                            curIndex = listLen - 1;
                        }
                    }
                    break;
                case 'SET_SONG':
                    curIndex = action['songIndex'];
                    break;
                default:
                    break;
            }
            songInfo = state['songList'][curIndex];

            return Object.assign({}, state, {
                // 播放器
                'url': state['server'] + '/getMusicFile?filename=' + encodeURIComponent(songInfo['filename']),
                'status': 'play',
                'startTime' : 0,

                // 歌曲信息
                'songInfo': songInfo,

                // 列表
                'currentIndex': curIndex,
                'upNextArray': newUpNextArray
            });

        case 'SET_PLAY_MODE':
            return Object.assign({}, state, {
                'playMode': action['mode'],
                'upNextArray': (action['mode'] === 2 ? makeShuffleList(state.currentIndex, state.songList.length) : [])
            });

        case 'TOGGLE_PLAY_MODE':
            let oldMode = state.playMode;
            let newMode;
            switch (oldMode) {
                case 0:
                    newMode = 2;
                    break;
                case 2:
                default:
                    newMode = 0;
                    break;
            }
            return Object.assign({}, state, {
                'playMode': newMode,
                'upNextArray': (newMode === 2 ? makeShuffleList(state.currentIndex, state.songList.length) : [])
            });


        // 服务器设置
        case 'SET_SERVER_URL':
            return Object.assign({}, state, {
                'server': action['url'],
                'settingServer': false
            });

        default:
            if (typeof state === 'undefined') {
                return initState;
            }
            return state;
    }
}
