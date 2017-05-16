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
    'status' : 'stop',
    'currentTime' : 0,
    'totalTime' : 0,
    'startTime' : 0
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
        default:
            if (typeof state === 'undefined') {
                return initState;
            }
            return state;
    }
}
