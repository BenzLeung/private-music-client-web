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
    'server' : 'http://192.168.199.240:32767',

    // 播放
    'url' : 'testMusic/A-Little-Love.mp3',
    'status' : 'stop',
    'currentTime' : 0,
    'totalTime' : 0,
    'startTime' : 0,

    // 歌曲
    'isFetchingInfo' : false,
    'infoErrorMsg' : '',
    'songInfo' : {
        title: "A Little Love",
        artist: "冯曦妤",
        album: "A Little Love",
        format: "mp3",
        bitrate: 320000,
        duration: 189,
        filename: "A Little Love - 冯曦妤.mp3",
        filesize: 7593422
    },

    // 列表
    'isFetchingList' : false,
    'listErrorMsg' : '',
    'currentIndex' : 0,
    'songList' : []
};

export default (state = initState, action) => {
    switch (action['type']) {

        case 'TOGGLE_PLAY_PAUSE':
            return Object.assign({}, state, {
                'status': (state['status'] === 'play') ? 'pause' : 'play'
            });
        case 'PLAY':
            return Object.assign({}, state, {
                'status': 'play'
            });
        case 'PAUSE':
            return Object.assign({}, state, {
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

        // todo: 歌曲信息拉取

        // todo: 列表控制
        case 'FETCH_LIST':
            return Object.assign({}, state, {
                'isFetchingList': true,
                'listErrorMsg': ''
            });
        case 'FETCH_LIST_SUCCESS':
            return Object.assign({}, state, {
                'isFetchingList': false,
                'listErrorMsg': '',
                'songList': action['list']
            });
        case 'FETCH_LIST_FAILURE':
            return Object.assign({}, state, {
                'isFetchingList': false,
                'listErrorMsg': action['error']
            });

        default:
            if (typeof state === 'undefined') {
                return initState;
            }
            return state;
    }
}
