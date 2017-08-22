/**
 * @file store 配置
 * @author BenzLeung(https://github.com/BenzLeung)
 * @date 2017/8/23
 * Created by JetBrains PhpStorm.
 *
 * 每位工程师都有保持代码优雅的义务
 * each engineer has a duty to keep the code elegant
 */

import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from './reducer'

const loggerMiddleware = createLogger();

export default function configureStore(preloadState) {
    return createStore(
        reducer,
        preloadState,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    )
}