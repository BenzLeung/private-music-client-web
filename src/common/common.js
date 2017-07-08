/**
 * @file 公共的方法
 * @author BenzLeung(https://github.com/BenzLeung)
 * @date 2017/7/8
 * Created by JetBrains PhpStorm.
 *
 * 每位工程师都有保持代码优雅的义务
 * each engineer has a duty to keep the code elegant
 */

export const second2time = (seconds) => {
    let m = Math.floor(seconds / 60);
    let s = Math.floor(seconds % 60);
    let res = '';
    if (m < 10) {
        res += '0';
    }
    res += (m + '');
    res += ':';
    if (s < 10) {
        res += '0';
    }
    res += (s + '');
    return res;
};
